// aggregate_parfum.js

use("parfumDB");

db.sales.aggregate([
    {
        $group: {
            _id: "$product",
            totalSales: { $sum: "$total" },
            count: { $sum: 1 }
        }
    }
]);