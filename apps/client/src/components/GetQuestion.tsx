import axios from "axios";
import { BASE_URL } from "../config";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";

export default function GetQuestion() {
  const { testType } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const date = searchParams.get("date");
  const sem = searchParams.get("sem");
  const year = searchParams.get("year");
  const setTypeA = searchParams.get("setTypeA");
  const [pdfName, setPdfName] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [showPdf, setShowPdf] = useState(false);


  const fetchPdf = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/get/${testType}?date=${date}&sem=${sem}&year=${year}&setTypeA=${setTypeA}`, {
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
    <div className="flex flex-col justify-center items-center p-40">
      <div className="flex flex-col justify-between rounded-lg space-y-5 p-4 border-4 h-[30vh] bg-white border-white w-80 sm:w-50 md:h-[50vh] w-100 lg:h-[50vh]">
        <input
          className="rounded-lg w-1/25 h-15 p-4 border-2 border-gray-700"
          type="text"
          value={pdfName}
          placeholder="Pdf Name"
          onChange={(e) => setPdfName(e.target.value)}
        />
        <div className="flex justify-between">
          {showPdf && (
            <a
              className="text-blue-600"
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={refreshData}
            >
              View PDF
            </a>
          )}
          <a
            className="text-red-700"
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
