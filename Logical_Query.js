// logical_parfum.js

use("parfumDB");

db.sales.find({
    $and: [
        { quantity: { $gte: 2 } },
        { product: "Chanel No.5" }
    ]
});