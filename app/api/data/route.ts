import { googleAuth } from "@/lib/googleAuth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Get request payload
    const { formData, updateData, rowIndex } = await request.json();

    // Get authentication
    const { sheets, spreadSheetId, sheetName } = await googleAuth();

    if (updateData) {
      //UPDATE LOGIC
      const sheetRowNumber = rowIndex + 1;

      const range = `${sheetName}!A${sheetRowNumber}`;

      await sheets.spreadsheets.values.update({
        spreadsheetId: spreadSheetId,
        range: range,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [formData], //Update expects an array of arrays
        },
      });

      return NextResponse.json({ message: "Record updated successfully" });
    } else {
      // INSERT (APPEND) LOGIC
      await sheets.spreadsheets.values.append({
        spreadsheetId: spreadSheetId,
        range: sheetName,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [formData],
        },
      });

      return NextResponse.json({ message: "Record added successfully" });
    }
  } catch (error) {
    console.error("Sheet Api Error:", error);
    return NextResponse.json(
      { message: "Failed to save data" },
      { status: 500 },
    );
  }
}
