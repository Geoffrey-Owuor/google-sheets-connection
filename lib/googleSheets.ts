import { google } from "googleapis";
import { googleAuth } from "./googleAuth";
import { cache } from "react";

async function fetchSheetData() {
  try {
    const auth = await googleAuth();

    //Get the sheets client
    const sheets = google.sheets({ version: "v4", auth });

    // Fetch the data
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1", // Adjust range as needed (e.g., just 'Sheet1' for everything or Sheet1!A1:B12 for the range)
    });

    // Return the rows
    return response.data.values;
  } catch (error) {
    console.error("Google Apis Error:", error);
    return null;
  }
}

// memoizing the call by wrapping it in react cache
export const getSheetData = cache(fetchSheetData);
