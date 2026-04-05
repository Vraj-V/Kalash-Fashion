const Review = require("../models/Review");

const reviews = [
  {
    _id: "65c252e3dcd9253acfbaa76c",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f599444e",
    rating: 5,
    comment: "Beautiful color and great flare. Perfect for a wedding function.",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25339dcd9253acfbaa79e",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f599444f",
    rating: 4,
    comment: "Bandhani print looks authentic and dupatta quality is nice.",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c2535fdcd9253acfbaa7c9",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994500",
    rating: 4,
    comment: "Embroidery is neat and looks premium at this price.",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25380dcd9253acfbaa7df",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994501",
    rating: 5,
    comment: "Super comfortable cotton and perfect for garba nights.",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c253ebdcd9253acfbaa7f5",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994450",
    rating: 4,
    comment: "Patola print is vibrant, blouse material is good.",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25416dcd9253acfbaa80b",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994502",
    rating: 5,
    comment: "Velvet work looks rich. Great for receptions.",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c2542cdcd9253acfbaa821",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994503",
    rating: 4,
    comment: "Lightweight and pretty. Color is slightly brighter in person.",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25443dcd9253acfbaa837",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994504",
    rating: 3,
    comment: "Nice embroidery but needs a good blouse fitting.",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25473dcd9253acfbaa84d",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994505",
    rating: 5,
    comment: "Mirror work is stunning. Great festive wear.",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c254a8dcd9253acfbaa863",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f5994515",
    rating: 4,
    comment: "Wine color looks elegant. Loved the dupatta.",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
];

exports.seedReview = async () => {
  try {
    await Review.insertMany(reviews);
    console.log("Review seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
