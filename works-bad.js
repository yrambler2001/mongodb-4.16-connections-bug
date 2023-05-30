const { MongoClient, ServerApiVersion } = require("mongodb");
// Replace the placeholder with your Atlas connection string
const uri = "mongodb+srv://yrambler2001:yUwctM8fD9tRvPby@cluster0.x3ioj29.mongodb.net/?replicaSet=atlas-s6fpvx-shard-0&readPreference=primary&srvServiceName=mongodb&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1&maxPoolSize=100&minPoolSize=100";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}
);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    client.db("admin").command({ ping: 1 });
    client.db("admin").command({ ping: 1 });
    client.db("admin").command({ ping: 1 });
    client.db("admin").command({ ping: 1 });
    client.db("admin").command({ ping: 1 });
    client.db("admin").command({ ping: 1 });
    client.db("admin").command({ ping: 1 });
    client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

