"use client";

import React, { useState, useEffect, useRef } from "react";
import EncounterGridClient from "./GridUI";

import { messages } from "../../data/dashboard-data";
import type { billerAction, Encounter, Insurance, Patient, Physician } from "@prisma/client";
import { trpc } from "trpc/client";
import { useUser } from "@clerk/nextjs";
import ChatBot from "../ui/chat-bot";


interface DashboardContentClientProps {
  encounters: (Encounter & {
      patient: Patient & { insurances: Insurance[] };
      physician: Physician; // or the actual Physician type if you have it imported
      actions: billerAction[];
    })[];
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

  const { data: encounters = [], refetch } =
    trpc.getAllEncountersByBillerId.useQuery(
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
    return <div className="p-4">Loading...</div>;

    // or a loading spinner
  }

  return (
    <>
      <div className="flex h-screen bg-white">
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

          <div className="mb-6 flex space-x-8"></div>

          <EncounterGridClient
            encounters={encounters}
            refetchEncountersAction={refetch}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardContentClient;
