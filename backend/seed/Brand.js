const Brand = require("../models/Brand");

const brands = [
  { _id: "65a7e20102e12c44f59943da", name: "Women Lengha" },
  { _id: "65a7e20102e12c44f59943db", name: "Purple Lengha" },
  { _id: "65a7e20102e12c44f59943dc", name: "Silk Lengha" },
  { _id: "65a7e20102e12c44f59943dd", name: "Cotton Lengha" },
  { _id: "65a7e20102e12c44f59943de", name: "Indian Lengha" },
  { _id: "65a7e20102e12c44f59943df", name: "Golden" },
  { _id: "65a7e20102e12c44f59943e0", name: "Pink" },
  { _id: "65a7e20102e12c44f59943e1", name: "Green" },
  { _id: "65a7e20102e12c44f59943e2", name: "Silver" },
  { _id: "65a7e20102e12c44f59943e3", name: "Black" },
  { _id: "65a7e20102e12c44f59943e4", name: "Green" },
  { _id: "65a7e20102e12c44f59943e5", name: "Mirror work" }
];

exports.seedBrand = async () => {
  try {
    await Brand.insertMany(brands);
    console.log('Brand seeded successfully');
  } catch (error) {
    console.log(error);
  }
};
