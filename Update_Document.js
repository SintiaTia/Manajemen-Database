// update_parfum.js

use("parfumDB");

db.sales.updateOne(
    { customer: "Siti" },
    { $set: { quantity: 3, total: 2550000 } }
);