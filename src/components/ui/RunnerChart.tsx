"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RunEntry } from "@/types/runner";

export default function RunnerChart({ data }: { data: RunEntry[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="miles" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
