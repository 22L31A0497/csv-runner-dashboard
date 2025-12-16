"use client";

import { useState } from "react";
import CsvUploader from "@/components/ui/CsvUploader";
import RunnerChart from "@/components/ui/RunnerChart";
import { MetricsCard } from "@/components/ui/MetricsCard";
import { computeMetrics, groupByPerson } from "@/lib/metrics";
import { RunEntry } from "@/types/runner";

export default function Home() {
  const [data, setData] = useState<RunEntry[]>([]);

  const metrics = data.length ? computeMetrics(data) : null;
  const grouped = data.length ? groupByPerson(data) : null;

  return (
    <main className="p-6 space-y-8 max-w-5xl mx-auto">

      {/* Header */}
      <section className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          CSV Runner Dashboard
        </h1>
        <p className="text-muted-foreground max-w-3xl">
          Upload a CSV file containing running data to view overall and
          per-person statistics along with interactive visualizations.
        </p>
      </section>

      {/* CSV Upload */}
      <CsvUploader onData={setData} />

      {/* Dashboard */}
      {data.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <MetricsCard title="Average Miles" value={metrics!.average} />
            <MetricsCard title="Minimum Miles" value={metrics!.min} />
            <MetricsCard title="Maximum Miles" value={metrics!.max} />
          </div>

          <RunnerChart data={data} />

          {Object.entries(grouped!).map(([person, entries]) => (
            <section key={person} className="space-y-2">
              <h2 className="text-xl font-semibold">{person}</h2>
              <RunnerChart data={entries} />
            </section>
          ))}
        </>
      )}
    </main>
  );
}
