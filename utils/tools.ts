export const parseDate = (dateString: string): Date => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${dateString}`);
  }
  return date;
};

export const normalize = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "") // Remove special characters
    .replace(/\s+/g, " ") // Replace multiple spaces with a single space
    .trim(); // Trim leading/trailing spaces
};

/**
 * Levenshtein distance algorithm using two matrix rows.
 * @param input
 * @param target
 * @returns
 */
export const levenshteinTwoMatrixRows = (input: string, target: string) => {
  // Function to calculate Levenshtein distance using two matrix rows
  const m = input.length;
  const n = target.length;

  // Initialize two arrays to represent the matrix rows
  let prevRow = new Array(n + 1).fill(0);
  let currRow = new Array(n + 1).fill(0);

  // Initialize the first row with consecutive numbers
  for (let j = 0; j <= n; j++) {
    prevRow[j] = j;
  }

  // Dynamic programming to fill the matrix
  for (let i = 1; i <= m; i++) {
    currRow[0] = i;

    for (let j = 1; j <= n; j++) {
      // Check if characters at the current positions are equal
      if (input[i - 1] === target[j - 1]) {
        currRow[j] = prevRow[j - 1]; // No operation required
      } else {
        // Choose the minimum of three possible operations (insert, remove, replace)
        currRow[j] =
          1 +
          Math.min(
            currRow[j - 1], // Insert
            prevRow[j], // Remove
            prevRow[j - 1], // Replace
          );
      }
    }

    // Update the previous row with the current row for the next iteration
    prevRow = [...currRow];
  }

  // The result is the value at the bottom-right corner of the matrix
  return currRow[n];
};

export const toValidDateOrNull = (value: string | object | null | undefined) => {
  if (!value) return null;
  // If already a Date object, return as is
  if (value instanceof Date) return value;

  if (typeof value === "string" && value.trim() === "") return null;
  // If value is a string, try to parse as ISO
  if (typeof value === "string") {
    const date = new Date(value);
    return isNaN(date.getTime()) ? null : date;
  }
  return null;
};