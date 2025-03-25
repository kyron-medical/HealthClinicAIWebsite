import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Kyron",
  description: "Dashboard Page for Kyron",
  // other metadata
};

("use client");

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Dashboard components
const DashboardHeader = ({ userName = "Admin User" }) => {
  return (
    <div
      className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center"
      data-oid="rcfzuy-"
    >
      <div data-oid="45r2xkh">
        <h1
          className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl"
          data-oid="spiy3th"
        >
          Welcome back, {userName}
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-300" data-oid="r48l3du">
          Here's what's happening with your practice today.
        </p>
      </div>
      <div className="flex items-center gap-3" data-oid="pgqp6kn">
        <button
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          data-oid=".2nibw4"
        >
          <span className="flex items-center gap-2" data-oid="ofb8rq5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              data-oid="98sfa5n"
            >
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                data-oid="0wq.g:z"
              />
            </svg>
            Generate Report
          </span>
        </button>
        <button
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          data-oid="6uw5dfe"
        >
          <span className="flex items-center gap-2" data-oid="8_n2t8b">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              data-oid="woqb266"
            >
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                data-oid="omz4xeb"
              />
            </svg>
            Actions
          </span>
        </button>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, icon, color }) => {
  const isPositive = change >= 0;

  return (
    <div
      className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800"
      data-oid="y.pc1z6"
    >
      <div className="flex items-center justify-between" data-oid="jw6zwy8">
        <div data-oid="c6i175c">
          <p
            className="text-sm font-medium text-gray-500 dark:text-gray-400"
            data-oid="hl8z8op"
          >
            {title}
          </p>
          <h3
            className="mt-1 text-2xl font-bold text-gray-900 dark:text-white"
            data-oid="m9bvk6i"
          >
            {value}
          </h3>
        </div>
        <div className={`rounded-full p-3 ${color}`} data-oid="ljh87gj">
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-center" data-oid=":qcpu2:">
        <span
          className={`flex items-center text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}
          data-oid="r_kw.-v"
        >
          {isPositive ? (
            <svg
              className="mr-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-oid="eaq7dkj"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
                data-oid="9_fj7oi"
              ></path>
            </svg>
          ) : (
            <svg
              className="mr-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-oid="igd_-tv"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                data-oid="bvu-_id"
              ></path>
            </svg>
          )}
          {Math.abs(change)}%
        </span>
        <span
          className="ml-2 text-sm text-gray-500 dark:text-gray-400"
          data-oid="5-xrk8."
        >
          from last month
        </span>
      </div>
    </div>
  );
};

const QuickActionCard = ({ title, description, icon, link }) => {
  return (
    <Link
      href={link}
      className="block rounded-xl bg-white p-6 shadow-md transition-transform hover:-translate-y-1 dark:bg-gray-800"
      data-oid="4w57:gd"
    >
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
        data-oid="7h1:1su"
      >
        {icon}
      </div>
      <h3
        className="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
        data-oid="hzddyjf"
      >
        {title}
      </h3>
      <p
        className="text-sm text-gray-600 dark:text-gray-300"
        data-oid="korks0i"
      >
        {description}
      </p>
    </Link>
  );
};

const RecentActivityItem = ({ title, time, status, icon }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "failed":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  return (
    <div
      className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
      data-oid="v9:-dij"
    >
      <div
        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
        data-oid="tsdztp4"
      >
        {icon}
      </div>
      <div className="flex-grow" data-oid="0.zkk1e">
        <h4
          className="text-sm font-medium text-gray-900 dark:text-white"
          data-oid="b1f:8f5"
        >
          {title}
        </h4>
        <p
          className="text-xs text-gray-500 dark:text-gray-400"
          data-oid="yjsq3kj"
        >
          {time}
        </p>
      </div>
      <span
        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(status)}`}
        data-oid="t9_bpst"
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    </div>
  );
};

