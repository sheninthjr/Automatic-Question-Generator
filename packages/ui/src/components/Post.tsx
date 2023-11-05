import { useState } from "react";

export function Post(props: {
  onClick: (
    parta1: string,
    parta1qtype: string,
    parta1co: string,
    parta2: string,
    parta2qtype: string,
    parta2co: string,
    partb1a: string,
    partb1aqtype: string,
    partb1aco: string,
    partb1b: string,
    partb1bqtype: string,
    partb1bco: string,
    partb2a: string,
    partb2aqtype: string,
    partb2aco: string,
    partb2b: string,
    partb2bqtype: string,
    partb2bco: string,
    partc1a: string,
    partc1aqtype: string,
    partc1aco: string,
    partc1b: string,
    partc1bqtype: string,
    partc1bco: string,
    partc2a: string,
    partc2aqtype: string,
    partc2aco: string,
    partc2b: string,
    partc2bqtype: string,
    partc2bco: string
  ) => void;
}) {
  const [parta1, setParta1] = useState("");
  const [parta1qtype, setParta1qtype] = useState("Understand");
  const [parta1co, setParta1co] = useState("CO1");
  const [parta2, setParta2] = useState("");
  const [parta2qtype, setParta2qtype] = useState("Understand");
  const [parta2co, setParta2co] = useState("CO1");
  const [partb1a, setPartb1a] = useState("");
  const [partb1aqtype, setPartb1aqtype] = useState("Understand");
  const [partb1aco, setPartb1aco] = useState("CO1");
  const [partb1b, setPartb1b] = useState("");
  const [partb1bqtype, setPartb1bqtype] = useState("Understand");
  const [partb1bco, setPartb1bco] = useState("CO1");
  const [partb2a, setPartb2a] = useState("");
  const [partb2aqtype, setPartb2aqtype] = useState("Understand");
  const [partb2aco, setPartb2aco] = useState("CO1");
  const [partb2b, setPartb2b] = useState("");
  const [partb2bqtype, setPartb2bqtype] = useState("Understand");
  const [partb2bco, setPartb2bco] = useState("CO1");
  const [partc1a, setPartc1a] = useState("");
  const [partc1aqtype, setPartc1aqtype] = useState("Understand");
  const [partc1aco, setPartc1aco] = useState("CO1");
  const [partc1b, setPartc1b] = useState("");
  const [partc1bqtype, setPartc1bqtype] = useState("Understand");
  const [partc1bco, setPartc1bco] = useState("CO1");
  const [partc2a, setPartc2a] = useState("");
  const [partc2aqtype, setPartc2aqtype] = useState("Understand");
  const [partc2aco, setPartc2aco] = useState("CO1");
  const [partc2b, setPartc2b] = useState("");
  const [partc2bqtype, setPartc2bqtype] = useState("Understand");
  const [partc2bco, setPartc2bco] = useState("CO1");

  return (
    <div className="space-y-4 pt-35 m-10">
      <div className="flex justify-between items-center space-x-2">
        <input
          className="w-3/4 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-box hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART A 1"
          value={parta1}
          onChange={(e) => setParta1(e.target.value)}
        />
        <div className="flex justify-around space-x-2 items-center">
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Type:</label>
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
            <label className="text-lg text-white">Cource Outcome:</label>
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
          className="w-3/4 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-box hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART A 2"
          value={parta2}
          onChange={(e) => setParta2(e.target.value)}
        />
        <div className="flex justify-around space-x-2 items-center">
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Type:</label>
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
            <label className="text-lg text-white">Cource Outcome:</label>
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
          className="w-3/4 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-box hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART B 1 a)"
          value={partb1a}
          onChange={(e) => setPartb1a(e.target.value)}
        />
        <div className="flex justify-around space-x-2 items-center">
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Type:</label>
            <select
              name="qtype"
              id="type"
              value={partb1aqtype}
              className="rounded-lg h-8 bg-gray-500 text-white"
              onChange={(e) => setPartb1aqtype(e.target.value)}
            >
              <option value="Understand">Understand</option>
              <option value="Analyze">Analyze</option>
              <option value="Remember">Remember</option>
              <option value="Create">Create</option>
              <option value="Apply">Apply</option>
            </select>
          </div>
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Cource Outcome:</label>
            <select
              name="cotype"
              id="cotype"
              value={partb1aco}
              className="rounded-lg h-8 w-15 bg-gray-500 text-white"
              onChange={(e) => setPartb1aco(e.target.value)}
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
          className="w-3/4 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-box hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART B 1 b)"
          value={partb1b}
          onChange={(e) => setPartb1b(e.target.value)}
        />
        <div className="flex justify-around space-x-2 items-center">
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Type:</label>
            <select
              name="qtype"
              id="type"
              value={partb1bqtype}
              className="rounded-lg h-8 bg-gray-500 text-white"
              onChange={(e) => setPartb1bqtype(e.target.value)}
            >
              <option value="Understand">Understand</option>
              <option value="Analyze">Analyze</option>
              <option value="Remember">Remember</option>
              <option value="Create">Create</option>
              <option value="Apply">Apply</option>
            </select>
          </div>
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Cource Outcome:</label>
            <select
              name="cotype"
              id="cotype"
              value={partb1bco}
              className="rounded-lg h-8 w-15 bg-gray-500 text-white"
              onChange={(e) => setPartb1bco(e.target.value)}
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
          className="w-3/4 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-box hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART B 2 a)"
          value={partb2a}
          onChange={(e) => setPartb2a(e.target.value)}
        />
        <div className="flex justify-around space-x-2 items-center">
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Type:</label>
            <select
              name="qtype"
              id="qtype"
              value={partb2aqtype}
              className="rounded-lg h-8 bg-gray-500 text-white"
              onChange={(e) => setPartb2aqtype(e.target.value)}
            >
              <option value="Understand">Understand</option>
              <option value="Analyze">Analyze</option>
              <option value="Remember">Remember</option>
              <option value="Create">Create</option>
              <option value="Apply">Apply</option>
            </select>
          </div>
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Cource Outcome:</label>
            <select
              name="cotype"
              id="cotype"
              value={partb2aco}
              className="rounded-lg h-8 w-15 bg-gray-500 text-white"
              onChange={(e) => setPartb2aco(e.target.value)}
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
          className="w-3/4 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-box hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART B 2 b)"
          value={partb2b}
          onChange={(e) => setPartb2b(e.target.value)}
        />
        <div className="flex justify-around space-x-2 items-center">
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Type:</label>
            <select
              name="qtype"
              id="qtype"
              value={partb2bqtype}
              className="rounded-lg h-8 bg-gray-500 text-white"
              onChange={(e) => setPartb2bqtype(e.target.value)}
            >
              <option value="Understand">Understand</option>
              <option value="Analyze">Analyze</option>
              <option value="Remember">Remember</option>
              <option value="Create">Create</option>
              <option value="Apply">Apply</option>
            </select>
          </div>
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Cource Outcome:</label>
            <select
              name="cotype"
              id="cotype"
              value={partb2bco}
              className="rounded-lg h-8 w-15 bg-gray-500 text-white"
              onChange={(e) => setPartb2bco(e.target.value)}
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
          className="w-3/4 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-box hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART C 1 a)"
          value={partc1a}
          onChange={(e) => setPartc1a(e.target.value)}
        />
        <div className="flex justify-around space-x-2 items-center">
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Type:</label>
            <select
              name="qtype"
              id="type"
              value={partc1aqtype}
              className="rounded-lg h-8 bg-gray-500 text-white"
              onChange={(e) => setPartc1aqtype(e.target.value)}
            >
              <option value="Understand">Understand</option>
              <option value="Analyze">Analyze</option>
              <option value="Remember">Remember</option>
              <option value="Create">Create</option>
              <option value="Apply">Apply</option>
            </select>
          </div>
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Cource Outcome:</label>
            <select
              name="cotype"
              id="cotype"
              value={partc1aco}
              className="rounded-lg h-8 w-15 bg-gray-500 text-white"
              onChange={(e) => setPartc1aco(e.target.value)}
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
          className="w-3/4 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-box hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART C 1 b)"
          value={partc1b}
          onChange={(e) => setPartc1b(e.target.value)}
        />
        <div className="flex justify-around space-x-2 items-center">
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Type:</label>
            <select
              name="qtype"
              id="type"
              value={partc1bqtype}
              className="rounded-lg h-8 bg-gray-500 text-white"
              onChange={(e) => setPartc1bqtype(e.target.value)}
            >
              <option value="Understand">Understand</option>
              <option value="Analyze">Analyze</option>
              <option value="Remember">Remember</option>
              <option value="Create">Create</option>
              <option value="Apply">Apply</option>
            </select>
          </div>
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Cource Outcome:</label>
            <select
              name="cotype"
              id="cotype"
              value={partc1bco}
              className="rounded-lg h-8 w-15 bg-gray-500 text-white"
              onChange={(e) => setPartc1bco(e.target.value)}
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
          className="w-3/4 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-box hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART C 2 a)"
          value={partc2a}
          onChange={(e) => setPartc2a(e.target.value)}
        />
        <div className="flex justify-around space-x-2 items-center">
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Type:</label>
            <select
              name="qtype"
              id="type"
              value={partc2aqtype}
              className="rounded-lg h-8 bg-gray-500 text-white"
              onChange={(e) => setPartc2aqtype(e.target.value)}
            >
              <option value="Understand">Understand</option>
              <option value="Analyze">Analyze</option>
              <option value="Remember">Remember</option>
              <option value="Create">Create</option>
              <option value="Apply">Apply</option>
            </select>
          </div>
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Cource Outcome:</label>
            <select
              name="qtype"
              id="type"
              value={partc2aco}
              className="rounded-lg h-8 w-15 bg-gray-500 text-white"
              onChange={(e) => setPartc2aco(e.target.value)}
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
          className="w-3/4 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-box hover:border-blue-500 focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="PART C 2 b)"
          value={partc2b}
          onChange={(e) => setPartc2b(e.target.value)}
        />
        <div className="flex justify-around space-x-2 items-center">
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Type:</label>
            <select
              name="qtype"
              id="type"
              value={partc2bqtype}
              className="rounded-lg h-8 bg-gray-500 text-white"
              onChange={(e) => setPartc2bqtype(e.target.value)}
            >
              <option value="Understand">Understand</option>
              <option value="Analyze">Analyze</option>
              <option value="Remember">Remember</option>
              <option value="Create">Create</option>
              <option value="Apply">Apply</option>
            </select>
          </div>
          <div className="flex justify-between space-x-2">
            <label className="text-lg text-white">Cource Outcome:</label>
            <select
              name="qtype"
              id="type"
              value={partc2bco}
              className="rounded-lg h-8 w-15 bg-gray-500 text-white"
              onChange={(e) => setPartc2bco(e.target.value)}
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
      <div className="flex justify-end ">
        <button
          type="submit"
          className=" flex justify-end items-center align w-15 h-10 text-lg bg-gray-50 rounded-lg p-6 border-2 border-box hover:border-blue-500 focus:outline-none focus:shadow-outline"
          onClick={async () => {
            props.onClick(
              parta1,
              parta1qtype,
              parta1co,
              parta2,
              parta2qtype,
              parta2co,
              partb1a,
              partb1aqtype,
              partb1aco,
              partb1b,
              partb1bqtype,
              partb1bco,
              partb2a,
              partb2aqtype,
              partb2aco,
              partb2b,
              partb2bqtype,
              partb2bco,
              partc1a,
              partc1aqtype,
              partc1aco,
              partc1b,
              partc1bqtype,
              partc1bco,
              partc2a,
              partc2aqtype,
              partc2aco,
              partc2b,
              partc2bqtype,
              partc2bco
            );
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
