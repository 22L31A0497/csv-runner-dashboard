import Papa from "papaparse";
import { z } from "zod";
import { RunEntry } from "@/types/runner";

const RowSchema = z.object({
  date: z.string().min(1),
  person: z.string().min(1),
  miles: z.coerce.number().positive(),
});

export function parseCSV(file: File): Promise<RunEntry[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        try {
          const parsed = results.data.map((row: any) =>
            RowSchema.parse(row)
          );
          resolve(parsed);
        } catch (err) {
          reject(new Error("Invalid CSV format or data types"));
        }
      },
      error: () => reject(new Error("Failed to parse CSV")),
    });
  });
}
