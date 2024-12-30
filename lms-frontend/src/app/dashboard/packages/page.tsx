"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

const initialPackages = [
  { id: "1", name: "Basic Plan", price: "$10/month" },
  { id: "2", name: "Pro Plan", price: "$20/month" },
];

export default function PackageListPage() {
  const [packages, setPackages] = useState(initialPackages);

  const handleDelete = (packageId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this package?");
    if (confirmDelete) {
      // Simulate deletion
      setPackages((prev) => prev.filter((pkg) => pkg.id !== packageId));
      alert("Package deleted successfully!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Package List</h1>
      <Link href="/dashboard/packages/create">
        <Button className="mb-4">+ Add New Package</Button>
      </Link>
      <Table>
        <TableCaption>A list of available packages for subscription</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Name</TableHead>
            <TableHead className="w-1/3">Price</TableHead>
            <TableHead className="w-1/3 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {packages.map((pkg) => (
            <TableRow key={pkg.id}>
              <TableCell>{pkg.name}</TableCell>
              <TableCell>{pkg.price}</TableCell>
              <TableCell className="text-right space-x-2">
                <Link href={`/dashboard/packages/${pkg.id}/edit`}>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(pkg.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
