"use client";

import React, { useState, useEffect, useRef } from "react";
import PatientGridClient from "./GridUI";

import { messages } from "../../data/dashboard-data";
import type { PatientEvent } from "@prisma/client";
import { trpc } from "trpc/client";
import { useUser } from "@clerk/nextjs";
import ChatBot from "../ui/chat-bot";
import { FaceSheetMassUploader } from "./FaceSheetUploader";

interface DashboardContentClientProps {
  patientEvents: PatientEvent[];
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

  const { data: patients = [], refetch } = trpc.getPatientsByBillerId.useQuery(
    { userId: user?.id ?? "" },
    { enabled: !!user },
  );

  const totalCollected = patients.reduce((sum, p) => sum + p.moneyCollected, 0);

  const formattedTotalCollected = totalCollected.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  // 2. addPatients just triggers the file input
  const addPatients = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // allow re-uploading the same file
      fileInputRef.current.click();
    }
  };

  if (!user) {
    return (
      <div className="p-4" data-oid="v48faz9">
        Loading...
      </div>
    );

    // or a loading spinner
  }

  return (
    <>
      <div className="flex h-screen bg-gray-100" data-oid="bmgm9dw">
        {/* Floating Kyron AI Button */}
        <button
          className="fixed bottom-8 right-8 z-50 w-16 rounded-full bg-blue-600 p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setChatbotOpen(true)}
          aria-label="Open Kyron AI Assistant"
          data-oid="q5bf.nc"
        >
          <span className="text-2xl font-bold text-white" data-oid="isaxrus">
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
            data-oid="r:zgdos"
          />
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-8" data-oid="ulsav84">
          <h2 className="mb-6 text-3xl font-bold" data-oid=":20ddpz">
            {messages[currentMessageIndex]}
          </h2>

          <div className="mb-6 flex space-x-8" data-oid=":llkzh7">
            <div
              className="w-64 rounded-lg bg-white p-6 shadow"
              data-oid="red5o3u"
            >
              {/* Place this input somewhere in your JSX, e.g. at the top-level of your return */}
              <div
                className="flex flex-row items-center justify-between"
                data-oid="qf_wpu9"
              >
                <h3 className="mb-2 text-sm text-gray-500" data-oid=":urvfg3">
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
                  data-oid="zbl:udm"
                />
              </div>
              <p className="text-3xl font-bold" data-oid="9r53:qe">
                {patients.length}
              </p>
            </div>
            <div
              className="w-64 rounded-lg bg-white p-6 shadow"
              data-oid="8099ebc"
            >
              <h3 className="mb-2 text-sm text-gray-500" data-oid="he115xo">
                Total Collected
              </h3>
              <p className="text-3xl font-bold" data-oid="71qeru6">
                {formattedTotalCollected}
              </p>
            </div>
          </div>

          <div className="mb-4 flex space-x-4" data-oid="0cj05s2">
            <input
              type="text"
              placeholder="Filter by name..."
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
              className="w-64 rounded border px-3 py-2"
              data-oid="7vbz3zd"
            />

            <input
              type="text"
              placeholder="Filter by insurer..."
              value={filterInsurer}
              onChange={(e) => setFilterInsurer(e.target.value)}
              className="w-64 rounded border px-3 py-2"
              data-oid="wa_lsoa"
            />
          </div>

          <PatientGridClient
            patients={patients.map((p) => ({
              ...p,
              groupNumber: p.groupNumber ?? "",
            }))}
            filterName={filterName}
            filterInsurer={filterInsurer}
            refetchPatientsAction={refetch}
            data-oid="-5r2-e1"
          />
        </div>
      </div>
    </>
  );
};

export default DashboardContentClient;
