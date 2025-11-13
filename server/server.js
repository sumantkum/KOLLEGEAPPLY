import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import universities from './data.js';
import fetch from "node-fetch"; 

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/api/send-lead", async (req, res) => {
  try {
    const { fullName, email, phone, state, course, year } = req.body;

    console.log(" New lead received:", { fullName, email, phone, state, course, year });

    await fetch("https://eo5rx28svxcmz55.m.pipedream.net", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, phone, state, course, year }),
    });

    res.status(200).json({ success: true, message: "Lead received successfully!" });
  } catch (error) {
    console.error("Error handling lead:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Default route (optional)
app.get("/", (req, res) => {
  res.send("Server running on port 3000 ✅");
});


// get all universities from here API call
app.get('/api/universities', (req, res) =>{
    res.json({
        total: universities.length,
        universities,
    });
});


// fetch details by university ID
app.get('/api/universities/:id', (req, res)=>{
    
    const id = parseInt(req.params.id);
    const uni = universities.find((u) => u.id === id)

    if(!uni) {
        return res.status(404).json({
            error: "University not found"
        });
    }
    res.json(uni);
});


app.get('/api/fees/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const uni = universities.find((u) => u.id === id);
    if(!uni) {
        return res.status(404).json({
            error: "University not found"
        })
    }
    res.json({
        name: uni.name,
        fees: uni.fees,
    });
});




app.get('/about', (req, res)=>{
    res.send('hello this is about page')
})


app.listen(PORT, ()=>{
    console.log(`server is runing on port: http://localhost:${PORT}`);
})

