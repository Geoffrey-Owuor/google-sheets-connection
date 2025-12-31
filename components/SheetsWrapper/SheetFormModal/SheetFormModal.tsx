"use client";

import { PencilLine, Plus, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ConfirmationDialog from "@/components/Modules/ConfirmationDialog";
import SavingSpinner from "@/components/Modules/SavingSpinner";
import { updateSheetsData } from "@/ServerActions/updateSheetsData";

type SheetFormModalProps = {
  isOpen: boolean;
  updateData: boolean;
  onClose: () => void;
  setAlertInfo: (alert: alertProps) => void;
  headers: string[];
  rowData: string[];
  rowIndex: number;
};

type alertProps = {
  alertType: string;
  showAlert: boolean;
  alertMessage: string;
};

const SheetFormModal = ({
  isOpen,
  updateData,
  onClose,
  headers,
  rowData,
  setAlertInfo,
  rowIndex,
}: SheetFormModalProps) => {
  const [isSaving, setIsSaving] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Setting up initial form data
  const [formData, setFormData] = useState(() => {
    const initial = [...rowData];
    if (!updateData && initial[0] === "") {
      initial[0] = rowIndex.toString();
    }
    return initial;
  });

  // Effect to prevent html scroll when modal is open (for screens larger than 640px)
  useEffect(() => {
    if (isOpen && window.innerWidth >= 640) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "unset";
    }

    return () => {
      document.documentElement.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (index: number, value: string) => {
    setFormData((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  // Resetting form data to its original state
  const handleClose = () => {
    setFormData(rowData); // reset to original
    onClose();
  };

  //Saving function
  const handleSave = async () => {
    setShowConfirmation(false);
    setIsSaving(true);

    try {
      const response = await fetch("/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formData,
          updateData,
          rowIndex,
        }),
      });

      const result = await response.json();

      if (!response.ok)
        throw new Error(result.message || "Failed to save data");

      //Update sheet data, set Alert Message, and close modal immediately
      await updateSheetsData();

      // Show Alert Success Message
      setAlertInfo({
        showAlert: true,
        alertType: "success",
        alertMessage: result.message || "Record saved successfully",
      });

      // Close the modal
      handleClose();
    } catch (error) {
      let message = "Something went wrong";
      if (error instanceof Error) {
        message = error.message;
      }
      setAlertInfo({
        showAlert: true,
        alertType: "error",
        alertMessage: message,
      });
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Confirmation Dialogue */}

      {showConfirmation && (
        <ConfirmationDialog
          title="Confirm changes"
          message="Are you sure to want to save these changes?"
          onCancel={() => setShowConfirmation(false)}
          onConfirm={handleSave}
        />
      )}

      {isSaving && <SavingSpinner />}

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Fixed background overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="custom-blur absolute inset-0 bg-black/50"
          onClick={handleClose}
        />
        {/* Scrollable modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative z-10 mx-4 w-full max-w-3xl"
        >
          <div className="overflow-x-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-gray-900">
            {/* Modal Header - Fixed */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-900">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {updateData ? "Update Record" : "Add Record"}
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Record #{rowIndex}
                </p>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-slate-800"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="max-h-[calc(90vh-180px)] overflow-y-auto px-6 py-4 sm:max-h-[calc(90vh-120px)]">
              <div className="space-y-4">
                {headers.map((header, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-4 last:border-b-0 dark:border-slate-800"
                  >
                    <label className="block text-xs font-semibold tracking-wider text-gray-700 uppercase dark:text-gray-300">
                      {header}
                    </label>
                    <input
                      type="text"
                      value={formData[index] || ""}
                      disabled={index === 0}
                      onChange={(e) => handleChange(index, e.target.value)}
                      className={`my-2 w-full rounded-lg bg-gray-50 px-4 py-3 text-sm wrap-break-word text-gray-900 focus:border focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none disabled:cursor-not-allowed disabled:border disabled:border-gray-400 disabled:bg-gray-100 dark:bg-slate-800/50 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400/20 dark:disabled:border-gray-600 dark:disabled:bg-gray-800`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer - Fixed */}
            <div className="sticky bottom-0 border-t border-gray-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex justify-between">
                <button
                  onClick={() => setShowConfirmation(true)}
                  disabled={isSaving}
                  className="flex items-center gap-1.5 rounded-lg bg-gray-950 px-4 py-2 text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-gray-950 dark:hover:bg-slate-200"
                >
                  {updateData ? (
                    <>
                      <PencilLine className="h-4 w-4" />
                      Edit
                    </>
                  ) : (
                    <>
                      <Plus className="h-4 w-4" />
                      Add
                    </>
                  )}
                </button>
                <button
                  onClick={handleClose}
                  disabled={isSaving}
                  className="rounded-lg bg-gray-200 px-4 py-2 text-gray-900 transition-colors hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-800 dark:text-gray-100 dark:hover:bg-slate-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SheetFormModal;
