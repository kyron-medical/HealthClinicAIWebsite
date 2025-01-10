import { NextRequest, NextResponse } from "next/server";
import { ChatOllama } from "@langchain/ollama";
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
) {
  const prompt = `
    The following is a health insurance claim denial and corresponding patient visit notes. Please generate a formal letter from the perspective of the provider appealing the claim denial using the visit notes, including patient information and medical history.

    --- Health Insurance Claim Denial ---
    ${denialContent}

    --- Patient Visit Notes ---
    ${patientNotesContent}

    Write a brief professional letter appealing the denial:
  `;

  const response = await llm.invoke(prompt);
  // Ensure we're returning a string
  if (typeof response === "string") {
    return response;
  } else if (typeof response.content === "string") {
    return response.content;
  } else {
    // If the response is neither a string nor has a content property that's a string,
    // we'll stringify the entire response object
    return JSON.stringify(response);
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const denialFile = formData.get("denial") as File;
    const patientNotesFile = formData.get("patientNotes") as File;

    if (!denialFile || !patientNotesFile) {
      return NextResponse.json(
        { error: "Missing required files" },
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

    const appealLetter = await generateAppeal(
      denialContent,
      patientNotesContent,
    );

    const appealPath = path.join(tempDir, "appeal_letter.txt");
    await writeFile(appealPath, appealLetter);

    return NextResponse.json({ appeal_letter: appealLetter }, { status: 200 });
  } catch (error) {
    console.error("Error generating appeal:", error);
    return NextResponse.json(
      { error: "Failed to generate appeal" },
      { status: 500 },
    );
  }
}
