// insert_parfum.js

use("parfumDB");

db.sales.insertOne({
    product: "Chanel No.5",
    quantity: 2,
    price: 850000,
    total: 1700000,
    customer: "Siti",
    date: new Date()
});

db.sales.insertOne({
    product: "Dior Sauvage",
    quantity: 1,
    price: 950000,
    total: 950000,
    customer: "Budi",
    date: new Date()
});

db.sales.insertOne({
    product: "Versace Eau Dylan",
    quantity: 3,
    price: 600000,
    total: 1800000,
    customer: "Andi",
    date: new Date()
});