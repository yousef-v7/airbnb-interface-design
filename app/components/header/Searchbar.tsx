"use client";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { PiUserSwitchDuotone } from "react-icons/pi";
import Link from "next/link";

export default function SearchBar({ placeholder }: { placeholder?: string }) {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [animate, setAnimate] = useState(false);
  const [numOfGuests, setNumOfGuests] = useState(1);

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };

  // Trigger animation only once when the input goes from empty to non-empty
  useEffect(() => {
    if (input && !animate) {
      const timer = setTimeout(() => setAnimate(true), 10);
      return () => clearTimeout(timer);
    } else if (!input) {
      // Reset animation if input becomes empty
      setAnimate(false);
    }
  }, [input, animate]);

  // Cancel button handler: hides the popup
  const handleCancel = () => {
    setInput("");
  };

  return (
    <div className="relative">
      {/* Main Search Bar */}
      <div className="hidden sm:flex items-center border border-gray-300 rounded-full px-3 py-2 bg-white shadow-sm w-full md:w-[300px] lg:w-[400px]">
        <input
          type="text"
          placeholder={placeholder || "Start your search"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="text-gray-600 placeholder-gray-400 flex-grow pl-3 bg-transparent focus:outline-none"
        />
        <button className="bg-red-400 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-red-500 transition">
          <FaSearch className="w-4 h-4" />
        </button>
      </div>

      {/* DateRangePicker Popup Positioned on Top and Center */}
      {input && (
        <div
          className={`absolute top-100px left-1/2 transform -translate-x-1/2 mt-4 z-50 transition-all duration-300 ease-out ${
            animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="bg-white p-4 rounded shadow">
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
            />
            {/* Guests Input */}
            <div className="flex items-center border-b bg-white p-4">
              <h2 className="text-2xl flex-grow font-semibold">
                Number of Guests
              </h2>
              <PiUserSwitchDuotone className="h-5" />
              <input
                type="number"
                className="w-12 pl-2 text-lg outline-none text-red-400"
                value={numOfGuests}
                min={1}
                onChange={(e) => setNumOfGuests(Number(e.target.value))}
              />
            </div>
            {/* Buttons Row */}
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded bg-gray-200 text-black hover:bg-gray-300"
              >
                Cancel
              </button>
              <Link
                href={`/search?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`}
                onClick={handleCancel}
                className="px-4 py-2 rounded bg-red-400 text-white hover:bg-red-500"
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
