"use client";

import React, { useState, useEffect, useRef } from "react";
import EncounterGridClient from "./GridUI";

import { messages } from "../../data/dashboard-data";
import type { Encounter } from "@prisma/client";
import { trpc } from "trpc/client";
import { useUser } from "@clerk/nextjs";
import ChatBot from "../ui/chat-bot";
import { FaceSheetMassUploader } from "./FaceSheetUploader";

interface DashboardContentClientProps {
  patientEvents: Encounter[];
}

const DashboardContentClient = (props: DashboardContentClientProps) => {
  const [filterName, setFilterName] = useState("");
  const [filterInsurer, setFilterInsurer] = useState("");
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [chatbotOpen, setChatbotOpen] = useState(false);

  // Inside your component, before the return statement
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const { user } = useUser();

  const { data: patients = [], refetch: refetchPatients } =
    trpc.getPatientsByBillerId.useQuery(
      { userId: user?.id ?? "" },
      { enabled: !!user },
    );

  const { data: encounters = [], refetch } = trpc.getAllEncountersByBillerId.useQuery(
    { userId: user?.id ?? "" },
    { enabled: !!user },
  );

  // 2. addPatients just triggers the file input
  const addPatients = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // allow re-uploading the same file
      fileInputRef.current.click();
    }
  };

  if (!user) {
    return (
      <div className="p-4" data-oid="vv8ci5e">
        Loading...
      </div>
    );

    // or a loading spinner
  }

  return (
    <>
      <div className="flex h-screen bg-gray-100" data-oid=":svb6ck">
        {/* Floating Kyron AI Button */}
        <button
          className="fixed bottom-8 right-8 z-50 w-16 rounded-full bg-blue-600 p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setChatbotOpen(true)}
          aria-label="Open Kyron AI Assistant"
          data-oid="9:0r4w:"
        >
          <span className="text-2xl font-bold text-white" data-oid="x87tkh3">
            ?
          </span>
        </button>

        {/* Kyron AI Assistant Modal */}
        {chatbotOpen && (
          <ChatBot
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
            chatInput={chatInput}
            setChatInput={setChatInput}
            chatbotOpen={chatbotOpen}
            setChatbotOpen={setChatbotOpen}
            data-oid="28oxo1l"
          />
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-8" data-oid="_:t8hy6">
          <h2 className="mb-6 text-3xl font-bold" data-oid="p8rbx3j">
            {messages[currentMessageIndex]}
          </h2>

          <div className="mb-6 flex space-x-8" data-oid=".j0vafe">
            <div
              className="w-64 rounded-lg bg-white p-6 shadow"
              data-oid="znc59ld"
            >
              {/* Place this input somewhere in your JSX, e.g. at the top-level of your return */}
              <div
                className="flex flex-row items-center justify-between"
                data-oid="nwybgaf"
              >
                <h3 className="mb-2 text-sm text-gray-500" data-oid="cckkhz8">
                  Total Patients
                </h3>
                {/* <div className="flex items-center space-x-2">
                             <input
                               ref={fileInputRef}
                               type="file"
                               accept=".csv"
                               className="hidden"
                               onChange={handleFileChange}
                             />
                               <button
                               onClick={addPatients}
                               className="rounded bg-blue-600 px-2 py-1 text-xs text-white"
                             >
                               +
                             </button>
                            </div> */}
                <FaceSheetMassUploader
                  refetchPatientsAction={refetch}
                  data-oid="7t1uvx1"
                />
              </div>
              <p className="text-3xl font-bold" data-oid="g37f-ac">
                {patients.length}
              </p>
            </div>
          </div>

          <EncounterGridClient
            encounters={encounters}
            refetchPatientsAction={refetch}
            data-oid="i-r4zgq"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardContentClient;
