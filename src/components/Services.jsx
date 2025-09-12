import React from "react";
import {
  Stethoscope,
  Activity,
  Bone,
  Hand,
  Footprints,
  Brain,
  HeartPulse,
  Pill,
  ScanLine,
  Dumbbell,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const services = [
    {
      title: "Foot & Ankle",
      icon: <Footprints className="w-8 h-8" />,
      desc: "Expert diagnosis and treatment for foot & ankle conditions.",
    },
    {
      title: "General Orthopedics",
      icon: <Stethoscope className="w-8 h-8" />,
      desc: "Comprehensive orthopedic care across all ages.",
    },
    {
      title: "Hand, Wrist & Elbow",
      icon: <Hand className="w-8 h-8" />,
      desc: "Treatment for injuries & disorders of the upper extremities.",
    },
    {
      title: "Interventional Pain Management",
      icon: <Brain className="w-8 h-8" />,
      desc: "Advanced pain management techniques for chronic pain.",
    },
    {
      title: "Joint Replacement",
      icon: <Bone className="w-8 h-8" />,
      desc: "Hip, knee, and shoulder replacement surgeries.",
    },
    {
      title: "Orthopedic Urgent Care",
      icon: <HeartPulse className="w-8 h-8" />,
      desc: "Quick care for fractures, sprains & sports injuries.",
    },
    {
      title: "Physiatry",
      icon: <Activity className="w-8 h-8" />,
      desc: "Non-surgical treatment to restore movement and function.",
    },
    {
      title: "Shoulder",
      icon: <Bone className="w-8 h-8" />,
      desc: "Care for rotator cuff injuries, arthritis, and dislocations.",
    },
    {
      title: "Spine",
      icon: <Pill className="w-8 h-8" />,
      desc: "Surgical and non-surgical spine treatments.",
    },
    {
      title: "Sports Medicine",
      icon: <Dumbbell className="w-8 h-8" />,
      desc: "Injury prevention and treatment for athletes.",
    },
    {
      title: "Sports Performance",
      icon: <Activity className="w-8 h-8" />,
      desc: "Performance enhancement & rehab programs.",
    },
    {
      title: "MRI & CT",
      icon: <ScanLine className="w-8 h-8" />,
      desc: "Advanced diagnostic imaging services.",
    },
    {
      title: "Knee",
      icon: <Bone className="w-8 h-8" />,
      desc: "Arthroscopy, ligament, and meniscus repair.",
    },
    {
      title: "Hip",
      icon: <Bone className="w-8 h-8" />,
      desc: "Hip preservation & replacement treatments.",
    },
    {
      title: "Hand Therapy",
      icon: <Hand className="w-8 h-8" />,
      desc: "Rehabilitation therapy for hand & wrist injuries.",
    },
  ];

  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold text-gray-800">
        Our Orthopedic Services
      </h3>
      <p className="text-gray-600 mt-2">
        Specialized care for bones, joints, muscles, and movement.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <ServiceCard
            key={s.title}
            icon={s.icon}
            title={s.title}
            desc={s.desc}
          />
        ))}
      </div>
    </section>
  );
}
