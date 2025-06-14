// compare_parfum.js

use("parfumDB");

db.sales.find({
    total: { $gt: 1500000 } // Cari transaksi lebih dari 1.5 juta
});