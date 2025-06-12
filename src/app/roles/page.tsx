"use client";

import { useState, ChangeEvent } from "react";
import { useUser } from "@clerk/nextjs";
import { motion } from "framer-motion";
import Link from "next/link";
import toast from "react-hot-toast";
import { trpc } from "trpc/client";

export default function Page() {
  const [role, setRole] = useState<string>("");
  const { user } = useUser(); // Ensure you have the userId available

  const updateRoleMutation = trpc.updateUserRole.useMutation();

  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    console.log(event.target.value);
    setRole(event.target.value);
    // Conditional return to handle the case when user is not available
    if (!user) {
      return "Please sign-up";
    }
  }

  if (!user) {
    return (
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                <h1>Kyron Medical</h1>
                <p>Please sign-up to continue</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto flex max-w-[500px] flex-col items-center justify-center gap-8 rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
              <div className="text-center">
                <h1 className="mb-2 text-center text-2xl font-bold">
                  Welcome to Kyron Medical
                </h1>
                <strong className="text-gray-700">
                  Please select your role to continue:
                </strong>
              </div>
              <select
                className="block w-full rounded-md border border-gray-300 p-2"
                value={role}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select your role
                </option>
                <option value="undergraduate">Private Practice</option>
                <option value="graduate">Medical Billing Company</option>
              </select>

              <motion.button
                className="mt-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log("hover started!")}
              >
                <Link
                  href={`/biller/dashboard/${user.id}`}
                  rel="noopener noreferrer"
                  className="rounded-xl bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700"
                  onClick={() => {
                    if (!role) {
                      toast("Please select a role before proceeding.");
                      return;
                    }
                    console.log(`Selected role: ${role}`);
                    updateRoleMutation.mutate(
                      {
                        userId: user.id,
                        role: role,
                      },
                      {
                        onSuccess: () => {
                          toast.success("Role updated successfully!");
                        },
                        onError: (error) => {
                          toast.error(`Error updating role: ${error.message}`);
                        },
                      },
                    );
                  }}
                >
                  Register
                </Link>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
