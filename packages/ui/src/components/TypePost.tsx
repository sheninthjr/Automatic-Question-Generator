import { useState } from "react";

export function TypePost(props: {
  onClick: (date: string, type: string, year: string, sem: string,setTypeA:string) => void;
}) {
  const [date, setDate] = useState("");
  const [testType, setTestType] = useState("IA1");
  const [year, setYear] = useState("I Year");
  const [sem, setSem] = useState("I Sem");
  const [setTypeA,setSetTypeA] = useState("Set A")
  return (
    <>
      <div className="flex flex-col justify-center items-center p-40">
        <div className="flex flex-col rounded-lg space-y-5 p-4 border-4 bg-white border-white w-80 w-100 lg:h-[55vh]">
          <input
            className="rounded-lg w-1/25 h-15 p-4 border-2 border-gray-700"
            type="date"
            name="Date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <select
            className="rounded-lg border-2 border-gray-700 h-15 p-4 bg-white"
            name="Type of Exam"
            value={testType}
            onChange={(e) => setTestType(e.target.value)}
          >
            <option value="IA1">IA1</option>
            <option value="IA2">IA2</option>
            <option value="IA3">IA3</option>
            <option value="MODEL">MODEL</option>
          </select>
          <select
            className="rounded-lg border-2 border-gray-700 h-15 p-4 bg-white"
            name="Year"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
            }}
          >
            <option value="I Year">I Year</option>
            <option value="II Year">II Year</option>
            <option value="III Year">III Year</option>
            <option value="IV Year">IV Year</option>
          </select>
          <select
            className="rounded-lg border-2 border-gray-700 h-15 p-4 bg-white"
            name="Sem"
            value={sem}
            onChange={(e) => {
              setSem(e.target.value);
            }}
          >
            <option value="I Sem">I Sem</option>
            <option value="II Sem">II Sem</option>
            <option value="III Sem">III Sem</option>
            <option value="IV Sem">IV Sem</option>
            <option value="V Sem">V Sem</option>
            <option value="VI Sem">VI Sem</option>
            <option value="VII Sem">VII Sem</option>
            <option value="VIII Sem">VIII Sem</option>
          </select>
          <select
            className="rounded-lg border-2 border-gray-700 h-15 p-4 bg-white"
            name="Type of Exam"
            value={setTypeA}
            onChange={(e) => setSetTypeA(e.target.value)}
          >
            <option value="Set A">Set A</option>
            <option value="Set B">Set B</option>
          </select>
          <div className="flex justify-end">
            <button
              className="flex justify-center items-center rounded-lg border-2 border-red-600 h-5 p-4 bg-white"
              onClick={async () => {
                props.onClick(date, testType, year, sem,setTypeA);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
