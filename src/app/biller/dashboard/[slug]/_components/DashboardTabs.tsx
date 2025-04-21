"use client";

import { useState } from "react";
import DemoForm from "@/app/demo/_components/DemoForm";
import GridExample from "./server/Grid";

const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState("patients");

  const tabs = [
    { id: "patients", label: "Patients" },
    { id: "dashboard", label: "Dashboard" },
    { id: "demo", label: "Appeals" },
    { id: "settings", label: "Settings" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "patients":
        return (
          <div className="p-4" data-oid="2vr:wv.">
            <h2 className="mb-4 text-xl font-semibold" data-oid="2-jy:qw">
              Patient List
            </h2>
            <p data-oid="50wv09v">
              Patient management functionality will appear here.
            </p>
          </div>
        );

      case "dashboard":
        return (
          <div className="p-4" data-oid="mbevxgk">
            <h2 className="mb-4 text-xl font-semibold" data-oid="5a9rjke">
              Dashboard
            </h2>
            <p data-oid="up6n6eg">
              Appointment calendar and scheduling tools will appear here.
            </p>
            <GridExample data-oid="2hsp2pz" />
          </div>
        );

      case "demo":
        return (
          <div className="p-4" data-oid="-z2v9dy">
            <h2 className="mb-4 text-xl font-semibold" data-oid="5k8s1z0">
              Appeals
            </h2>
            <DemoForm data-oid="rlb6vj4" />
          </div>
        );

      case "settings":
        return (
          <div className="p-4" data-oid="n39g72.">
            <h2 className="mb-4 text-xl font-semibold" data-oid="n2me87o">
              Settings
            </h2>
            <p data-oid=".xqis4j">
              Account and application settings will appear here.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="rounded-lg border bg-white shadow-sm" data-oid="vlp4pe7">
      <div className="flex border-b" data-oid="9db7uf1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
            data-oid="ilibhqu"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="min-h-[500px]" data-oid="lylpxrg">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default DashboardTabs;
