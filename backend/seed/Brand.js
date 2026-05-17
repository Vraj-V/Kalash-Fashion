const Brand = require("../models/Brand");

const brands = [
  { _id: "65a7e20102e12c44f59943da", name: "Shree Fab" },
  { _id: "65a7e20102e12c44f59943db", name: "NIWI" },
  { _id: "65a7e20102e12c44f59943dc", name: "Fabcartz" },
  { _id: "65a7e20102e12c44f59943dd", name: "Janasya" },
  { _id: "65a7e20102e12c44f59943de", name: "Stylum" },
  { _id: "65a7e20102e12c44f59943df", name: "Kaizen Texo" },
  { _id: "65a7e20102e12c44f59943e0", name: "Piludi" },
  { _id: "65a7e20102e12c44f59943e1", name: "Fab Window" },
  { _id: "65a7e20102e12c44f59943e2", name: "LooknBook" },
  { _id: "65a7e20102e12c44f59943e3", name: "ZAALIMA Fashion" },
  { _id: "65a7e20102e12c44f59943e4", name: "Kapindra" },
  { _id: "65a7e20102e12c44f59943e5", name: "JEnika Creation" },
];

exports.seedBrand = async () => {
  try {
    await Brand.insertMany(brands);
    console.log("Brand seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
