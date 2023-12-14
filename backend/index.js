const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 4000;

const uri = "mongodb+srv://GIGA-CODER:Aditya.sakpal%40123@cluster0.yp08q4t.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(cors());

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
