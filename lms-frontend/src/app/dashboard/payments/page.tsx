"use client";

import React, { useState } from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // ShadCN table components
import { Button } from "@/components/ui/button";

type Payment = {
  id: string;
  user: string;
  amount: string;
  date: string;
  status: "Paid" | "Failed" | "Pending";
};

const initialPayments: Payment[] = [
  {
    id: "1",
    user: "John Doe",
    amount: "$50",
    date: "2023-06-01",
    status: "Paid",
  },
  {
    id: "2",
    user: "Jane Smith",
    amount: "$30",
    date: "2023-06-05",
    status: "Failed",
  },
  {
    id: "3",
    user: "Alice Johnson",
    amount: "$75",
    date: "2023-06-10",
    status: "Pending",
  },
];

export default function PaymentListPage() {
  const [payments, setPayments] = useState<Payment[]>(initialPayments);

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this payment record?")) {
      setPayments((prev) => prev.filter((pay) => pay.id !== id));
      alert("Payment record deleted!");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Payment List</h1>

      <Table>
        <TableCaption>All platform payment records</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.length === 0 ? (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-6">
                No payment records found.
              </TableCell>
            </TableRow>
          ) : (
            payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.id}</TableCell>
                <TableCell>{payment.user}</TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell
                  className={
                    payment.status === "Paid"
                      ? "text-green-600"
                      : payment.status === "Failed"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }
                >
                  {payment.status}
                </TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(payment.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
