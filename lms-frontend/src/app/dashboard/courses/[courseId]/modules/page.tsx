"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const initialModules = [
  { id: "1", name: "Module 1", courseId: "1" },
  { id: "2", name: "Module 2", courseId: "1" },
  { id: "3", name: "Module 3", courseId: "2" },
];

export default function CourseModulesPage() {
  const params = useParams(); // Use useParams hook
  const courseId = params?.courseId; // Extract courseId

  const modules = initialModules.filter((module) => module.courseId === courseId);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Modules for Course {courseId}</h1>
      <Link href={`/dashboard/courses/${courseId}/modules/addModule`}>
        <Button className="mb-4">+ Add New Module</Button>
      </Link>
      {modules.length > 0 ? (
        <ul className="space-y-4">
          {modules.map((module) => (
            <li
              key={module.id}
              className="border p-4 rounded bg-white shadow-md flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-bold">{module.name}</h2>
              </div>
              <div className="space-x-2">
                <Link href={`/dashboard/courses/${courseId}/modules/${module.id}/videos`}>
                  <Button variant="outline" size="sm">
                    Manage Videos
                  </Button>
                </Link>
                <Link href={`/dashboard/courses/${courseId}/modules/${module.id}/editModule`}>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </Link>
                <Button variant="destructive" size="sm" onClick={() => alert("Delete functionality coming soon!")}>
                  Delete
                </Button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No modules found for this course.</p>
      )}
    </div>
  );
}
