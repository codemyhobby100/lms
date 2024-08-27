import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront, PiChalkboardTeacherLight } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import { SiKhanacademy } from "react-icons/si";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { RiSpeakLine } from "react-icons/ri";
import { AiTwotoneSchedule } from "react-icons/ai";
import { MdOutlineMailLock } from "react-icons/md";
import { MdLocalLibrary } from "react-icons/md";
import { MdOutlineQueryStats } from "react-icons/md";
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    icon: (
      <div className="p-4 rounded-full border-2 text-[20px]">
        <LuLayoutDashboard />
      </div>
    ),
    title: "Personalized Dashboard",
    description:
      "Access your own customized portal to manage your counseling sessions and resources.",
  },
  {
    icon: (
      <div className="  p-4 rounded-full border-2 text-[20px]">
        <SiKhanacademy />
      </div>
    ),
    title: "Diverse Counseling Options",
    description:
      "Choose from a variety of counseling services tailored to academic, emotional, and career support.",
  },
  {
    icon: (
      <div className="border-2 text-[20px]  p-4 rounded-full">
        <MdOutlineMailLock />
      </div>
    ),
    title: "Confidential Messaging",
    description:
      "Communicate securely with counselors through private messages, ensuring your concerns are addressed discreetly.",
  },
  {
    icon: (
      <div className="border-2 text-[20px] p-4 rounded-full">
        <MdLocalLibrary />
      </div>
    ),
    title: "Resource Library",
    description:
      "Explore a curated collection of articles, videos, and tools to help you navigate student life challenges.",
  },
  {
    icon: (
      <div className="border-2 text-[20px] p-4 rounded-full">
        <AiTwotoneSchedule />
      </div>
    ),
    title: "Appointment Scheduling",
    description:
      "Easily book one-on-one sessions with counselors at a time that fits your schedule.",
  },
  {
    icon: (
      <div className="border-2 text-[20px] p-4 rounded-full">
        <MdOutlineQueryStats />
      </div>
    ),
    title: "Progress Monitoring",
    description:
      "Track your mental and academic well-being with tools that help you set goals and measure your improvement.",
  },
];
