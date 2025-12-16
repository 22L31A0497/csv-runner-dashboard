import { RunEntry } from "@/types/runner";

export function computeMetrics(data: RunEntry[]) {
  const miles = data.map((d) => d.miles);

  return {
    average: miles.reduce((a, b) => a + b, 0) / miles.length,
    min: Math.min(...miles),
    max: Math.max(...miles),
  };
}

export function groupByPerson(data: RunEntry[]) {
  return data.reduce((acc: Record<string, RunEntry[]>, curr) => {
    acc[curr.person] = acc[curr.person] || [];
    acc[curr.person].push(curr);
    return acc;
  }, {});
}
