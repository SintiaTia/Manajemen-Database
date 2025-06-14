// bulk_parfum.js

use("parfumDB");

db.sales.bulkWrite([
    {
        insertOne: {
            document: {
                product: "Gucci Guilty",
                quantity: 2,
                price: 750000,
                total: 1500000,
                customer: "Rina",
                date: new Date()
            }
        }
    },
    {
        updateOne: {
            filter: { customer: "Budi" },
            update: { $set: { price: 900000, total: 900000 } }
        }
    },
    {
        deleteOne: {
            filter: { customer: "Andi" }
        }
    }
]);