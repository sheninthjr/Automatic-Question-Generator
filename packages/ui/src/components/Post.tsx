import { useState } from "react";

export function Post(props: {
  onClick: (
    parta1: string,
    parta1qtype: string,
    parta1co: string,
    parta2: string,
    parta2qtype: string,
    parta2co: string,
    partb1: string,
    partb1qtype: string,
    partb1co: string,
    partb2: string,
    partb2qtype: string,
    partb2co: string,
    partc1: string,
    partc1qtype: string,
    partc1co: string,
    partc2: string,
    partc2qtype: string,
    partc2co: string
  ) => void;
}) {
  const [parta1, setParta1] = useState("");
  const [parta1qtype, setParta1qtype] = useState("Understand");
  const [parta1co, setParta1co] = useState("CO1");
  const [parta2, setParta2] = useState("");
  const [parta2qtype, setParta2qtype] = useState("Understand");
  const [parta2co, setParta2co] = useState("CO1");
  const [partb1, setPartb1] = useState("");
  const [partb1qtype, setPartb1qtype] = useState("Understand");
  const [partb1co, setPartb1co] = useState("CO1");
  const [partb2, setPartb2] = useState("");
  const [partb2qtype, setPartb2qtype] = useState("Understand");
  const [partb2co, setPartb2co] = useState("CO1");
  const [partc1, setPartc1] = useState("");
  const [partc1qtype, setPartc1qtype] = useState("Understand");
  const [partc1co, setPartc1co] = useState("CO1");
  const [partc2, setPartc2] = useState("");
  const [partc2qtype, setPartc2qtype] = useState("Understand");
  const [partc2co, setPartc2co] = useState("CO1");

  return (
    <div className="space-y-4 p-5">
      <div className="flex justify-between items-center space-x-2">
        <input
          className="w-3/4 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-red-200 hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART A 1"
          value={parta1}
          onChange={(e) => setParta1(e.target.value)}
        />
        <div className="flex justify-around space-x-2">
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-blue-800">Type:</label>
            <select
              name="qtype"
              id="type"
              value={parta1qtype}
              className="rounded-lg h-8 bg-gray-500 text-white"
              onChange={(e) => setParta1qtype(e.target.value)}
            >
              <option value="Understand">Understand</option>
              <option value="Analyze">Analyze</option>
              <option value="Remember">Remember</option>
              <option value="Create">Create</option>
              <option value="Apply">Apply</option>
            </select>
          </div>
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-blue-800">Cource Outcome:</label>
            <select
              name="cotype"
              id="cotype"
              value={parta1co}
              className="rounded-lg h-8 w-15 bg-gray-500 text-white"
              onChange={(e) => setParta1co(e.target.value)}
            >
              <option value="CO1">CO1</option>
              <option value="CO2">CO2</option>
              <option value="CO3">CO3</option>
              <option value="CO4">CO4</option>
              <option value="CO5">CO5</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <input
          className="w-3/4 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-red-200 hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART A 2"
          value={parta2}
          onChange={(e) => setParta2(e.target.value)}
        />
        <div className="flex justify-around space-x-2">
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-blue-800">Type:</label>
            <select
              name="qtype"
              id="type"
              value={parta2qtype}
              className="rounded-lg h-8 bg-gray-500 text-white"
              onChange={(e) => setParta2qtype(e.target.value)}
            >
              <option value="Understand">Understand</option>
              <option value="Analyze">Analyze</option>
              <option value="Remember">Remember</option>
              <option value="Create">Create</option>
              <option value="Apply">Apply</option>
            </select>
          </div>
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-blue-800">Cource Outcome:</label>
            <select
              name="cotype"
              id="cotype"
              value={parta2co}
              className="rounded-lg h-8 w-15 bg-gray-500 text-white"
              onChange={(e) => setParta2co(e.target.value)}
            >
              <option value="CO1">CO1</option>
              <option value="CO2">CO2</option>
              <option value="CO3">CO3</option>
              <option value="CO4">CO4</option>
              <option value="CO5">CO5</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <input
          className="w-3/4 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-red-200 hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART B 1"
          value={partb1}
          onChange={(e) => setPartb1(e.target.value)}
        />
        <div className="flex justify-around space-x-2">
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-blue-800">Type:</label>
            <select
              name="qtype"
              id="type"
              value={partb1qtype}
              className="rounded-lg h-8 bg-gray-500 text-white"
              onChange={(e) => setPartb1qtype(e.target.value)}
            >
              <option value="Understand">Understand</option>
              <option value="Analyze">Analyze</option>
              <option value="Remember">Remember</option>
              <option value="Create">Create</option>
              <option value="Apply">Apply</option>
            </select>
          </div>
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-blue-800">Cource Outcome:</label>
            <select
              name="cotype"
              id="cotype"
              value={partb1co}
              className="rounded-lg h-8 w-15 bg-gray-500 text-white"
              onChange={(e) => setPartb1co(e.target.value)}
            >
              <option value="CO1">CO1</option>
              <option value="CO2">CO2</option>
              <option value="CO3">CO3</option>
              <option value="CO4">CO4</option>
              <option value="CO5">CO5</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <input
          className="w-3/4 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-red-200 hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART B 2"
          value={partb2}
          onChange={(e) => setPartb2(e.target.value)}
        />
        <div className="flex justify-around space-x-2">
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-blue-800">Type:</label>
            <select
              name="qtype"
              id="qtype"
              value={partb2qtype}
              className="rounded-lg h-8 bg-gray-500 text-white"
              onChange={(e) => setPartb2qtype(e.target.value)}
            >
              <option value="Understand">Understand</option>
              <option value="Analyze">Analyze</option>
              <option value="Remember">Remember</option>
              <option value="Create">Create</option>
              <option value="Apply">Apply</option>
            </select>
          </div>
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-blue-800">Cource Outcome:</label>
            <select
              name="cotype"
              id="cotype"
              value={partb2co}
              className="rounded-lg h-8 w-15 bg-gray-500 text-white"
              onChange={(e) => setPartb2co(e.target.value)}
            >
              <option value="CO1">CO1</option>
              <option value="CO2">CO2</option>
              <option value="CO3">CO3</option>
              <option value="CO4">CO4</option>
              <option value="CO5">CO5</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <input
          className="w-3/4 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-red-200 hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART C 1"
          value={partc1}
          onChange={(e) => setPartc1(e.target.value)}
        />
        <div className="flex justify-around space-x-2">
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-blue-800">Type:</label>
            <select
              name="qtype"
              id="type"
              value={partc1qtype}
              className="rounded-lg h-8 bg-gray-500 text-white"
              onChange={(e) => setPartc1qtype(e.target.value)}
            >
              <option value="Understand">Understand</option>
              <option value="Analyze">Analyze</option>
              <option value="Remember">Remember</option>
              <option value="Create">Create</option>
              <option value="Apply">Apply</option>
            </select>
          </div>
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-blue-800">Cource Outcome:</label>
            <select
              name="cotype"
              id="cotype"
              value={partc1co}
              className="rounded-lg h-8 w-15 bg-gray-500 text-white"
              onChange={(e) => setPartc1co(e.target.value)}
            >
              <option value="CO1">CO1</option>
              <option value="CO2">CO2</option>
              <option value="CO3">CO3</option>
              <option value="CO4">CO4</option>
              <option value="CO5">CO5</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <input
          className="w-3/4 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-red-200 hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART C 2"
          value={partc2}
          onChange={(e) => setPartc2(e.target.value)}
        />
        <div className="flex justify-around space-x-2">
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-blue-800">Type:</label>
            <select
              name="qtype"
              id="type"
              value={partc2qtype}
              className="rounded-lg h-8 bg-gray-500 text-white"
              onChange={(e) => setPartc2qtype(e.target.value)}
            >
              <option value="Understand">Understand</option>
              <option value="Analyze">Analyze</option>
              <option value="Remember">Remember</option>
              <option value="Create">Create</option>
              <option value="Apply">Apply</option>
            </select>
          </div>
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-blue-800">Cource Outcome:</label>
            <select
              name="qtype"
              id="type"
              value={partc2co}
              className="rounded-lg h-8 w-15 bg-gray-500 text-white"
              onChange={(e) => setPartc2co(e.target.value)}
            >
              <option value="CO1">CO1</option>
              <option value="CO2">CO2</option>
              <option value="CO3">CO3</option>
              <option value="CO4">CO4</option>
              <option value="CO5">CO5</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className=" flex justify-end items-center align w-15 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-red-200 hover:border-blue-500 focus:outline-none focus:shadow-outline"
          onClick={async () => {
            props.onClick(
              parta1,
              parta1qtype,
              parta1co,
              parta2,
              parta2qtype,
              parta2co,
              partb1,
              partb1qtype,
              partb1co,
              partb2,
              partb2qtype,
              partb2co,
              partc1,
              partc1qtype,
              partc1co,
              partc2,
              partc2qtype,
              partc2co
            );
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
