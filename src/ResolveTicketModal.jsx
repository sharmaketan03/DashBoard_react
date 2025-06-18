
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const ResolveTicketModal = ({ isOpen, onClose }) => {
  const [comment, setComment] = useState("");
  const [notify, setNotify] = useState(false);

  if (!isOpen) return null;

  return (
 <div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex justify-center items-center z-50 p-4">

      <div className="bg-white rounded-md shadow-md w-full max-w-lg p-6 relative">

      <div className="flex items-center justify-between">
          <div>
          <h2 className="text-xl font-semibold mb-4">Resolve Ticket</h2>
        </div>
      
        <div>
          <RxCross2  className=" text-black text-3xl mb-3"
          onClick={onClose} />
        </div>
       
      </div>

        

        <label htmlFor="comments" className="block text-sm font-medium mb-1">
          Comments <span className="text-red-500">*</span>
        </label>

        <textarea
          id="comments"
          rows="4"
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <div className="flex items-start mt-2 text-sm text-gray-600">
          <span className="text-orange-500 text-lg mr-1">⚠</span>
          <p>
            Please note: The above comment will be public facing and seen by client
          </p>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <input
            type="checkbox"
            id="notify"
            checked={notify}
            onChange={() => setNotify(!notify)}
            className="w-4 h-4"
          />
          <label htmlFor="notify" className="text-sm">
            Send notification to client
          </label>
        </div>

        <div className="mt-6 flex justify-start gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => {
              alert("Ticket Resolved");
              onClose();
            }}
          >
            Resolve Ticket
          </button>
          <button
            className="text-gray-600 hover:underline"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResolveTicketModal;
