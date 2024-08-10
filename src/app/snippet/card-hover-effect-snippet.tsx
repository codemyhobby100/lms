import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront, PiChalkboardTeacherLight } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdOutlineInsights } from "react-icons/md";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

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
        <PiStorefront/>
      </div>
    ),
    title: "Beginner Essentials",
    description:
      "Start with the basics and build a strong foundation in your new language with easy-to-follow lessons.",
  },
  {
    icon: (
      <div className="  p-4 rounded-full border-2 text-[20px]">
        <MdOutlineInsights />
      </div>
    ),
    title: "Cultural Insights",
    description:
      "Immerse yourself in the culture behind the language with engaging content that brings context to your learning.",
  },
  {
    icon: (
      <div className="border-2 text-[20px]  p-4 rounded-full">
        <LiaChalkboardTeacherSolid />
      </div>
    ),
    title: "Interactive Exercises",
    description:
      "Test your knowledge and improve your skills with fun, interactive activities designed to reinforce your learning.",
  },
  {
    icon: (
      <div className="border-2 text-[20px] p-4 rounded-full">
        <MdOutlineAdminPanelSettings />
      </div>
    ),
    title: "Speaking Practice",
    description:
      "Boost your confidence with guided speaking exercises that help you practice pronunciation and conversational skills.",
  },
  {
    icon: (
      <div className="border-2 text-[20px] p-4 rounded-full">
        <PiChalkboardTeacherLight />
      </div>
    ),
    title: "Vocabulary Expansion",
    description:
      "Grow your vocabulary with targeted lessons and flashcards that make memorization simple and effective.",
  },
  {
    icon: (
      <div className="border-2 text-[20px] p-4 rounded-full">
        <PiHeadsetFill />
      </div>
    ),
    title: "Progress Tracking",
    description:
      "Stay motivated by tracking your learning journey, with personalized feedback and goal-setting tools.",
  },
];
