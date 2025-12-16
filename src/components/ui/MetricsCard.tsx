import { Card } from "@/components/ui/card";

export function MetricsCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <Card className="p-4 text-center">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold">{value.toFixed(2)}</p>
    </Card>
  );
}
