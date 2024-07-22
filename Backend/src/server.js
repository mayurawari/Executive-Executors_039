import express from "express";
import { config } from "dotenv";
import connecttodb from "./configs/db.js";
import authRoutes from "./routes/authroute.js";
import bodyParser from "body-parser";

config();
app.use(cors({origin:process.env.FRONTEND_URL,credentials: true}));
const app = express();
const port = process.env.PORT || 8080;
const url = process.env.DB_URL;

app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("This is the home route");
});

app.listen(port, async () => {
    try {
        await connecttodb(url);
        console.log(`Server running on http://localhost:${port}`);
    } catch (error) {
        console.log(error);
    }
});
