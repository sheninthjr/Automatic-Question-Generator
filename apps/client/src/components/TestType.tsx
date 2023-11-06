
import { TypePost } from "ui";
import { useNavigate } from "react-router-dom";

export default function TestType() {
  const navigate = useNavigate()
  return (
    <>
      <TypePost
        onClick={async (
          date: string,
          testType: string,
          year: string,
          sem: string,
          setTypeA:string
        ) => {
          const urlData = {
            date,
            testType,
            year,
            sem,
            setTypeA
          };
          if(urlData.testType){
            navigate(`/get/${testType}?date=${date}&sem=${sem}&year=${year}&setTypeA=${setTypeA}`)
          }
        }}
      />
    </>
  );
}
