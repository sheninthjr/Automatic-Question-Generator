import { Post } from "ui";
import axios from "axios";
import { BASE_URL } from "../config";

export default function PostingQuestion() {
  return (
    <>
      <Post
        onClick={async(
          parta1:string,
          parta2:string,
          partb1:string,
          partb2:string,
          partc1:string,
          partc2:string,
          qtype:string
        ) => {
          const allQuestion = {
            parta1,
            parta2,
            partb1,
            partb2,
            partc1,
            partc2,
            qtype,
          };
          const res = await axios.post(`${BASE_URL}/post/2`, {
            allQuestion,
          });
          console.log(res.data);
        }}
      />
    </>
  );
}
