/*
  This module contains code for converting CSV-formatted data into various TypeScript objects. 

  Note the tsconfig.json for this project, which enables some checking that is disabled 
  by default. In particular, "noUncheckedIndexedAccess" needs some discussion in 
  comments below.
*/

/** EOL will be the local operating-system line separator. */
import { EOL } from "os";

/**
 * A very naive CSV parser. There are a few weaknesses here.
 *   (1) It assumes that no special cases are present. There will be many valid CSV lines that
 *       this function will parse incorrectly, for many different reasons.
 *       We will have to explore this via testing.
 *   (2) It loses header information, if any is present. It turns a header into another string[],
 *       which gets conflated with the real data. There's also no connection between a column header
 *       and a piece of data: only the index into the array can be used. So the return type isn't great.
 *   (3) It assumes the input is in string form, which is very "eager": a large file would need to be
 *       fully loaded even if we only wanted to get the first row, and an infinite stream of datapoints
 *       couldn't be used at all. We'd like something we can get row-by-row from, on demand.
 *   (4) It is all-or-nothing: I can't just ask for a single datapoint at a time, but instead have to
 *       wait for them all to be extracted and converted. This is related to (3) above, but different.
 *   (5) It has no real error handling: an input with rows containing different numbers of columns would
 *       just produce an array where some of the elements are of different length than others.
 *
 * Note that when we did this in Java, we used the strategy pattern to add a converter function. However,
 * if we aren't shy about using "map", we will assume our caller won't be either.
 *
 * @param input The CSV-formatted data to parse
 * @returns an array of datapoints, each of which is represented as an array of strings (1 for each column)
 */
function parseCSV_basic(input: string): string[][] {
  const lines = input.split(EOL);
  return lines.map((line: string) => {
    return line.split(",");
  });
}

/*
 * Let's try to resolve some of these issues. First, we'll:
 *   (A) make the parser produce a _generator function_ that the caller can invoke to get a new row each time;
 *   (B) improve the type used for datapoints to make it easier to handle headers; and
 *   (C) let the caller say whether or not a header row is present, and if it is present, keep that information.
 *
 *   We will _not_ attempt to solve the other problems yet. In particular, we'll still use splitting by commas.
 *   We'll also accept strings, rather than using a stream or reader or something more abstract.
 *
 *   The code below introduces another problem: what if a column header is a numeric value? Because TypeScript
 *   object keys are always strings (or internally converted to strings), the index 5 and the column header '5'
 *   will be the same key... To disambiguate, we check each column name and re-write it with a prefix if it
 *   is purely numeric. (Maybe this can be improved on.)
 */

/** This is an "index signature":
 *  {[index: number|string]: string | null}
 *    we don't know what the keys will be called, but their corresponding value must be either a
 *    string or null. We'll use this to map to cell values from either indexes or column names (if present).
 *
 *  Note: don't be tempted to only include the { [index: number|string]: string | null }, which
 *   would allow writing both point['headername'] and point[3]. That seems convenient, but then
 *   how would you easily get meta-data about the datapoint? You could add a field named 'length'
 *   but what if there's a column named that? What next? '_length'? That way lies madness. Avoid it!
 *   (And point.data[3] isn't bad at all.)
 *
 *  We export this so that the caller can use it more easily.
 */
export interface Datapoint {
  length: number;
  data: { [index: string]: string | null };
}

/** A generator function (defined via `function*`) can either _return_ or _yield_.
 *  If it _yields_, its progress is frozen until it is called again, when it will
 *  continue running from where it left off. If it _returns_, it will stop.
 *
 *  The generic type says: this yields Datapoints, but returns null. Sometimes TypeScript
 *  can infer these, but sometimes it can't; I like to be explicit and declare the types anyway.
 * 
 * What it handles well
    Headers
    Quoted fields
    Commas inside quoted fields
    Escaped quotes
   What to watch for
    Assumes the first row is a header.
    Assumes UTF-8 encoding.
    Does not handle malformed CSVs or all edge cases (but covers most practical cases).
 */
