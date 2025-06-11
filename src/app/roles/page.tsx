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
      <section
        className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]"
        data-oid="auqw.rx"
      >
        <div className="container" data-oid="27yg821">
          <div className="-mx-4 flex flex-wrap" data-oid="33ui5s5">
            <div className="w-full px-4" data-oid="umia0u7">
              <div
                className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]"
                data-oid="0wd.yuo"
              >
                <h1 data-oid="v1hrd15">Kyron Medical</h1>
                <p data-oid="k47:-hy">Please sign-up to continue</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]"
      data-oid="wm6n7gz"
    >
      <div className="container" data-oid="0u:suh8">
        <div className="-mx-4 flex flex-wrap" data-oid="ufs2.cx">
          <div className="w-full px-4" data-oid="x6r4esl">
            <div
              className="mx-auto flex max-w-[500px] flex-col items-center justify-center gap-8 rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]"
              data-oid="qu6rx28"
            >
              <div className="text-center" data-oid="_vm.a6x">
                <h1
                  className="mb-2 text-center text-2xl font-bold"
                  data-oid="k1nmo04"
                >
                  Welcome to Kyron Medical
                </h1>
                <strong className="text-gray-700" data-oid="onlgfmy">
                  Please select your role to continue:
                </strong>
              </div>
              <select
                className="block w-full rounded-md border border-gray-300 p-2"
                value={role}
                onChange={handleChange}
                data-oid="vpm9dub"
              >
                <option value="" disabled data-oid="y9bg3j0">
                  Select your role
                </option>
                <option value="undergraduate" data-oid="7ikjyue">
                  Private Practice
                </option>
                <option value="graduate" data-oid="ltcusl2">
                  Medical Billing Company
                </option>
              </select>

              <motion.button
                className="mt-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log("hover started!")}
                data-oid="wzqzap1"
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
                  data-oid="s84tznk"
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
