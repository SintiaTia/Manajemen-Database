
const prompt = require('prompt-sync')();
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function main() {
    try {
        await client.connect();
        const db = client.db("db_wide_column");
        const collection = db.collection("students");

        const jumlah = 5;
        console.log("=== INPUT DATA MODEL WIDE-COLUMN ===");
        for (let i = 0; i < jumlah; i++) {
            console.log(`\nData ke-${i + 1}`);
            const judul_buku = prompt("judul buku: ");
            const pengarang = prompt("pengarang: ");
            const tahun_terbit = prompt("tahun terbit: ");
            const kategori = prompt("kategori: ");
            const jumlah_halaman = prompt("jumlah halaman: ");

            await collection.insertOne({
                judul_buku: judul_buku,
                pengarang: pengarang,
                tahun_terbit: tahun_terbit,
                kategori: kategori,
                jumlah_halaman: jumlah_halaman
            });
        }

        const hasil = await collection.find().toArray();
        console.log("\nData berhasil dimasukkan:");
        console.table(hasil);
    } catch (err) {
        console.error("Terjadi kesalahan:", err);
    } finally {
        await client.close();
    }
}

main();
