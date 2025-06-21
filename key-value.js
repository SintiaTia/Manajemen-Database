const prompt = require('prompt-sync')();

const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/"; 

async function main() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db("db_key_value");
        const collection = db.collection("data");

        const jumlah = 5;
        for (let i = 0; i < jumlah; i++) {
            const key = prompt(`Masukkan key ke-${i + 1}: `);
            const value = prompt(`Masukkan value untuk ${key}: `);
            await collection.insertOne({ key: key, value: value });
        }

        const allData = await collection.find().toArray();
        console.log("\nData yang telah dimasukkan:");
        console.table(allData);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
