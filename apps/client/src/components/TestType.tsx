
import { TypePost } from "ui";
import { Link } from "react-router-dom";

export default function TestType() {
  return (
    <>
      <TypePost
        onClick={async (
          date: string,
          type: string,
          year: string,
          sem: string,
          setTypeA:string
        ) => {
          const urlData = {
            date,
            type,
            year,
            sem,
          };
          return (
            <Link to={{pathname:`/get/${urlData.type}`,search:`?date=${date}&sem=${sem}&year=${year}&setTypeA=${setTypeA}`}} ></Link>
          ) 
        }}
      />
    </>
  );
}
