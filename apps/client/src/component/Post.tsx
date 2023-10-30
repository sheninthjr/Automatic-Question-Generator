import axios from "axios";
import { useState } from "react";

export default function Post() {
  const [parta1, setParta1] = useState("");
  const [parta2, setParta2] = useState("");
  const [partb1, setPartb1] = useState("");
  const [partb2, setPartb2] = useState("");
  const [partc1, setPartc1] = useState("");
  const [partc2, setPartc2] = useState("");
  const [qtype, setQType] = useState("Understand");
  const addQuestion = async () => {
    const res = await axios.post("http://localhost:3000/post/3", {
      parta1,
      parta2,
      partb1,
      partb2,
      partc1,
      partc2,
      qtype,
    });
    console.log(res.data);
  };
  return (
    <div className="space-y-4">
      <div>
        <input
          className="w-full h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-red-200 hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART A 1"
          value={parta1}
          onChange={(e) => setParta1(e.target.value)}
        />
      </div>
      <div>
        <input
          className="w-full h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-red-200 hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART A 2"
          value={parta2}
          onChange={(e) => setParta2(e.target.value)}
        />
      </div>
      <div>
        <input
          className="w-full h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-red-200 hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART B 1"
          value={partb1}
          onChange={(e) => setPartb1(e.target.value)}
        />
      </div>
      <div>
        <input
          className="w-full h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-red-200 hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART B 2"
          value={partb2}
          onChange={(e) => setPartb2(e.target.value)}
        />
      </div>
      <div>
        <input
          className="w-full h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-red-200 hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART C 1"
          value={partc1}
          onChange={(e) => setPartc1(e.target.value)}
        />
      </div>
      <div>
        <input
          className="w-full h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-red-200 hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART C 2"
          value={partc2}
          onChange={(e) => setPartc2(e.target.value)}
        />
      </div>
      <div className="flex justify-between">
        <label className="text-lg text-blue-800">Type:</label>
        <select
          name="qtype"
          id="type"
          value={qtype}
          className="rounded-lg bg-blue-500 text-white"
          onChange={(e) => setQType(e.target.value)}
        >
          <option value="Understand">Understand</option>
          <option value="Analyze">Analyze</option>
        </select>
      </div>
      <button
        type="submit"
        className=" flex justify-center items-center align w-full h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-red-200 hover:border-blue-500 focus:outline-none focus:shadow-outline"
        onClick={addQuestion}
      >
        Submit
      </button>
    </div>
  );
}
