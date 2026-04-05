const Wishlist = require("../models/Wishlist");

const wishlistItem = [
  {
    _id: "65c2441232078478e340ab60",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f599444e",
    createdAt: "2024-02-07T10:11:46.794Z",
    updatedAt: "2024-02-07T10:11:46.794Z",
    note: "Love the dark blue shade. Saving this for the next wedding function!",
  },
  {
    _id: "65c2441332078478e340ab64",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f599444f",
    createdAt: "2024-02-07T10:11:46.794Z",
    updatedAt: "2024-02-07T10:11:46.794Z",
    note: "Bandhani print looks perfect for Navratri.",
  },
  {
    _id: "65c2441532078478e340ab68",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f5994502",
    createdAt: "2024-02-07T10:11:46.794Z",
    updatedAt: "2024-02-07T10:11:46.794Z",
    note: "Velvet + embroidery = statement piece. Must buy.",
  },
  {
    _id: "65c2441732078478e340ab6c",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f5994515",
    createdAt: "2024-02-07T10:11:46.794Z",
    updatedAt: "2024-02-07T10:11:46.794Z",
    note: "Wine color for reception night. Added to wishlist.",
  },
  {
    _id: "65c2441a32078478e340ab70",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f5994513",
    createdAt: "2024-02-07T10:11:46.794Z",
    updatedAt: "2024-02-07T10:11:46.794Z",
    note: "Black net lehenga with sequence work looks elegant.",
  },
  {
    _id: "65c2442132078478e340ab7a",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f5994518",
    createdAt: "2024-02-07T10:11:46.794Z",
    updatedAt: "2024-02-07T10:11:46.794Z",
    note: "Maroon satin silk for festive evenings.",
  },
];

exports.seedWishlist = async () => {
  try {
    await Wishlist.insertMany(wishlistItem);
    console.log("Wishlist seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
