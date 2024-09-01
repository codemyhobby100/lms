import Image from 'next/image';
import React, { useRef } from 'react';
import { Container, Icons } from "@/components";
import Contact from "../../components/contact/contact"
const Page = () => {
    
  return (
    <section className="w-full flex items-center justify-center flex-col md:px-0 py-8">
      {/* Full-width welcome section */}
      <div className="w-full flex items-start gap-4 bg-white text-black mt-[-50px] px-4 py-8">
        <Icons.logo className="w-20 h-20 flex-shrink-0" />
        <div className="flex-1">
            <h1 className="text-2xl font-bold">Hi there,</h1>
            <p className="text-lg">Welcome to your EduSupport Portal</p>
            <p className="text-lg mt-2">Please complete the form to connect with your assigned counselor. We're here to support and guide you every step of the way.</p>
        </div>
    </div>

      {/* Form section */}
    <Contact />
    </section>
  );
};

export default Page;
