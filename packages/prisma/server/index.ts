import express from "express";
import cors from "cors";
import QuestionRouter  from './routes/QuestionRouter'


const app = express();
app.use(cors());
app.use(express.json());
app.use('/',QuestionRouter)



const server = app.listen(3000, () => {
  console.log("Server is listenning on port 3000");
});
