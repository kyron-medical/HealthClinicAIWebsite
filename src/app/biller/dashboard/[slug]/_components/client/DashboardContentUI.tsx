"use client";

import React, { useState, useEffect, useRef } from "react";
import PatientGridClient from "./GridUI";

import { patients, patientEvents, messages } from "../../data/dashboard-data";
import { Patient, PatientEvent } from "@prisma/client";
import { trpc } from "trpc/client";
import toast from "react-hot-toast";
import { parse } from "@/../utils/parser";
import middleware from "@/middleware";
import { useUser } from "@clerk/nextjs";
import ChatBot from "../ui/chat-bot";

interface DashboardContentClientProps {
  patients: {
    id: string;
    name: string;
    insurer: string;
    moneyCollected: number;
    createdAt: Date;
    updatedAt: Date;
    billerId: string;
  }[];
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
  const utils = trpc.useUtils(); // or useQueryClient() for React Query

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

  const { user } = useUser(); // Assuming you have a way to get the current user

  if (!user) {
    return;
  }

  // This function should be called when a file is selected
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const patients: {
        name: string;
        insurer: string;
        moneyCollected: number;
        createdAt: Date;
        updatedAt: Date;
        billerId: string;
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
          createdAt: new Date(),
          updatedAt: new Date(),
          billerId: user.id,
        });
      }

      await createPatientsBulk.mutateAsync(patients);
      await utils.getPatientsByBillerId.invalidate(); // Invalidate/refetch the patients query
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
          <ChatBot
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
            chatInput={chatInput}
            setChatInput={setChatInput}
            chatbotOpen={chatbotOpen}
            setChatbotOpen={setChatbotOpen}
          />
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
