const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 4000;

const uri = "mongodb://localhost:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(cors());

app.post("/create",async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const worksCollection = client.db("Hire_Net").collection("Works");
    const create = await worksCollection.insertMany({email:email,password:password});
    
    res.send(create);
});

app.get("/read",async(req,res)=>{
    const create = await worksCollection.create();

    await email.create({email:email});
    res.send(200);
});

app.get("/update",(req,res)=>{
    res.send('update');
});

app.get("/delete",(req,res)=>{
    res.send('delete');
});

app.post('/getSearchResults', async (req, res) => {
  try {
    console.log("reached")
    await client.connect();
    
    // Access the Works collection
    const worksCollection = client.db("Hire_Net").collection("Works");

    // Fetch records from the Works collection
    const worksData = await worksCollection.find({}).toArray();

    // Send the fetched data to the frontend
    res.json(worksData);
  } catch (error) {
    console.error('Error fetching records:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.close();
  }
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});