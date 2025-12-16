"use client";

import { useRef, useState } from "react";
import { parseCSV } from "@/lib/csvParser";
import { RunEntry } from "@/types/runner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert } from "@/components/ui/alert";

export default function CsvUploader({
  onData,
}: {
  onData: (data: RunEntry[]) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFile = async (file: File) => {
    try {
      const data = await parseCSV(file);
      onData(data);
      setFileName(file.name);
      setError("");
    } catch (e: any) {
      setError(e.message);
      setFileName("");
    }
  };

  return (
    <Card className="p-6 space-y-4 border-dashed">
      <div className="flex items-center gap-4">
        <Button onClick={() => fileRef.current?.click()}>
          Upload CSV
        </Button>

        <span className="text-sm text-muted-foreground">
          {fileName || "No file selected"}
        </span>

        <input
          ref={fileRef}
          type="file"
          accept=".csv"
          className="hidden"
          onChange={(e) =>
            e.target.files && handleFile(e.target.files[0])
          }
        />
      </div>

      <p className="text-xs text-muted-foreground">
        Expected columns: <strong>date, person, miles</strong>
      </p>

      {error && <Alert variant="destructive">{error}</Alert>}
    </Card>
  );
}
