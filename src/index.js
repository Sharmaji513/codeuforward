import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hello guys welcome to CUF");
});


// app.use('api/v1/auth' , authRotes);



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
