import express from "express"
import cors from "cors"

const app = express();
const port = 3000;

// Enable CORS (modify if needed)
app.use(cors());

// Optional: Parse JSON data in request body
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  const { username, password } = req.body || {}; // Handle empty body gracefully
  console.log(username, password);
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});