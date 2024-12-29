"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Adjust path if necessary

const videos = ["Video 1", "Video 2", "Video 3"]; // Replace with API data if needed

export default function ModuleVideosPage() {
  const courseId = "1"; // Replace with dynamic query from router
  const moduleId = "1-1"; // Replace with dynamic query from router

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Videos for Module {moduleId} in Course {courseId}
      </h1>
      <div className="mb-4">
        <Link href={`/dashboard/courses/${courseId}/modules/${moduleId}/videos/add`}>
          <Button variant="default" className="px-4 py-2">
            + Add New Video
          </Button>
        </Link>
      </div>

      <ul className="space-y-4">
        {videos.map((video, index) => (
          <li
            key={index}
            className="border p-4 rounded bg-white shadow-md flex justify-between items-center"
          >
            <span className="font-semibold">{video}</span>
            <div className="space-x-4">
              <Link href={`/dashboard/courses/${courseId}/modules/${moduleId}/videos/edit/${index}`}>
                <Button variant="link" className="text-yellow-500 px-2">
                  Edit
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="text-red-500 px-2"
                onClick={() => console.log(`Delete video ${index}`)} // Replace with actual delete logic
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
