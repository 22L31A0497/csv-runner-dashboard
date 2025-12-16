# CSV Runner Dashboard

## 1. Project Overview

This project is a solution to the **CSV Runner Dashboard challenge**.
It is a web application built using **Next.js (App Router)** and **shadcn/ui** that allows users to upload a CSV file containing running data and instantly view **summary metrics** and **visualizations**, both **overall** and **per person**.

---

## 2. Assumptions

* The uploaded CSV file must contain the headers: `date`, `person`, `miles`
* `miles` must be a positive numeric value
* Each row represents a single running activity
* All processing is done client-side; no database is used

---

## 3. Prerequisites

* **Node.js** version **18 or higher**
* npm (comes with Node.js)

---

## 4. Setup

### Install dependencies

```bash
npm install
```

### Environment variables

No environment variables are required.
(An `.env.example` is not needed as no secrets are used.)

---

## 5. Run & Verify

### Start the development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Sample CSV

A sample CSV file is provided below for testing:

```csv
date,person,miles
2025-01-01,Alice,3
2025-01-02,Bob,5
2025-01-03,Alice,4
```

### Verification Steps

1. Upload the sample CSV file.
2. Verify that **overall metrics** (average, minimum, maximum miles) are displayed correctly.
3. Confirm the **overall chart** visualizes running data.
4. Check **per-person charts** for individual runners.
5. Upload an invalid CSV (wrong headers or non-numeric miles) and confirm that a clear error message is shown.

---

## 6. Features & Limitations

### Features

* CSV parsing and validation with meaningful error handling
* Overall and per-person summary metrics (average, min, max)
* Interactive charts for data visualization
* Clean and accessible UI using shadcn/ui
* Responsive layout for different screen sizes

### Limitations

* Data is not persisted after page refresh
* No CSV export or file history support

---

## 7. Architecture Notes

### Folder Structure

```
src/
 ├─ app/          # Next.js App Router pages
 ├─ components/   # Reusable UI components
 ├─ lib/          # CSV parsing and metrics logic
 └─ types/        # TypeScript type definitions
```

### Design Approach

* **Component-based architecture** for clarity and reuse
* **Client-side state management** using React hooks
* **Separation of concerns** between UI, parsing, and computation logic

---

## 8. Accessibility & UI

* Semantic HTML elements for better screen reader support
* Clear button labels and helper text for file upload
* Sufficient contrast and readable typography
* Responsive charts that adapt to screen size

---

## 9. Future Improvements

* Persist uploaded files and results
* Add CSV export for computed metrics
* Improve drag-and-drop upload experience
* Add unit tests for CSV parsing and metrics computation

---

## 10. Tech Stack

* **Next.js (App Router)**
* **TypeScript**
* **shadcn/ui**
* **PapaParse**
* **Recharts**

---
