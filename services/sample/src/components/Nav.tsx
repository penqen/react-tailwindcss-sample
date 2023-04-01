import React from "react";

import { User } from "lucide-react";

import ToggleThemeButton from "./ToggleThemeButton";

import SearchBox from "@/components/SearchBox";

export default function Nav() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <h2 className="text-xl text-white">SampleApp</h2>
          <SearchBox />
          <div className="flex space-x-4">
            <ToggleThemeButton />
            <button
              type="button"
              className="rounded-full bg-gray-700 p-2 text-white transition hover:bg-gray-900"
            >
              <User />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