async function* parseCSV_better(input: File): AsyncGenerator<Datapoint, null> {
  // Input is a file

  // We'll use a buffered reader to read the file line by line.
  // Since File is a browser API, we need to use FileReader and async iteration.
  // We'll define a helper to read lines from the File as an async generator.

  // Helper: async generator to yield lines from a File
  async function* readLines(file: File): AsyncGenerator<string> {
    const decoder = new TextDecoder();
    const reader = file.stream().getReader();
    let { value: chunk, done } = await reader.read();
    let buffer = "";
    while (!done) {
      buffer += decoder.decode(chunk, { stream: true });
      let lines = buffer.split(EOL);
      buffer = lines.pop() ?? "";
      for (const line of lines) {
        yield line;
      }
      ({ value: chunk, done } = await reader.read());
    }
    buffer += decoder.decode(); // flush
    if (buffer) yield buffer;
  }

  // We'll collect lines into an array for compatibility with the rest of the function.
  // In a real streaming scenario, you could refactor the rest of the function to be async generator.
  let lines: string[] = [];
  let headers: string[] = [];
  let header = true; // You may want to pass this as a parameter

  // Read all lines from the file
  for await (const line of readLines(input)) {
    lines.push(line);
  }

  // Handle a header if one is present. Note that lines.length > 0 *won't work*; we need
  // to be more explicit so TypeScript will narrow the type of lines[0].
  if (header && lines[0]) {
    const firstLine = lines[0];
    lines = lines.slice(1); // slice(1) will remove the first element of the array
    headers = firstLine.split(",").map((s) => {
      const trimmed = s.trim(); // remove blank space around the column name
      return trimmed; // there's still some risk here (no restrictions on valid header names...)
    });
  }

  // TODO 1: Select the regex that will work for the special cases from the bottom of the file
  const regex = /,(?=(?:[^"]*"[^"]*")*[^"]*$)/;

  for (const line of lines) {
    // TODO 1: Modify to handle special cases that are tested in parser.test.ts
    const cells = line.split(regex);
    // reduce starts from a given value and keeps calling the helper function, updating that value
    yield cells.reduce(
      (prev: Datapoint, curr: string, idx: number) => {
        prev.length = idx + 1;
        // TODO 1: After splitting on the regex, see if you can figure out how to replace the escaped quotes and commas
        // Hint: You can use the replace function on the string twice to replace the escaped quotes and commas
        prev.data[idx] = curr.replace(/^"(.*)"$/, "$1").replace(/""/g, '"');
        // This is challenging to write! Do you use
        //   - "if(header && headers[idx])"
        //   - "if(header && headers.length >= idx)"
        //   - "if(header && typeof headers[idx] === 'string')"
        // None of these work. For low-level details, see: https://github.com/microsoft/TypeScript/pull/39560
        // Short version: *Dynamic* indexes will not be used for narrowing. We could solve this by
        //   (1) "zipping" the two lists together and walking over them in lockstep, without indexing
        //   (2) type gymnastics (what I do here): we need a _constant value_
        const headerValue = headers[idx];
        if (header && headerValue !== undefined) {
          prev.data[headerValue] = curr;
        }
        return prev;
      },
      { length: 0, data: {} },
    ); // start with an empty datapoint
    // Note: if we accidentally put data:[] here, we get an unhelpful type error. :-(
  }

  // We're done, no more data available. (Note: in TypeScript, the convention is
  // that `null` intentionally communicates the absence of data. This is
  // different from `undefined`, which is more incedental: something requested
  // hasn't been defined.
  return null;
}

/*
  The 'cell with comma' test showcases that splitting on commas isn't nuanced enough:
  we need to be able to treat the cell value "Hello, world" as a single cell, not as two cells. 
  Moreover, we should be removing un-escaped quotes that wrap these values (i.e., the quotes should 
  not be part of the value we return). 
  
  Further tests represent the other special cases:
  escaping quotes and values with multiple lines in them. 

  To deal with this, we'll only change our parser in two places: 
  the ones where we call `split(',')`. But what should we put there instead? 

  A regular expression is appealing. CSV lines seem regular, so perhaps CSV can 
  be expressed in a regex. However, it turns out to be tough to get it right. 
  And it might be slower than other methods, because of the subtleties caused 
  by escaping quotes, etc.

  Between these three regexes, pick the one that you believe will work for the 
  cases above:
  
    - /(?:[^",]|"[^"]*")+/
    - /,(?=(?:[^"]*"[^"]*")*[^"]*$)/
    - /(?:[^,"]+|"(?:[^"]|"")*")/g
*/

// Export only the latest of our works in progress to other modules.
export { parseCSV_better as parse };
