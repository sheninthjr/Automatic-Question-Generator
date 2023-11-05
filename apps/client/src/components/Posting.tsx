import { Post } from "ui";
import axios from "axios";
import { BASE_URL } from "../config";

export default function PostingQuestion() {
  return (
    <>
      <Post
        onClick={async (
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
        ) => {
          const allQuestion = {
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
            partc2bco,
          };
          console.log(allQuestion);
          const res = await axios.post(`${BASE_URL}/post/1`, allQuestion, {
            headers: { "Content-Type": "application/json" },
          });
          const data = res.data;
          console.log(data);
        }}
      />
    </>
  );
}
