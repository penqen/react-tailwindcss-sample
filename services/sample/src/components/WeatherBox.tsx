import React from "react";

import { Droplets, Wind } from "lucide-react";

export default function WeatherBox({
  date = new Date(2023, 3, 1),
  temperature = 18,
  minTemperature = 10,
  maxTemperature = 25,
  humidity = 34,
  windSpeed = 10,
}: {
  date?: Date;
  temperature?: number;
  minTemperature?: number;
  maxTemperature?: number;
  humidity?: number;
  windSpeed?: number;
}) {
  const dayOfWeek = ((day: number) => {
    if (day === 0) return "日";
    if (day === 1) return "月";
    if (day === 2) return "火";
    if (day === 3) return "水";
    if (day === 4) return "木";
    if (day === 5) return "金";
    return "土";
  })(date.getDay());

  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white px-6 pb-6 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
      <h3 className="pt-6 text-center text-2xl">
        {date.getFullYear()}
        <span>&nbsp;/&nbsp;</span>
        {date.getMonth() + 1}
        <span>&nbsp;/&nbsp;</span>
        {date.getDate()}
        <span>&nbsp;({dayOfWeek})</span>
      </h3>
      <h4 className="py-4 text-center text-xl">XXX 市</h4>
      <h2 className="text-center text-4xl">
        <span>{temperature}</span>
        <span>&nbsp;&#8451;</span>
      </h2>
      <h5 className="text-center text-lg opacity-80">
        <span className="text-rose-500 dark:text-rose-400">
          {maxTemperature}
          &nbsp;&#8451;
        </span>
        <span className="text-gray-300 dark:text-gray-500">&nbsp;/&nbsp;</span>
        <span className="text-sky-600 dark:text-sky-400">
          {minTemperature}
          &nbsp;&#8451;
        </span>
      </h5>
      <div className="flex justify-between gap-4 pt-4">
        <Droplets className="text-cyan-600 dark:text-cyan-500" />
        <h4 className="text-xl">
          <span>{humidity}</span>
          <span>&nbsp;%</span>
        </h4>
        <Wind className="ml-14 text-emerald-600 dark:text-emerald-400" />
        <h4 className="text-xl">
          <span>{windSpeed}</span>
          <span>&nbsp;m/s</span>
        </h4>
      </div>
    </div>
  );
}
