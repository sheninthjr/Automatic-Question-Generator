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
        ) => {
          const allQuestion = {
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
            partc2co,
          };
          console.log(allQuestion);
          const res = await axios.post(`${BASE_URL}/post/2`, allQuestion, {
            headers: { "Content-Type": "application/json" },
          });
          const data = res.data;
          console.log(data);
        }}
      />
    </>
  );
}
