const Product = require("../models/Product");

const products = [
  // ── LEHENGA 1: Dark Blue Georgette (Amazon IN – real listing) ──
  {
    _id: "65a7e45902e12c44f599444e",
    title: "BAESD Women's Georgette Semi-Stitched Lehenga Choli with Dupatta (Dark Blue)",
    description:
      "Fabric: Georgette | Blouse Piece: Semi-Stitched | Dupatta: Net with embroidery border. " +
      "Flared skirt with heavy foil print and zari work. Suitable for wedding, festival and party wear. " +
      "Wash Care: Dry Clean Only. Available in multiple sizes: S, M, L, XL, XXL.",
    price: 999,
    discountPercentage: 6.15,
    stockQuantity: 14,
    brand: "65a7e20102e12c44f59943da",
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

  // ── LEHENGA 2: Red Bandhani Art Silk (Amazon IN – real listing) ──
  {
    _id: "65a7e45902e12c44f599444f",
    title: "Shree Women's Art Silk Bandhani Print Semi-Stitched Lehenga Choli (Red)",
    description:
      "Fabric: Art Silk | Inner: Micro Crepe | Dupatta: Chiffon with lace border. " +
      "Traditional Bandhani (Tie & Dye) print lehenga with mirror work on blouse. " +
      "Perfect for Navratri, Garba, Dandiya, Diwali and festive occasions. " +
      "Wash Care: Hand Wash / Dry Clean. Sizes available: S to 3XL.",
    price: 799,
    discountPercentage: 55,
    stockQuantity: 21,
    brand: "65a7e20102e12c44f59943e3",
    category: "65a7e24602e12c44f599442e",
    thumbnail: "https://m.media-amazon.com/images/I/61783FuAgiL._SY741_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61783FuAgiL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61pT2WwatFL._SX569_.jpg",
      "https://m.media-amazon.com/images/I/711enPQ6o8L._SY741_.jpg",
      "https://m.media-amazon.com/images/I/814YLAAKGUL._SY741_.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },

  // ── LEHENGA 3: Pink Net (Amazon IN – new addition) ──
  {
    _id: "65a7e45902e12c44f5994500",
    title: "NIWI Women's Net Embroidered Semi-Stitched Lehenga Choli with Dupatta (Pink)",
    description:
      "Fabric: Net Lehenga with Santoon Inner | Blouse Fabric: Banglori Silk | Dupatta: Net with sequence border. " +
      "Heavy sequence and thread embroidery work all over. Ideal for sangeet, reception and wedding functions. " +
      "Wash Care: Dry Clean Only. Available in Pink, Peach, Sky Blue and Maroon.",
    price: 1499,
    discountPercentage: 65,
    stockQuantity: 18,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://m.media-amazon.com/images/I/51QEfbyHj1L._SX569_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/51U6Cw1Yv8L._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61F8IH6WIcL._SX679_.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },

  // ── LEHENGA 4: Green Silk (Amazon IN – new addition) ──
  {
    _id: "65a7e45902e12c44f5994501",
    title: "Janasya Women's Pure Cotton Chaniya Choli with Kantha Embroidery (Green)",
    description:
      "Fabric: Pure Cotton | Blouse: Cotton with mirror work | Dupatta: Cotton with kantha embroidery. " +
      "Traditional Gujarati-style Chaniya Choli perfect for Navratri and festive occasions. " +
      "Breathable cotton fabric ensures all-day comfort. Hand-block printed with natural dyes. " +
      "Sizes: S(34), M(36), L(38), XL(40), XXL(42).",
    price: 1299,
    discountPercentage: 50,
    stockQuantity: 30,
    brand: "65a7e20102e12c44f59943e3",
    category: "65a7e24602e12c44f599442e",
    thumbnail: "https://m.media-amazon.com/images/I/316gBKHP7+L.jpg",
    images: [
      "https://m.media-amazon.com/images/I/41uKrlNWSsL.jpg",
      "https://m.media-amazon.com/images/I/41fxScx0gXL.jpg",
      "https://m.media-amazon.com/images/I/316gBKHP7+L.jpg",
      "https://m.media-amazon.com/images/I/316gBKHP7+L.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },

  // ── Lengha 5 ─
  {
    _id: "65a7e45902e12c44f5994450",
    title: "Women's Tussar Silk Lehenga Choli Set | Patola Print with Foil Work | Unstitched Blouse | Designer Ethnic Wear for Navratri, Wedding, Festival & Party (1216 pik)",
    description:
      "Lehenga Work : ikkat patola Print With Foil Work Border ,Blouse Work : Printed With Foil Work Border ,Dupatta Work : ikkat patola Print With Gotta Patti Lace Border Also Comes With Tassels",
    price: 1249,
    discountPercentage: 15.46,
    stockQuantity: 36,
    brand: "65a7e20102e12c44f59943db",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://m.media-amazon.com/images/I/41QglvhV1kL._SY606_.jpg",
    images: ["https://m.media-amazon.com/images/I/41QglvhV1kL._SY606_.jpg",
      "https://m.media-amazon.com/images/I/41jNy-nxJUL.jpg",
      "https://m.media-amazon.com/images/I/51sxZTFi2XL.jpg",
      "https://m.media-amazon.com/images/I/519Yaab6YwL.jpg"
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
    },
  // ===================== OTHER Lengha =====================
  {
    _id: "65a7e45902e12c44f5994451",
    title: "Fabcartz Tranding South Indian Pattu Lehenga Choli For Women",
    description: "⭐ Rich Fabrics for a Traditional Look Jacquard-woven Lichi Silk lehenga and matching Lichi Silk blouse fabric paired with a soft embroidered Rangoli dupatta for an elegant South Indian half-saree style.",
    price: 1280,
    discountPercentage: 17.91,
    stockQuantity: 123,
    brand: "65a7e20102e12c44f59943dc",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://m.media-amazon.com/images/I/71YJnx6v8nL._SY741_.jpg",
    images: ["https://m.media-amazon.com/images/I/71v73ntJSQL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71YJnx6v8nL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71TYenI+vBL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71kwiPH-+rL._SY741_.jpg"
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994502",
    title: "Women's Velvet Embroidered Semi-Stitched Lehenga Choli with Dupatta (Maroon)",
    description:
      "Fabric: Premium Velvet Lehenga with heavy zari and sequence embroidery. " +
      "Blouse: Velvet embroidered (unstitched). Dupatta: Net with lace border. " +
      "Perfect for bridal wear, receptions and grand occasions. " +
      "Available in Maroon, Wine and Dark Green.",
    price: 1999,
    discountPercentage: 62,
    stockQuantity: 12,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://m.media-amazon.com/images/I/815WKFVv3jL._SY741_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81jWsEgCycL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/811F8x+LOYL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/81-m4KBAUwL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/81YrhUjFx9L._SY741_.jpg"
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
    {
    _id: "65a7e45902e12c44f5994503",
    title: "Women's Georgette Floral Printed Lehenga Choli with Dupatta (Yellow)",
    description:
      "Fabric: Georgette with floral digital print. Blouse: Banglori silk. " +
      "Dupatta: Soft net with printed border. Lightweight and perfect for haldi, mehendi and festive wear. " +
      "Available in Yellow, Peach and Light Green.",
    price: 899,
    discountPercentage: 48,
    stockQuantity: 25,
    brand: "65a7e20102e12c44f59943e3",
    category: "65a7e24602e12c44f599442e",
    thumbnail: "https://m.media-amazon.com/images/I/91sxFmQks8L._SY606_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/91yPqgAa5XL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/911q0blZAiL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/91FoXDopcyL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/91oxDKu-ohL._SY741_.jpg"
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994504",
    title: "Women's Satin Silk Embroidered Lehenga Choli with Dupatta (Royal Blue)",
    description:
      "Fabric: Satin Silk Lehenga with thread embroidery. Blouse: Silk with sequence work. " +
      "Dupatta: Net with embroidered border. Perfect for parties, receptions and evening wear. " +
      "Available in Royal Blue, Black and Purple.",
    price: 1399,
    discountPercentage: 52,
    stockQuantity: 20,
    brand: "65a7e20102e12c44f59943db",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://m.media-amazon.com/images/I/91M374DuKeL._SY606_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81FTfrukmpL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/91M374DuKeL._SY606_.jpg",
      "https://m.media-amazon.com/images/I/91VRdhUq1qL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/819WlToA-FL._SY741_.jpg"
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
  _id: "65a7e45902e12c44f5994505",
  title: "Women's Traditional Mirror Work Navratri Chaniya Choli (Multi Color)",
  description:
    "Fabric: Cotton with heavy mirror work and embroidery. Blouse: Embroidered with mirror detailing. " +
    "Dupatta: Cotton printed. Ideal for Navratri, Garba and cultural festivals. " +
    "Bright multicolor traditional design.",
  price: 1199,
  discountPercentage: 45,
  stockQuantity: 35,
  brand: "65a7e20102e12c44f59943e3",
  category: "65a7e24602e12c44f599442e",
  thumbnail: "https://m.media-amazon.com/images/I/81TqeC6kNAL._SY741_.jpg",
  images: [
    "https://m.media-amazon.com/images/I/81TqeC6kNAL._SY741_.jpg",
    "https://m.media-amazon.com/images/I/81mmWzBBQ8L._SY741_.jpg",
    "https://m.media-amazon.com/images/I/91-iU2B-ZqL._SY741_.jpg",
    "https://m.media-amazon.com/images/I/81GHB9+nN6L._SY741_.jpg"
  ],
  isDeleted: false,
  updatedAt: "2024-02-07T09:22:57.840Z",
},
{
  _id: "65a7e45902e12c44f5994510",
  title: "Suppar Sleave Women's Embroidered Semi-Stitched Lehenga Choli (Pink)",
  description: "Georgette lehenga with heavy embroidery and net dupatta. Ideal for wedding and festive wear. Available in Pink, Peach and Wine.",
  price: 999,
  discountPercentage: 50,
  stockQuantity: 18,
  brand: "65a7e20102e12c44f59943da",
  category: "65a7e24602e12c44f599442c",
  thumbnail: "https://m.media-amazon.com/images/I/91ABQeIcEZL._SY741_.jpg",
  images: [
    "https://m.media-amazon.com/images/I/91ddnGhJ8eL._SY741_.jpg",
    "https://m.media-amazon.com/images/I/91vawiemphL._SY741_.jpg",
    "https://m.media-amazon.com/images/I/91-OF9ddxrL._SY741_.jpg"
  ],
  isDeleted: false,
  updatedAt: "2024-02-07T09:22:57.840Z",
},

{
  _id: "65a7e45902e12c44f5994511",
  title: "Kaizen Texo Fab Women's Digital Printed Georgette Lehenga (Green)",
  description: "Digital print georgette lehenga with silk blouse and dupatta. Lightweight and perfect for parties and festivals.",
  price: 1699,
  discountPercentage: 45,
  stockQuantity: 20,
  brand: "65a7e20102e12c44f59943db",
  category: "65a7e24602e12c44f599442c",
  thumbnail: "https://m.media-amazon.com/images/I/81rRdIXv12L._SY606_.jpg",
  images: [
    "https://m.media-amazon.com/images/I/81rRdIXv12L._SY606_.jpg"
  ],
  isDeleted: false,
  updatedAt: "2024-02-07T09:22:57.840Z",
},

{
  _id: "65a7e45902e12c44f5994512",
  title: "Stylum Women's Silk Embroidered Lehenga Choli (Purple)",
  description: "Silk lehenga with zari embroidery and net dupatta. Premium partywear lehenga for weddings.",
  price: 2342,
  discountPercentage: 40,
  stockQuantity: 10,
  brand: "65a7e20102e12c44f59943dc",
  category: "65a7e24602e12c44f599442c",
  thumbnail: "https://m.media-amazon.com/images/I/71pM0o96c0L._SY741_.jpg",
  images: [
    "https://m.media-amazon.com/images/I/71KtSETuMsL._SY741_.jpg",
    "https://m.media-amazon.com/images/I/71pM0o96c0L._SY741_.jpg"
  ],
  isDeleted: false,
  updatedAt: "2024-02-07T09:22:57.840Z",
},

{
  _id: "65a7e45902e12c44f5994513",
  title: "ZAALIMA Fashion Women's Net Embroidered Lehenga Choli (Black)",
  description: "Net lehenga with sequence embroidery and dupatta. Perfect for party and evening wear.",
  price: 735,
  discountPercentage: 60,
  stockQuantity: 30,
  brand: "65a7e20102e12c44f59943e3",
  category: "65a7e24602e12c44f599442e",
  thumbnail: "https://m.media-amazon.com/images/I/41N2F2GbFPL.jpg",
  images: [
    "https://m.media-amazon.com/images/I/41N2F2GbFPL.jpg",
    "https://m.media-amazon.com/images/I/41dyc-mPVKL.jpg"
  ],
  isDeleted: false,
  updatedAt: "2024-02-07T09:22:57.840Z",
},

{
  _id: "65a7e45902e12c44f5994514",
  title: "Piludi Women's Floral Printed Lehenga Choli (Yellow)",
  description: "Floral printed lehenga with soft fabric and dupatta. Ideal for casual festive wear.",
  price: 499,
  discountPercentage: 55,
  stockQuantity: 40,
  brand: "65a7e20102e12c44f59943e3",
  category: "65a7e24602e12c44f599442e",
  thumbnail: "https://m.media-amazon.com/images/I/61X6FgitbuL._SX569_.jpg",
  images: [
    "https://m.media-amazon.com/images/I/61X6FgitbuL._SX569_.jpg"
  ],
  isDeleted: false,
  updatedAt: "2024-02-07T09:22:57.840Z",
},

{
  _id: "65a7e45902e12c44f5994515",
  title: "Fab Window Women's Sequin Work Georgette Lehenga (Wine)",
  description: "Georgette lehenga with sequin embroidery and stylish dupatta. Ideal for reception and parties.",
  price: 1999,
  discountPercentage: 42,
  stockQuantity: 15,
  brand: "65a7e20102e12c44f59943db",
  category: "65a7e24602e12c44f599442c",
  thumbnail: "https://m.media-amazon.com/images/I/91paYrGokzL._SY606_.jpg",
  images: [
    "https://m.media-amazon.com/images/I/91paYrGokzL._SY606_.jpg"
  ],
  isDeleted: false,
  updatedAt: "2024-02-07T09:22:57.840Z",
},

{
  _id: "65a7e45902e12c44f5994516",
  title: "JEnika Creation Women's Designer Embroidered Lehenga (Peach)",
  description: "Designer lehenga with heavy embroidery and net dupatta. Perfect for wedding and sangeet.",
  price: 999,
  discountPercentage: 50,
  stockQuantity: 22,
  brand: "65a7e20102e12c44f59943da",
  category: "65a7e24602e12c44f599442c",
  thumbnail: "https://m.media-amazon.com/images/I/81mmWzBBQ8L._SY606_.jpg",
  images: [
    "https://m.media-amazon.com/images/I/81mmWzBBQ8L._SY606_.jpg"
  ],
  isDeleted: false,
  updatedAt: "2024-02-07T09:22:57.840Z",
},

{
  _id: "65a7e45902e12c44f5994517",
  title: "Kapindra Enterprise Women's Crepe Silk Lehenga (Orange)",
  description: "Crepe silk lehenga with embroidery work. Perfect for wedding and Bollywood style look.",
  price: 1999,
  discountPercentage: 38,
  stockQuantity: 14,
  brand: "65a7e20102e12c44f59943dc",
  category: "65a7e24602e12c44f599442c",
  thumbnail: "https://m.media-amazon.com/images/I/91dix68t4NL._SY741_.jpg",
  images: [
    "https://m.media-amazon.com/images/I/91dix68t4NL._SY741_.jpg"
  ],
  isDeleted: false,
  updatedAt: "2024-02-07T09:22:57.840Z",
},

{
  _id: "65a7e45902e12c44f5994518",
  title: "Piludi Women's Satin Silk Lehenga Choli (Maroon)",
  description: "Satin silk lehenga with embroidery and soft dupatta. Ideal for festive and wedding wear.",
  price: 1399,
  discountPercentage: 47,
  stockQuantity: 19,
  brand: "65a7e20102e12c44f59943e3",
  category: "65a7e24602e12c44f599442e",
  thumbnail: "https://m.media-amazon.com/images/I/71h3LWJK4GL._SX466_.jpg",
  images: [
    "https://m.media-amazon.com/images/I/71h3LWJK4GL._SX466_.jpg"
  ],
  isDeleted: false,
  updatedAt: "2024-02-07T09:22:57.840Z",
},

{
  _id: "65a7e45902e12c44f5994519",
  title: "LooknBook Women's Stitched Partywear Lehenga Choli (Lavender)",
  description: "Fully stitched lehenga choli with modern design. Ideal for party and reception wear.",
  price: 2049,
  discountPercentage: 35,
  stockQuantity: 16,
  brand: "65a7e20102e12c44f59943db",
  category: "65a7e24602e12c44f599442c",
  thumbnail: "https://m.media-amazon.com/images/I/71PIYGV6dML._SX569_.jpg",
  images: [
    "https://m.media-amazon.com/images/I/71PIYGV6dML._SX569_.jpg"
  ],
  isDeleted: false,
  updatedAt: "2024-02-07T09:22:57.840Z",
}
];

exports.seedProduct = async () => {
  try {
    await Product.insertMany(products);
    console.log("Product seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
