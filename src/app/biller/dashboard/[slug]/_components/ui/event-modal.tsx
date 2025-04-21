import { PatientEvent } from "../../types/types";

interface PatientModalProps {
  isOpen: boolean;
  onClose: () => void;
  patientEvent: PatientEvent | null;
  setEvent: (patient: PatientEvent | null) => void;
}

export default function EventModal({
  isOpen,
  onClose,
  patientEvent,
  setEvent,
}: PatientModalProps) {
  return (
    <div>
      {/* Event modal */}
      {patientEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setEvent(null)}
        >
          <div
            className="relative max-h-[80vh] w-[50vw] overflow-auto rounded-lg bg-white p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Back Arrow */}
            <button
              className="absolute left-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-200"
              onClick={() => setEvent(null)}
              aria-label="Back to Patient Modal"
            >
              ←
            </button>
            <h3 className="mb-4 pl-10 text-2xl font-bold">
              {patientEvent.type} Details
            </h3>
            {patientEvent.type === "Voice AI" ? (
              <>
                <p className="mb-2">
                  <strong>Summary:</strong> {patientEvent.summary}
                </p>
                <p>
                  <strong>Transcript:</strong> {patientEvent.transcript}
                </p>
              </>
            ) : (
              <p>{patientEvent.content}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
