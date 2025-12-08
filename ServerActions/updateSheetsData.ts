// Update sheet data
"use server";

import { updateTag } from "next/cache";

export async function updateSheetsData() {
  updateTag("sheetsData");
}
