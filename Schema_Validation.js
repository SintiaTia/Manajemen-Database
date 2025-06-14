// validate_parfum.js

use("parfumDB");

db.createCollection("validated_sales", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["product", "quantity", "price", "total", "customer"],
            properties: {
                product: {
                    bsonType: "string",
                    description: "Nama parfum harus string"
                },
                quantity: {
                    bsonType: "int",
                    minimum: 1,
                    maximum: 10,
                    description: "Jumlah harus antara 1-10"
                },
                price: {
                    bsonType: "int",
                    minimum: 500000,
                    maximum: 1000000,
                    description: "Harga per item harus antara 500rb - 1jt"
                },
                total: {
                    bsonType: "int",
                    description: "Total = quantity × price"
                },
                customer: {
                    bsonType: "string",
                    description: "Nama pelanggan harus string"
                }
            }
        }
    }
});