import axios from "axios";
import { BASE_URL } from "../config";
import { useState, useEffect } from "react";

export default function GetQuestion() {
  const [pdfName, setPdfName] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [showPdf, setShowPdf] = useState(false);

  const fetchPdf = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/get/IA1`, {
        responseType: "blob",
      });
      const blob = new Blob([res.data], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(blob);
      setPdfUrl(pdfUrl);
      setShowPdf(true);
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  useEffect(() => {
    fetchPdf();
  }, []);

  const refreshData = () => {
    fetchPdf();
  };

  return (
    <div className="flex flex-col justify-center items-center p-40 bg-gray-700">
      <div className="flex flex-col justify-between space-y-5 p-4 border-4 h-[30vh] bg-blue-300 border-blue-300">
        <input
          className="rounded-lg w-1/25 h-15 p-4"
          type="text"
          value={pdfName}
          placeholder="Pdf Name"
          onChange={(e) => setPdfName(e.target.value)}
        />
        <div className="flex justify-between">
          {showPdf && (
            <a
              className="text-white"
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={refreshData}
            >
              View PDF
            </a>
          )}
          <a
            className="text-white"
            href={pdfUrl}
            download={`${pdfName}.pdf`}
            onClick={refreshData}
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
}
