import React from "react";

export default function ServiceCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition group">
      <div className="flex items-center gap-3">
        <div className="text-blue-600 group-hover:scale-110 group-hover:text-blue-700 transition">
          {icon}
        </div>
        <h4 className="font-semibold text-lg">{title}</h4>
      </div>
      <p className="text-sm text-gray-500 mt-2">{desc}</p>
      <a
        className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
        href="#"
      >
        Learn more →
      </a>
    </div>
  );
}
