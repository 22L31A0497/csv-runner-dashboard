"use client";

import { useState } from "react";
import CsvUploader from "@/components/ui/CsvUploader";
import RunnerChart from "@/components/ui/RunnerChart";
import { MetricsCard } from "@/components/ui/MetricsCard";
import { computeMetrics, groupByPerson } from "@/lib/metrics";
import { RunEntry } from "@/types/runner";

export default function Home() {
  const [data, setData] = useState<RunEntry[]>([]);

  if (!data.length) {
    return (
      <main className="p-6">
        <CsvUploader onData={setData} />
      </main>
    );
  }

  const metrics = computeMetrics(data);
  const grouped = groupByPerson(data);

  return (
    <main className="p-6 space-y-6">
      <CsvUploader onData={setData} />

      <div className="grid grid-cols-3 gap-4">
        <MetricsCard title="Average Miles" value={metrics.average} />
        <MetricsCard title="Min Miles" value={metrics.min} />
        <MetricsCard title="Max Miles" value={metrics.max} />
      </div>

      <RunnerChart data={data} />

      {Object.entries(grouped).map(([person, entries]) => (
        <section key={person}>
          <h2 className="text-xl font-semibold">{person}</h2>
          <RunnerChart data={entries} />
        </section>
      ))}
    </main>
  );
}
