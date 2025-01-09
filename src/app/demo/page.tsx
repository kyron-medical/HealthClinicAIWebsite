import Breadcrumb from "@/components/Common/Breadcrumb";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import FileUploadBox from "../../app/demo/_components/FileUpload";

import { Metadata } from "next";
import DemoForm from "./_components/DemoForm";
import SectionTitle from "@/components/Common/SectionTitle";

export const metadata: Metadata = {
  title: "Demo Page | Kyron",
  description: "Demo Page for Kyron",
  // other metadata
};

const DemoPage = () => {
 
  return (
    <>
      <div className="container">
        <SignedOut>
          <h2 className="text-center text-3xl font-bold text-dark dark:text-white">
            Sign in to generate your letter of appeal
          </h2>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <DemoForm /> {/* Client-Side Interactive Form */}
        </SignedIn>
      </div>
    </>
  );
};

export default DemoPage;