const AdminNavCard = ({ title, description, icon, link }) => {
  return (
    <Link
      href={link}
      className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-blue-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-900"
      data-oid="-phgeky"
    >
      <div
        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30 dark:text-blue-400 dark:group-hover:bg-blue-700"
        data-oid="f0e0zs5"
      >
        {icon}
      </div>
      <div data-oid="8t6j.p2">
        <h3
          className="text-lg font-medium text-gray-900 dark:text-white"
          data-oid=":jjeld-"
        >
          {title}
        </h3>
        <p
          className="text-sm text-gray-600 dark:text-gray-300"
          data-oid="rb.ofgf"
        >
          {description}
        </p>
      </div>
    </Link>
  );
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div
      className="min-h-screen bg-gray-50 px-4 py-8 dark:bg-gray-900 md:px-8"
      data-oid="96cn7vv"
    >
      <DashboardHeader userName="Dr. Smith" data-oid=":kjnooh" />

      {/* Tabs */}
      <div
        className="mb-8 border-b border-gray-200 dark:border-gray-700"
        data-oid="76ss7ti"
      >
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          data-oid="y5v_0y9"
        >
          <li className="mr-2" data-oid=".gn36fn">
            <button
              onClick={() => setActiveTab("overview")}
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "overview"
                  ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              data-oid="ti83zbm"
            >
              Overview
            </button>
          </li>
          <li className="mr-2" data-oid="b2evva3">
            <button
              onClick={() => setActiveTab("analytics")}
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "analytics"
                  ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              data-oid="14o:e7_"
            >
              Analytics
            </button>
          </li>
          <li className="mr-2" data-oid="qi11n6d">
            <button
              onClick={() => setActiveTab("admin")}
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                activeTab === "admin"
                  ? "text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              data-oid="vo1475t"
            >
              Admin Tools
            </button>
          </li>
        </ul>
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <>
          {/* Stats Section */}
          <div
            className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
            data-oid="xlbt3pq"
          >
            <StatCard
              title="Total Patients"
              value="1,248"
              change={12.5}
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  data-oid="2:7iky_"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    data-oid=":i6nuoy"
                  ></path>
                </svg>
              }
              color="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
              data-oid="trjykrm"
            />

            <StatCard
              title="Claims Processed"
              value="854"
              change={8.2}
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  data-oid="xutocfu"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    data-oid="ne61l72"
                  ></path>
                </svg>
              }
              color="bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
              data-oid="e0.3gcx"
            />

            <StatCard
              title="Pending Approvals"
              value="42"
              change={-3.8}
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  data-oid="ma_ovr2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    data-oid="ad:g_r3"
                  ></path>
                </svg>
              }
              color="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
              data-oid="f_62elp"
            />

            <StatCard
              title="Revenue"
              value="$24,568"
              change={15.3}
              icon={
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  data-oid="cu08c6g"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    data-oid="2qh2q4k"
                  ></path>
                </svg>
              }
              color="bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
              data-oid="rzc:_rj"
            />
          </div>

          {/* Quick Actions & Recent Activity */}
          <div
            className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-3"
            data-oid="yltvseh"
          >
            <div className="lg:col-span-2" data-oid="zj_f94l">
              <h2
                className="mb-4 text-xl font-bold text-gray-800 dark:text-white"
                data-oid="z_t8i4c"
              >
                Quick Actions
              </h2>
              <div
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
                data-oid=".cl0nom"
              >
                <QuickActionCard
                  title="Process Claims"
                  description="Review and process pending insurance claims"
                  icon={
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      data-oid="mpsb5xk"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        data-oid="u8bq3bw"
                      ></path>
                    </svg>
                  }
                  link="/admin/claims"
                  data-oid="3f-e49x"
                />

                <QuickActionCard
                  title="Patient Records"
                  description="Access and update patient information"
                  icon={
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      data-oid="0hlear_"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        data-oid="-vtnd:q"
                      ></path>
                    </svg>
                  }
                  link="/admin/patients"
                  data-oid="uu:pw1v"
                />

                <QuickActionCard
                  title="Schedule Appointments"
                  description="Manage your calendar and appointments"
                  icon={
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      data-oid="zfkz2m-"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        data-oid="n6m54uy"
                      ></path>
                    </svg>
                  }
                  link="/admin/schedule"
                  data-oid="0eiexpv"
                />
              </div>
            </div>

            <div data-oid="nn97.ej">
              <h2
                className="mb-4 text-xl font-bold text-gray-800 dark:text-white"
                data-oid="632f43h"
              >
                Recent Activity
              </h2>
              <div className="space-y-3" data-oid="t5f88ti">
                <RecentActivityItem
                  title="Claim #12345 processed"
                  time="2 hours ago"
                  status="completed"
                  icon={
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      data-oid="4e77__y"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid="9fl-_:n"
                      ></path>
                    </svg>
                  }
                  data-oid="85vl47j"
                />

                <RecentActivityItem
                  title="Prior authorization request"
                  time="4 hours ago"
                  status="pending"
                  icon={
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      data-oid="_gi6x9-"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid=".avfdjk"
                      ></path>
                    </svg>
                  }
                  data-oid="8c4fjue"
                />

                <RecentActivityItem
                  title="Payment verification failed"
                  time="Yesterday"
                  status="failed"
                  icon={
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      data-oid="su3z58u"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        data-oid="-y72588"
                      ></path>
                    </svg>
                  }
                  data-oid="pfcpm2q"
                />

                <RecentActivityItem
                  title="New patient registered"
                  time="2 days ago"
                  status="completed"
                  icon={
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      data-oid="osd94yr"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        data-oid="xpvxv2_"
                      ></path>
                    </svg>
                  }
                  data-oid="hd5a8y7"
                />
              </div>
            </div>
          </div>
        </>
      )}

      {/* Analytics Tab */}
      {activeTab === "analytics" && (
        <div
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
          data-oid="745a919"
        >
          <div
            className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800"
            data-oid="aa9if06"
          >
            <h2
              className="mb-4 text-xl font-bold text-gray-800 dark:text-white"
              data-oid="cs9ckpn"
            >
              Claims Processing Performance
            </h2>
            <div
              className="h-80 w-full bg-gray-100 dark:bg-gray-700"
              data-oid="1m5._cq"
            >
              {/* Placeholder for chart */}
              <div
                className="flex h-full w-full items-center justify-center"
                data-oid="l4dky:8"
              >
                <p
                  className="text-gray-500 dark:text-gray-400"
                  data-oid="huj3nk8"
                >
                  Claims Processing Chart
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800"
            data-oid="n5vfnec"
          >
            <h2
              className="mb-4 text-xl font-bold text-gray-800 dark:text-white"
              data-oid="fboej81"
            >
              Revenue Trends
            </h2>
            <div
              className="h-80 w-full bg-gray-100 dark:bg-gray-700"
              data-oid="tq2frxz"
            >
              {/* Placeholder for chart */}
              <div
                className="flex h-full w-full items-center justify-center"
                data-oid="su6ef8p"
              >
                <p
                  className="text-gray-500 dark:text-gray-400"
                  data-oid=":qqo.9u"
                >
                  Revenue Chart
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800"
            data-oid="ds-7t6g"
          >
            <h2
              className="mb-4 text-xl font-bold text-gray-800 dark:text-white"
              data-oid="i3loen2"
            >
              Patient Demographics
            </h2>
            <div
              className="h-80 w-full bg-gray-100 dark:bg-gray-700"
              data-oid="sxzquoj"
            >
              {/* Placeholder for chart */}
              <div
                className="flex h-full w-full items-center justify-center"
                data-oid="cst9:bm"
              >
                <p
                  className="text-gray-500 dark:text-gray-400"
                  data-oid="kkp_-w2"
                >
                  Demographics Chart
                </p>
              </div>
            </div>
          </div>

          <div
            className="rounded-xl bg-white p-6 shadow-md dark:bg-gray-800"
            data-oid="v2f:pku"
          >
            <h2
              className="mb-4 text-xl font-bold text-gray-800 dark:text-white"
              data-oid="dbgoyo9"
            >
              Denial Reasons
            </h2>
            <div
              className="h-80 w-full bg-gray-100 dark:bg-gray-700"
              data-oid="k6ul865"
            >
              {/* Placeholder for chart */}
              <div
                className="flex h-full w-full items-center justify-center"
                data-oid="_8sfcx2"
              >
                <p
                  className="text-gray-500 dark:text-gray-400"
                  data-oid="igccnza"
                >
                  Denial Reasons Chart
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Admin Tools Tab */}
      {activeTab === "admin" && (
        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          data-oid="n.6dn7:"
        >
          <AdminNavCard
            title="User Management"
            description="Add, edit, or remove system users and permissions"
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                data-oid="fmispt2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  data-oid="k8f.7fe"
                ></path>
              </svg>
            }
            link="/admin/users"
            data-oid="n_eat5t"
          />

          <AdminNavCard
            title="System Settings"
            description="Configure application settings and preferences"
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                data-oid="kelj0t6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  data-oid="16kb-h2"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  data-oid="1g7c6l."
                ></path>
              </svg>
            }
            link="/admin/settings"
            data-oid="ypcuqeu"
          />

          <AdminNavCard
            title="Content Management"
            description="Manage website content, blog posts, and resources"
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                data-oid="dn_qsre"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  data-oid="wrize.t"
                ></path>
              </svg>
            }
            link="/admin/content"
            data-oid="q3kaegi"
          />

          <AdminNavCard
            title="Billing Configuration"
            description="Set up billing codes, rates, and payment integrations"
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                data-oid="p9ypyky"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  data-oid="vrqdke0"
                ></path>
              </svg>
            }
            link="/admin/billing"
            data-oid="2x_:3-a"
          />

          <AdminNavCard
            title="Audit Logs"
            description="View system activity and security audit logs"
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                data-oid="ct.11ff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  data-oid="_ezoje0"
                ></path>
              </svg>
            }
            link="/admin/logs"
            data-oid="n:r.-ho"
          />

          <AdminNavCard
            title="Integrations"
            description="Manage third-party service integrations"
            icon={
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                data-oid="--8wtax"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                  data-oid="ioz71:-"
                ></path>
              </svg>
            }
            link="/admin/integrations"
            data-oid="9iuh_jc"
          />
        </div>
      )}
    </div>
  );
}
