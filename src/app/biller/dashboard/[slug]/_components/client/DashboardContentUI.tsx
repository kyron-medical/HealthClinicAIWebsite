"use client";

import React, { useState, useEffect, useRef } from "react";
import PatientGridClient from "./GridUI";

import { patients, patientEvents, messages } from "../../data/dashboard-data";
import { Patient, PatientEvent } from "@prisma/client";
import { trpc } from "trpc/client";
import toast from "react-hot-toast";
import { parse } from "@/../utils/parser";
import middleware from "@/middleware";

interface DashboardContentClientProps {
  patients: Patient[];
  patientEvents: PatientEvent[];
}

const DashboardContentClient = ({
  patients,
  patientEvents,
}: DashboardContentClientProps) => {
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

  const totalCollected = patients.reduce((sum, p) => sum + p.moneyCollected, 0);

  const formattedTotalCollected = totalCollected.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const createPatientsBulk = trpc.createPatientsBulk.useMutation();

  // This function should be called when a file is selected
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const patients: {
        name: string;
        insurer: string;
        moneyCollected: number;
      }[] = [];
      for await (const row of parse(file)) {
        const name = row.data.name;
        const insurer = row.data.insurer;
        const moneyCollected = row.data.moneyCollected;
        if (!name || !insurer || !moneyCollected) {
          toast.error("Invalid data in CSV file");
          return;
        }
        patients.push({
          name,
          insurer,
          moneyCollected: Number(moneyCollected),
        });
      }

      await createPatientsBulk.mutateAsync(patients);
      toast.success("Patients added successfully!");
    } catch (err) {
      toast.dismiss();
      toast.error("Error adding patients");
      console.error("Error adding patients:", err);
    }
  };

  // 2. addPatients just triggers the file input
  const addPatients = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // allow re-uploading the same file
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100">
       
        {/* Floating Kyron AI Button */}
        <button
          className="fixed bottom-8 right-8 z-50 w-16 rounded-full bg-blue-600 p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setChatbotOpen(true)}
          aria-label="Open Kyron AI Assistant"
        >
          <span className="text-2xl font-bold text-white">?</span>
        </button>

        {/* Kyron AI Assistant Modal */}
        {chatbotOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/30">
            <div
              className="fixed inset-0"
              onClick={() => setChatbotOpen(false)}
              style={{ zIndex: 1 }}
            />
            <div
              className="relative m-8 mb-32 w-full max-w-md rounded-lg bg-white p-4 shadow-lg"
              onClick={(e) => e.stopPropagation()}
              style={{ zIndex: 2 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Kyron AI Assistant</h3>
                <button
                  onClick={() => setChatbotOpen(false)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
              <div className="mb-2 max-h-60 flex-1 overflow-y-auto rounded pb-2 text-sm">
                {chatMessages.length === 0 && (
                  <p className="text-xs text-gray-400">Ask me anything...</p>
                )}
                {chatMessages.map((msg, index) => (
                  <div key={index} className="mb-1">
                    {msg}
                  </div>
                ))}
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Ask Kyron..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="w-full rounded border px-2 py-1 text-sm"
                />
                <button
                  onClick={() => {
                    if (chatInput.trim() !== "") {
                      setChatMessages([...chatMessages, chatInput]);
                      setChatInput("");
                    }
                  }}
                  className="rounded bg-blue-600 px-2 py-1 text-sm text-white"
                >
                  Send
                </button>
              </div>
            </div>
            {/* Click outside to close */}
            <div
              className="fixed inset-0"
              onClick={() => setChatbotOpen(false)}
            />
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-8">
          <h2 className="mb-6 text-3xl font-bold">
            {messages[currentMessageIndex]}
          </h2>

          <div className="mb-6 flex space-x-8">
            <div className="w-64 rounded-lg bg-white p-6 shadow">
              {/* Place this input somewhere in your JSX, e.g. at the top-level of your return */}
              <div className="flex flex-row items-center justify-between">
                <h3 className="mb-2 text-sm text-gray-500">Total Patients</h3>

                <div className="flex items-center space-x-2">
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
                </div>
              </div>
              <p className="text-3xl font-bold">{patients.length}</p>
            </div>
            <div className="w-64 rounded-lg bg-white p-6 shadow">
              <h3 className="mb-2 text-sm text-gray-500">Total Collected</h3>
              <p className="text-3xl font-bold">{formattedTotalCollected}</p>
            </div>
          </div>

          <div className="mb-4 flex space-x-4">
            <input
              type="text"
              placeholder="Filter by name..."
              value={filterName}
              onChange={(e) => setFilterName(e.target.value)}
              className="w-64 rounded border px-3 py-2"
            />
            <input
              type="text"
              placeholder="Filter by insurer..."
              value={filterInsurer}
              onChange={(e) => setFilterInsurer(e.target.value)}
              className="w-64 rounded border px-3 py-2"
            />
          </div>

          <PatientGridClient
            patients={patients}
            filterName={filterName}
            filterInsurer={filterInsurer}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardContentClient;
