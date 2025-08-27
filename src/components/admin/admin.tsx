"use client";

import Logo from "../ui/main-logo";
import Link from "next/link";
import { useState } from "react";
import {
  LayoutGrid,
  Calendar,
  Wallet,
  LucideBadgeQuestionMark,
  Search,
  Bell,
  User,
} from "lucide-react";

type ActiveScreen = "dashboard" | "appointment" | "payment";

export default function Admin() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>("dashboard");
  const [name, setName] = useState<string>("");
  const [invoice, setInvoice] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [globalQuery, setGlobalQuery] = useState<string>("");

  return (
    <main className="flex h-screen">
      {/* Sidebar */}
      <div className="w-20 md:w-72 flex flex-col bg-gray-50 border-r">
        <div className="h-20 flex justify-center items-center">
          <Logo />
        </div>
        <div className="flex-1 flex flex-col text-lg gap-y-6 p-6 md:p-10">
          {[
            { icon: LayoutGrid, label: "Dashboard", screen: "dashboard" },
            { icon: Calendar, label: "Appointment", screen: "appointment" },
            { icon: Wallet, label: "Payment", screen: "payment" },
          ].map(({ icon: Icon, label, screen }) => (
            <div
              key={label}
              className={`flex items-center gap-3 cursor-pointer p-2 rounded hover:bg-green-100 hover:text-green-600 transition ${
                activeScreen === screen ? "bg-green-100 text-green-600" : ""
              }`}
              onClick={() => setActiveScreen(screen as ActiveScreen)}
            >
              <Icon size={24} />
              <span className="hidden md:block">{label}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 p-6 border-t mt-auto hover:text-green-600 transition">
          <LucideBadgeQuestionMark size={24} />
          <Link href="">Help</Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between p-4 border-b bg-white shadow-sm gap-3">
          <div className="flex flex-1 max-w-full md:max-w-[700px] border rounded shadow-sm">
            <Search className="text-gray-400 px-2" size={20} />
            <input
              type="text"
              value={globalQuery}
              onChange={(e) => setGlobalQuery(e.target.value)}
              placeholder="Global Search..."
              className="flex-1 outline-none px-3 py-2 text-gray-700 placeholder-gray-400 bg-transparent"
            />
          </div>

          <div className="flex items-center gap-4">
            <Bell className="w-8 h-8 text-gray-700" />
            <User className="w-8 h-8 text-green-700" />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 p-4 bg-gray-50">
          <FilterInput
            label="Name"
            value={name}
            setValue={setName}
            placeholder="Enter Customer Name"
          />
          <FilterInput
            label="Invoice ID"
            value={invoice}
            setValue={setInvoice}
            placeholder="Enter Invoice ID"
          />
          <FilterInput
            label="Start Date"
            type="date"
            value={startDate}
            setValue={setStartDate}
          />
          <FilterInput
            label="End Date"
            type="date"
            value={endDate}
            setValue={setEndDate}
          />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4">
          <DashboardScreen
            name={name}
            invoice={invoice}
            startDate={startDate}
            endDate={endDate}
            globalQuery={globalQuery}
            activeScreen={activeScreen}
          />
        </div>
      </div>
    </main>
  );
}

type FilterInputProps = {
  label: string;
  value: string;
  setValue: (v: string) => void;
  placeholder?: string;
  type?: string;
};

function FilterInput({
  label,
  value,
  setValue,
  placeholder,
  type = "text",
}: FilterInputProps) {
  return (
    <div className="flex flex-col flex-1 max-w-[400px] bg-white shadow-md rounded px-4 py-2">
      <label className="mb-2 text-gray-600 text-sm font-light">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="outline-none px-3 py-2 text-gray-700 placeholder-gray-400 bg-transparent border rounded"
      />
    </div>
  );
}

type GenericTableProps<T> = {
  data: T[];
  columns: string[];
  keys: (keyof T)[];
};

function GenericTable<T extends Record<string, string | number>>({
  data,
  columns,
  keys,
}: GenericTableProps<T>) {
  return (
    <div className="overflow-x-auto text-lg">
      <div className="overflow-y-auto max-h-[60vh] border rounded-lg">
        <div
          className={`grid grid-cols-6 bg-green-400 font-semibold text-center py-2 sticky top-0 z-10`}
        >
          {columns.map((c) => (
            <div key={c}>{c}</div>
          ))}
        </div>
        {data.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-6 text-center border-t py-2 hover:bg-gray-100`}
          >
            {keys.map((k) => (
              <div key={String(k)}>{row[k]}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

type DashboardScreenProps = {
  name: string;
  invoice: string;
  startDate: string;
  endDate: string;
  globalQuery: string;
  activeScreen: ActiveScreen;
};

function DashboardScreen({
  name,
  invoice,
  startDate,
  endDate,
  globalQuery,
  activeScreen,
}: DashboardScreenProps) {
  const dashboardData = [
    {
      id: 1,
      invoiceID: "INV001",
      time: "8:00 AM to 10:00 AM",
      date: "1 Aug 2025",
      customer: "Jacob",
      paid_amount: 1000,
    },
    {
      id: 2,
      invoiceID: "INV002",
      time: "10:00 AM to 11:00 AM",
      date: "3 Aug 2025",
      customer: "Emma",
      paid_amount: 2500,
    },
    {
      id: 3,
      invoiceID: "INV003",
      time: "1:00 PM to 2:00 PM",
      date: "5 Aug 2025",
      customer: "Liam",
      paid_amount: 1800,
    },
  ];

  const appointments = [
    {
      id: 1,
      customer: "Jacob",
      date: "1 Aug 2025",
      time: "8:00 AM - 9:00 AM",
      service: "Haircut",
      status: "Confirmed",
    },
    {
      id: 2,
      customer: "Emma",
      date: "1 Aug 2025",
      time: "9:00 AM - 10:00 AM",
      service: "Massage",
      status: "Pending",
    },
  ];

  const payments = [
    {
      id: 1,
      invoiceID: "INV001",
      customer: "Jacob",
      date: "1 Aug 2025",
      amount: 1000,
      method: "Online",
      status: "Paid",
    },
    {
      id: 2,
      invoiceID: "INV002",
      customer: "Emma",
      date: "1 Aug 2025",
      amount: 1500,
      method: "In-person",
      status: "Unpaid",
    },
  ];

  const filterData = <T extends { [key: string]: string | number }>(arr: T[]) =>
    arr.filter((d) => {
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;
      const dDate = new Date(d.date as string);
      return (
        (!name ||
          (d.customer &&
            String(d.customer).toLowerCase().includes(name.toLowerCase()))) &&
        (!invoice ||
          (d.invoiceID &&
            String(d.invoiceID)
              .toLowerCase()
              .includes(invoice.toLowerCase()))) &&
        (!start || dDate >= start) &&
        (!end || dDate <= end)
      );
    });

  const globalMatches = <T extends { [key: string]: string | number }>(
    arr: T[]
  ) => {
    const term = globalQuery.toLowerCase();
    return arr.filter(
      (d) =>
        !term ||
        Object.values(d).some((v) => String(v).toLowerCase().includes(term))
    );
  };

  return (
    <>
      {activeScreen === "dashboard" && (
        <GenericTable
          data={filterData(globalMatches(dashboardData))}
          columns={["Invoice ID", "Time", "Date", "Customer", "Paid Amount"]}
          keys={["invoiceID", "time", "date", "customer", "paid_amount"]}
        />
      )}
      {activeScreen === "appointment" && (
        <GenericTable
          data={filterData(globalMatches(appointments))}
          columns={["Customer", "Date", "Time", "Service", "Status"]}
          keys={["customer", "date", "time", "service", "status"]}
        />
      )}
      {activeScreen === "payment" && (
        <GenericTable
          data={filterData(globalMatches(payments))}
          columns={[
            "Invoice ID",
            "Customer",
            "Date",
            "Amount",
            "Method",
            "Status",
          ]}
          keys={["invoiceID", "customer", "date", "amount", "method", "status"]}
        />
      )}
    </>
  );
}
