import { NextRequest, NextResponse } from "next/server";
import { ChatOllama } from "@langchain/community/chat_models/ollama";
import { writeFile, readFile } from "fs/promises";
import path from "path";
import os from "os";

const llm = new ChatOllama({
  baseUrl: "http://localhost:11434",
  model: "llama2",
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

  const response = await llm.invoke(prompt);

  if (typeof response === "string") {
    return response;
  } else if (typeof response.content === "string") {
    return response.content;
  } else {
    return JSON.stringify(response);
  }
}

export async function POST(request: NextRequest) {
  console.log("Received request to /api/generate-appeal");
  try {
    const formData = await request.formData();
    console.log("Received form data:", Object.fromEntries(formData));

    const denialFile = formData.get("denial") as File | null;
    const patientNotesFile = formData.get("patientNotes") as File | null;

    if (!denialFile || !patientNotesFile) {
      console.error("Missing required files:", {
        denial: !!denialFile,
        patientNotes: !!patientNotesFile,
      });
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
  } catch (error) {
    console.error("Error in generate-appeal:", error);
    return NextResponse.json(
      { error: "Failed to generate appeal", details: error.message },
      { status: 500 },
    );
  }
}
