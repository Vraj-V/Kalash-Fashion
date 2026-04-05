const Category = require("../models/Category");

const categories = [
  { _id: "65a7e24602e12c44f599442c", name: "Lehenga" },
  { _id: "65a7e24602e12c44f599442d", name: "Kurti" },
  { _id: "65a7e24602e12c44f599442e", name: "Chaniya Choli" },
  { _id: "65a7e24602e12c44f599442f", name: "Saree" },
  { _id: "65a7e24602e12c44f5994430", name: "Women Shoes" },
  { _id: "65a7e24602e12c44f5994431", name: "Tops" },
];

exports.seedCategory = async () => {
  try {
    await Category.insertMany(categories);
    console.log("Category seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
