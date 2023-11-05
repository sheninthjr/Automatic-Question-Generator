import express from "express";
import cors from "cors";
import QuestionRouter  from './routes/QuestionRouter'
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/',QuestionRouter)

app.use(express.static("public"));
app.use("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})

const server = app.listen(3000, () => {
  console.log("Server is listenning on port 3000");
});
