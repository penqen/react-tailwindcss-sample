import React from "react";

import { Search } from "lucide-react";

export default function SearchBox() {
  return (
    <form action="" className="rounded-lg bg-gray-100 dark:bg-gray-700/50">
      <div className="flex w-full justify-between gap-1 px-2 py-1">
        <input
          type="text"
          className="border-gray-400 bg-transparent outline-none transition dark:border-gray-700"
        />
        <button
          className="rounded-full p-2 transition hover:bg-gray-300 dark:hover:bg-gray-900/50"
          type="button"
        >
          <Search />
        </button>
      </div>
    </form>
  );
}
