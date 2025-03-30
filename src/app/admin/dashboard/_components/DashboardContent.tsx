"use client";

import { useState } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { StatCard } from "./StatCard";

export const DashboardContent = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div
      className="min-h-screen bg-gray-50 px-4 py-8 dark:bg-gray-900 md:px-8"
      data-oid="x29s2m7"
    >
      <DashboardHeader userName="Dr. Smith" data-oid="e294yst" />

      {/* Tab Navigation */}
      <div className="mb-8" data-oid="g3qstk9">
        {/* Add your tab navigation here */}
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <>
          {/* Stats Section */}
          <div
            className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            data-oid="swbvji6"
          >
            <StatCard
              title="Total Patients"
              value="1,248"
              change={12.5}
              icon={/* Your SVG icon */ ""}
              color="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
              data-oid=".9v0-1."
            />

            {/* Add other stat cards */}
          </div>

          {/* Quick Actions & Recent Activity */}
          <div
            className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3"
            data-oid="pd3ufe7"
          >
            {/* Add Quick Actions and Recent Activity sections */}
          </div>
        </>
      )}

      {activeTab === "analytics" && (
        <div
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
          data-oid=".azdz34"
        >
          {/* Add analytics content */}
        </div>
      )}

      {activeTab === "admin" && (
        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          data-oid="zey_5eg"
        >
          {/* Add admin content */}
        </div>
      )}
    </div>
  );
};
