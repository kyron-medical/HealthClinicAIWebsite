import { NextRequest, NextResponse } from "next/server";
import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { writeFile, readFile } from "fs/promises";
import path from "path";
import os from "os";

const llm = new ChatOllama({
  baseUrl: "http://localhost:11434",
  model: "llama3.2:1b",
  temperature: 0.7,
});

async function generateAppeal(
  denialContent: string,
  patientNotesContent: string,
): Promise<string> {
  const prompt = `
    The following is a health insurance claim denial and corresponding patient visit notes. Please generate a formal letter from the perspective of the provider appealing the claim denial using the visit notes, including patient information and medical history.

    --- Health Insurance Claim Denial ---
    ${denialContent}

    --- Patient Visit Notes ---
    ${patientNotesContent}

    Write a brief professional letter appealing the denial:
  `;

  try {
    const response = await llm.invoke(prompt);
    if (typeof response === "string") {
      return response;
    } else if (typeof response.content === "string") {
      return response.content;
    } else {
      return JSON.stringify(response);
    }
  } catch (error) {
    console.error("Error generating appeal with LLM:", error);
    throw new Error("LLM failed to generate appeal.");
  }
}

export async function POST(request: NextRequest) {
  console.log("Received request to /api/generate-appeal");
  try {
    const formData = await request.formData();
    console.log("Received form data:", {
      // Using entries to log field names and file names
      ...Object.fromEntries(
        Array.from(formData.entries()).map(([key, value]) => [
          key,
          value instanceof File ? value.name : value,
        ]),
      ),
    });

    const files = formData.getAll("files") as File[];

    if (!files || files.length !== 2) {
      console.error("Invalid number of files received:", files.length);
      return NextResponse.json(
        {
          error:
            "Please upload exactly two files: one for denial and one for patient notes.",
        },
        { status: 400 },
      );
    }

    // Identify files based on their names or other attributes
    let denialFile: File | undefined;
    let patientNotesFile: File | undefined;

    files.forEach((file) => {
      const lowerName = file.name.toLowerCase();
      if (lowerName.includes("denial")) {
        denialFile = file;
      } else if (lowerName.includes("patientnote")) {
        patientNotesFile = file;
      }
    });

    // Fallback in case filenames do not include specific keywords
    if (!denialFile || !patientNotesFile) {
      // Assign the first file to denial and the second to patientNotes by default
      denialFile = files[0];
      patientNotesFile = files[1];
    }

    if (!denialFile || !patientNotesFile) {
      console.error("Missing required files after processing:", {
        denial: !!denialFile,
        patientNotes: !!patientNotesFile,
      });
      return NextResponse.json(
        { error: "Missing required files: denial and patient notes." },
        { status: 400 },
      );
    }

    const tempDir = os.tmpdir();
    const denialPath = path.join(tempDir, "denial.txt");
    const patientNotesPath = path.join(tempDir, "patientNotes.txt");

    await writeFile(denialPath, Buffer.from(await denialFile.arrayBuffer()));
    await writeFile(
      patientNotesPath,
      Buffer.from(await patientNotesFile.arrayBuffer()),
    );

    const denialContent = await readFile(denialPath, "utf-8");
    const patientNotesContent = await readFile(patientNotesPath, "utf-8");

    console.log("File contents:", {
      denialContent: denialContent.substring(0, 100) + "...",
      patientNotesContent: patientNotesContent.substring(0, 100) + "...",
    });

    const appealLetter = await generateAppeal(
      denialContent,
      patientNotesContent,
    );

    const appealPath = path.join(tempDir, "appeal_letter.txt");
    await writeFile(appealPath, appealLetter);

    console.log("Appeal letter generated successfully");
    return NextResponse.json({ appeal_letter: appealLetter }, { status: 200 });
  } catch (error: any) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "Failed to generate appeal", details: error.message },
      { status: 500 },
    );
  }
}
