const Order = require("../models/Order");

const orders = [
  {
    _id: "65c2658db53f820728d0745a",
    user: "65b8e564ea5ce114184ccb96",
    item: [
      {
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f599444e",
          title:
            "BAESD Women's Georgette Semi-Stitched Lehenga Choli with Dupatta (Dark Blue)",
          description:
            "Fabric: Georgette | Blouse Piece: Semi-Stitched | Dupatta: Net with embroidery border. " +
            "Flared skirt with heavy foil print and zari work.",
          price: 999,
          discountPercentage: 6.15,
          stockQuantity: 14,
          brand: { _id: "65a7e20102e12c44f59943da", name: "Women Lengha" },
          category: "65a7e24602e12c44f599442c",
          thumbnail: "https://m.media-amazon.com/images/I/71e2g+FQt5L._SX679_.jpg",
          images: [
            "https://m.media-amazon.com/images/I/71e2g+FQt5L._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61T5jPN5PwL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/61pjmkBdpaL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/51LTEmvoWlL._SX679_.jpg",
            "https://m.media-amazon.com/images/I/51nY8zwBzFL._SX679_.jpg",
          ],
          isDeleted: false,
          updatedAt: "2024-02-07T09:22:57.840Z",
        },
        quantity: 1,
        _id: "65c26581b53f820728d07456",
      },
    ],
    address: [
      {
        _id: "65c26398e1e1a2106ac8fbd5",
        user: "65b8e564ea5ce114184ccb96",
        street: "main 11th",
        city: "Indrapuram",
        state: "Uttar Pradesh",
        phoneNumber: "9452571272",
        postalCode: "201012",
        country: "India",
        type: "Home",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "CARD",
    total: 999,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
  {
    _id: "65c265c6b53f820728d0749c",
    user: "65b8e564ea5ce114184ccb96",
    item: [
      {
        _id: "65c265a2b53f820728d07474",
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f5994502",
          title:
            "Women's Velvet Embroidered Semi-Stitched Lehenga Choli with Dupatta (Maroon)",
          description:
            "Fabric: Premium Velvet Lehenga with heavy zari and sequence embroidery. " +
            "Blouse: Velvet embroidered (unstitched). Dupatta: Net with lace border.",
          price: 1999,
          discountPercentage: 62,
          stockQuantity: 12,
          brand: { _id: "65a7e20102e12c44f59943da", name: "Women Lengha" },
          category: "65a7e24602e12c44f599442c",
          thumbnail: "https://m.media-amazon.com/images/I/815WKFVv3jL._SY741_.jpg",
          images: [
            "https://m.media-amazon.com/images/I/81jWsEgCycL._SY741_.jpg",
            "https://m.media-amazon.com/images/I/811F8x+LOYL._SY741_.jpg",
            "https://m.media-amazon.com/images/I/81-m4KBAUwL._SY741_.jpg",
            "https://m.media-amazon.com/images/I/81YrhUjFx9L._SY741_.jpg",
          ],
          isDeleted: false,
        },
        quantity: 1,
      },
      {
        _id: "65c265b9b53f820728d0748f",
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f5994503",
          title:
            "Women's Georgette Floral Printed Lehenga Choli with Dupatta (Yellow)",
          description:
            "Fabric: Georgette with floral digital print. Blouse: Banglori silk. " +
            "Dupatta: Soft net with printed border.",
          price: 899,
          discountPercentage: 48,
          stockQuantity: 25,
          brand: { _id: "65a7e20102e12c44f59943e3", name: "Black" },
          category: "65a7e24602e12c44f599442e",
          thumbnail: "https://m.media-amazon.com/images/I/91sxFmQks8L._SY606_.jpg",
          images: [
            "https://m.media-amazon.com/images/I/91yPqgAa5XL._SY741_.jpg",
            "https://m.media-amazon.com/images/I/911q0blZAiL._SY741_.jpg",
            "https://m.media-amazon.com/images/I/91FoXDopcyL._SY741_.jpg",
            "https://m.media-amazon.com/images/I/91oxDKu-ohL._SY741_.jpg",
          ],
          isDeleted: false,
        },
        quantity: 2,
      },
    ],
    address: [
      {
        _id: "65c26398e1e1a2106ac8fbd5",
        user: "65b8e564ea5ce114184ccb96",
        street: "main 11th",
        city: "Indrapuram",
        state: "Uttar Pradesh",
        phoneNumber: "9452571272",
        postalCode: "201012",
        country: "India",
        type: "Home",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "COD",
    total: 3797,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
  {
    _id: "65c265feb53f820728d074b4",
    user: "65b8e564ea5ce114184ccb96",
    item: [
      {
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f5994515",
          title: "Fab Window Women's Sequin Work Georgette Lehenga (Wine)",
          description:
            "Georgette lehenga with sequin embroidery and stylish dupatta. Ideal for reception and parties.",
          price: 1999,
          discountPercentage: 42,
          stockQuantity: 15,
          brand: { _id: "65a7e20102e12c44f59943db", name: "Purple Lengha" },
          category: "65a7e24602e12c44f599442c",
          thumbnail: "https://m.media-amazon.com/images/I/91paYrGokzL._SY606_.jpg",
          images: ["https://m.media-amazon.com/images/I/91paYrGokzL._SY606_.jpg"],
          isDeleted: false,
        },
        quantity: 1,
        _id: "65c265edb53f820728d074b0",
      },
    ],
    address: [
      {
        _id: "65c26398e1e1a2106ac8fbd5",
        user: "65b8e564ea5ce114184ccb96",
        street: "main 11th",
        city: "Indrapuram",
        state: "Uttar Pradesh",
        phoneNumber: "9452571272",
        postalCode: "201012",
        country: "India",
        type: "Home",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "COD",
    total: 1999,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
  {
    _id: "65c2667db53f820728d07579",
    user: "65b8e564ea5ce114184ccb96",
    item: [
      {
        _id: "65c26673b53f820728d0756f",
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f5994518",
          title: "Piludi Women's Satin Silk Lehenga Choli (Maroon)",
          description:
            "Satin silk lehenga with embroidery and soft dupatta. Ideal for festive and wedding wear.",
          price: 1399,
          discountPercentage: 47,
          stockQuantity: 19,
          brand: { _id: "65a7e20102e12c44f59943e3", name: "Black" },
          category: "65a7e24602e12c44f599442e",
          thumbnail: "https://m.media-amazon.com/images/I/71h3LWJK4GL._SX466_.jpg",
          images: ["https://m.media-amazon.com/images/I/71h3LWJK4GL._SX466_.jpg"],
          isDeleted: false,
        },
        quantity: 1,
      },
    ],
    address: [
      {
        _id: "65c26412e1e1a2106ac8fbd8",
        user: "65b8e564ea5ce114184ccb96",
        street: "main 18th",
        city: "Noida",
        state: "Uttar Pradesh",
        phoneNumber: "9846286159",
        postalCode: "301273",
        country: "India",
        type: "Buisness",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "CARD",
    total: 1399,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
  {
    _id: "65c266eab53f820728d0763f",
    user: "65b8e564ea5ce114184ccb96",
    item: [
      {
        _id: "65c266dab53f820728d07632",
        user: "65b8e564ea5ce114184ccb96",
        product: {
          _id: "65a7e45902e12c44f599444f",
          title:
            "Shree Women's Art Silk Bandhani Print Semi-Stitched Lehenga Choli (Red)",
          description:
            "Fabric: Art Silk | Inner: Micro Crepe | Dupatta: Chiffon with lace border. " +
            "Traditional Bandhani print lehenga with mirror work on blouse.",
          price: 799,
          discountPercentage: 55,
          stockQuantity: 21,
          brand: { _id: "65a7e20102e12c44f59943e3", name: "Black" },
          category: "65a7e24602e12c44f599442e",
          thumbnail: "https://m.media-amazon.com/images/I/61783FuAgiL._SY741_.jpg",
          images: [
            "https://m.media-amazon.com/images/I/61783FuAgiL._SY741_.jpg",
            "https://m.media-amazon.com/images/I/61pT2WwatFL._SX569_.jpg",
            "https://m.media-amazon.com/images/I/711enPQ6o8L._SY741_.jpg",
            "https://m.media-amazon.com/images/I/814YLAAKGUL._SY741_.jpg",
          ],
          isDeleted: false,
        },
        quantity: 1,
      },
    ],
    address: [
      {
        _id: "65c26398e1e1a2106ac8fbd5",
        user: "65b8e564ea5ce114184ccb96",
        street: "main 11th",
        city: "Indrapuram",
        state: "Uttar Pradesh",
        phoneNumber: "9452571272",
        postalCode: "201012",
        country: "India",
        type: "Home",
        __v: 0,
      },
    ],
    status: "Pending",
    paymentMode: "COD",
    total: 799,
    createdAt: "2024-02-07T10:36:15.151Z",
  },
];

exports.seedOrder = async () => {
  try {
    await Order.insertMany(orders);
    console.log("Order seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
