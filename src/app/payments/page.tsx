import React from "react";
import { columns, Payment } from "./columns";
import { DataTable } from "./data-table";
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52d",
      amount: 100,
      status: "success",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "failed",
      email: "example@gmail.com",
    },
    {
      id: "489e1d43",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    // ...
  ];
}

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
        <h1 className="font-semibold">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentsPage;
