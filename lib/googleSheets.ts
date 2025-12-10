import { googleAuth } from "./googleAuth";
import { cache } from "react";

async function fetchSheetData() {
  try {
    const { sheets, spreadSheetId, sheetName } = await googleAuth();

    // Fetch the data
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadSheetId,
      range: sheetName, // Adjust range as needed (e.g., just 'Sheet1' for everything or Sheet1!A1:B12 for the range)
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
