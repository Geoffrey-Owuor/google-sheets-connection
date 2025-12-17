# 📊 Next.js Google Sheets Manager

An application built with **Next.js 16** and **TypeScript** that acts as a custom interface for Google Sheets. This app allows users to read, search, and perform CRUD operations on spreadsheet data directly through a web UI.

## 🚀 Key Features

- **Real-time Read:** Fetches latest data from Google Sheets using the Google APIs Node.js Client.
- **Caching and Refresh:** Caching fetched sheet data (Using next.js cache components) to reduce
  google sheet api calls, with a refresh button to refresh the data (Cache Invalidation)
- **Search & Filter:** Client-side and Server-side searching through sheet rows.
- **Data Manipulation:** Update and edit specific cells or rows directly from the app.
- **Type Safety:** Fully typed API responses and state management using TypeScript.
- **Secure:** Server-side API handling to keep Google Service Account credentials hidden.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **API:** [Google Sheets API v4](https://developers.google.com/sheets/api)
- **Authentication:** Google Service Account (JWT)
- **Styling:** Tailwind CSS

---

## ⚙️ Setup & Environment Variables Quick Guide

To run this project, you will need to set up a **Service Account** in [Google Cloud Console](https://console.cloud.google.com/) and enable the Google Sheets API.

Share your selected google sheet with the service account to allow read/write operations

Create a `.env` file in the root directory and add the following(Just a few of the required env variables):

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_spreadsheet_id_from_url
```
