"use client";
import Nav from "@/components/Nav";
import WeatherBox from "@/components/WeatherBox";

export default function Home() {
  return (
    <main className="flex min-h-full min-w-full flex-col">
      <Nav />
      <div className="flex grow items-center justify-center">
        <WeatherBox />
      </div>
    </main>
  );
}
