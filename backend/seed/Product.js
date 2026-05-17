const Product = require("../models/Product");

// Category IDs
// Lehenga       : 65a7e24602e12c44f599442c
// Kurti         : 65a7e24602e12c44f599442d
// Chaniya Choli : 65a7e24602e12c44f599442e
// Saree         : 65a7e24602e12c44f599442f

// Brand IDs
// Shree Fab       : 65a7e20102e12c44f59943da
// NIWI            : 65a7e20102e12c44f59943db
// Fabcartz        : 65a7e20102e12c44f59943dc
// Janasya         : 65a7e20102e12c44f59943dd
// Stylum          : 65a7e20102e12c44f59943de
// Kaizen Texo     : 65a7e20102e12c44f59943df
// Piludi          : 65a7e20102e12c44f59943e0
// Fab Window      : 65a7e20102e12c44f59943e1
// LooknBook       : 65a7e20102e12c44f59943e2
// ZAALIMA Fashion : 65a7e20102e12c44f59943e3
// Kapindra        : 65a7e20102e12c44f59943e4
// JEnika Creation : 65a7e20102e12c44f59943e5

const products = [

  // ── LEHENGA ──────────────────────────────────────────────────────────────
  {
    _id: "65a7e45902e12c44f599444e",
    title: "BAESD Women's Georgette Semi-Stitched Lehenga Choli with Dupatta (Dark Blue)",
    description: "Fabric: Georgette | Blouse Piece: Semi-Stitched | Dupatta: Net with embroidery border. Flared skirt with heavy foil print and zari work. Suitable for wedding, festival and party wear. Wash Care: Dry Clean Only.",
    price: 999,
    discountPercentage: 6,
    stockQuantity: 14,
    brand: "65a7e20102e12c44f59943da",   // Shree Fab
    category: "65a7e24602e12c44f599442c", // Lehenga
    thumbnail: "https://m.media-amazon.com/images/I/71e2g+FQt5L._SX679_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71e2g+FQt5L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61T5jPN5PwL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61pjmkBdpaL._SX679_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994500",
    title: "NIWI Women's Net Embroidered Semi-Stitched Lehenga Choli with Dupatta (Pink)",
    description: "Fabric: Net Lehenga with Santoon Inner | Blouse Fabric: Banglori Silk | Dupatta: Net with sequence border. Heavy sequence and thread embroidery work. Ideal for sangeet, reception and wedding functions.",
    price: 1499,
    discountPercentage: 65,
    stockQuantity: 18,
    brand: "65a7e20102e12c44f59943db",   // NIWI
    category: "65a7e24602e12c44f599442c", // Lehenga
    thumbnail: "https://m.media-amazon.com/images/I/51QEfbyHj1L._SX569_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/51U6Cw1Yv8L._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61F8IH6WIcL._SX679_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994450",
    title: "Women's Tussar Silk Lehenga Choli Set | Patola Print with Foil Work (1216 pik)",
    description: "Lehenga Work: Ikkat Patola Print With Foil Work Border. Blouse Work: Printed With Foil Work Border. Dupatta Work: Ikkat Patola Print With Gotta Patti Lace Border.",
    price: 1249,
    discountPercentage: 15,
    stockQuantity: 36,
    brand: "65a7e20102e12c44f59943da",   // Shree Fab
    category: "65a7e24602e12c44f599442c", // Lehenga
    thumbnail: "https://m.media-amazon.com/images/I/41QglvhV1kL._SY606_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/41QglvhV1kL._SY606_.jpg",
      "https://m.media-amazon.com/images/I/41jNy-nxJUL.jpg",
      "https://m.media-amazon.com/images/I/51sxZTFi2XL.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994451",
    title: "Fabcartz Tranding South Indian Pattu Lehenga Choli For Women",
    description: "Rich Fabrics for a Traditional Look. Jacquard-woven Lichi Silk lehenga and matching Lichi Silk blouse fabric paired with a soft embroidered Rangoli dupatta for an elegant South Indian half-saree style.",
    price: 1280,
    discountPercentage: 18,
    stockQuantity: 123,
    brand: "65a7e20102e12c44f59943dc",   // Fabcartz
    category: "65a7e24602e12c44f599442c", // Lehenga
    thumbnail: "https://m.media-amazon.com/images/I/71YJnx6v8nL._SY741_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71v73ntJSQL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71YJnx6v8nL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71TYenI+vBL._SY741_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994502",
    title: "Women's Velvet Embroidered Semi-Stitched Lehenga Choli with Dupatta (Maroon)",
    description: "Fabric: Premium Velvet Lehenga with heavy zari and sequence embroidery. Blouse: Velvet embroidered (unstitched). Dupatta: Net with lace border. Perfect for bridal wear and receptions.",
    price: 1999,
    discountPercentage: 62,
    stockQuantity: 12,
    brand: "65a7e20102e12c44f59943db",   // NIWI
    category: "65a7e24602e12c44f599442c", // Lehenga
    thumbnail: "https://m.media-amazon.com/images/I/815WKFVv3jL._SY741_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81jWsEgCycL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/811F8x+LOYL._SY741_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994504",
    title: "Women's Satin Silk Embroidered Lehenga Choli with Dupatta (Royal Blue)",
    description: "Fabric: Satin Silk Lehenga with thread embroidery. Blouse: Silk with sequence work. Dupatta: Net with embroidered border. Perfect for parties and receptions.",
    price: 1399,
    discountPercentage: 52,
    stockQuantity: 20,
    brand: "65a7e20102e12c44f59943de",   // Stylum
    category: "65a7e24602e12c44f599442c", // Lehenga
    thumbnail: "https://m.media-amazon.com/images/I/91M374DuKeL._SY606_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81FTfrukmpL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/91M374DuKeL._SY606_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994510",
    title: "Suppar Sleave Women's Embroidered Semi-Stitched Lehenga Choli (Pink)",
    description: "Georgette lehenga with heavy embroidery and net dupatta. Ideal for wedding and festive wear.",
    price: 999,
    discountPercentage: 50,
    stockQuantity: 18,
    brand: "65a7e20102e12c44f59943da",   // Shree Fab
    category: "65a7e24602e12c44f599442c", // Lehenga
    thumbnail: "https://m.media-amazon.com/images/I/91ABQeIcEZL._SY741_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/91ddnGhJ8eL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/91vawiemphL._SY741_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994511",
    title: "Kaizen Texo Fab Women's Digital Printed Georgette Lehenga (Green)",
    description: "Digital print georgette lehenga with silk blouse and dupatta. Lightweight and perfect for parties and festivals.",
    price: 1699,
    discountPercentage: 45,
    stockQuantity: 20,
    brand: "65a7e20102e12c44f59943df",   // Kaizen Texo
    category: "65a7e24602e12c44f599442c", // Lehenga
    thumbnail: "https://m.media-amazon.com/images/I/81rRdIXv12L._SY606_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81rRdIXv12L._SY606_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994512",
    title: "Stylum Women's Silk Embroidered Lehenga Choli (Purple)",
    description: "Silk lehenga with zari embroidery and net dupatta. Premium partywear lehenga for weddings.",
    price: 2342,
    discountPercentage: 40,
    stockQuantity: 10,
    brand: "65a7e20102e12c44f59943de",   // Stylum
    category: "65a7e24602e12c44f599442c", // Lehenga
    thumbnail: "https://m.media-amazon.com/images/I/71pM0o96c0L._SY741_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71KtSETuMsL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71pM0o96c0L._SY741_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994515",
    title: "Fab Window Women's Sequin Work Georgette Lehenga (Wine)",
    description: "Georgette lehenga with sequin embroidery and stylish dupatta. Ideal for reception and parties.",
    price: 1999,
    discountPercentage: 42,
    stockQuantity: 15,
    brand: "65a7e20102e12c44f59943e1",   // Fab Window
    category: "65a7e24602e12c44f599442c", // Lehenga
    thumbnail: "https://m.media-amazon.com/images/I/91paYrGokzL._SY606_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/91paYrGokzL._SY606_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994516",
    title: "JEnika Creation Women's Designer Embroidered Lehenga (Peach)",
    description: "Designer lehenga with heavy embroidery and net dupatta. Perfect for wedding and sangeet.",
    price: 999,
    discountPercentage: 50,
    stockQuantity: 22,
    brand: "65a7e20102e12c44f59943e5",   // JEnika Creation
    category: "65a7e24602e12c44f599442c", // Lehenga
    thumbnail: "https://m.media-amazon.com/images/I/81mmWzBBQ8L._SY606_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81mmWzBBQ8L._SY606_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994517",
    title: "Kapindra Enterprise Women's Crepe Silk Lehenga (Orange)",
    description: "Crepe silk lehenga with embroidery work. Perfect for wedding and Bollywood style look.",
    price: 1999,
    discountPercentage: 38,
    stockQuantity: 14,
    brand: "65a7e20102e12c44f59943e4",   // Kapindra
    category: "65a7e24602e12c44f599442c", // Lehenga
    thumbnail: "https://m.media-amazon.com/images/I/91dix68t4NL._SY741_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/91dix68t4NL._SY741_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994519",
    title: "LooknBook Women's Stitched Partywear Lehenga Choli (Lavender)",
    description: "Fully stitched lehenga choli with modern design. Ideal for party and reception wear.",
    price: 2049,
    discountPercentage: 35,
    stockQuantity: 16,
    brand: "65a7e20102e12c44f59943e2",   // LooknBook
    category: "65a7e24602e12c44f599442c", // Lehenga
    thumbnail: "https://m.media-amazon.com/images/I/71PIYGV6dML._SX569_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71PIYGV6dML._SX569_.jpg",
    ],
    isDeleted: false,
  },

  // ── CHANIYA CHOLI ─────────────────────────────────────────────────────────
  {
    _id: "65a7e45902e12c44f599444f",
    title: "Shree Women's Art Silk Bandhani Print Semi-Stitched Chaniya Choli (Red)",
    description: "Fabric: Art Silk | Inner: Micro Crepe | Dupatta: Chiffon with lace border. Traditional Bandhani (Tie & Dye) print with mirror work on blouse. Perfect for Navratri, Garba and festive occasions.",
    price: 799,
    discountPercentage: 55,
    stockQuantity: 21,
    brand: "65a7e20102e12c44f59943da",   // Shree Fab
    category: "65a7e24602e12c44f599442e", // Chaniya Choli
    thumbnail: "https://m.media-amazon.com/images/I/61783FuAgiL._SY741_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61783FuAgiL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61pT2WwatFL._SX569_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994501",
    title: "Janasya Women's Pure Cotton Chaniya Choli with Kantha Embroidery (Green)",
    description: "Fabric: Pure Cotton | Blouse: Cotton with mirror work | Dupatta: Cotton with kantha embroidery. Traditional Gujarati-style Chaniya Choli perfect for Navratri and festive occasions.",
    price: 1299,
    discountPercentage: 50,
    stockQuantity: 30,
    brand: "65a7e20102e12c44f59943dd",   // Janasya
    category: "65a7e24602e12c44f599442e", // Chaniya Choli
    thumbnail: "https://m.media-amazon.com/images/I/316gBKHP7+L.jpg",
    images: [
      "https://m.media-amazon.com/images/I/41uKrlNWSsL.jpg",
      "https://m.media-amazon.com/images/I/316gBKHP7+L.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994503",
    title: "Women's Georgette Floral Printed Chaniya Choli with Dupatta (Yellow)",
    description: "Fabric: Georgette with floral digital print. Blouse: Banglori silk. Dupatta: Soft net with printed border. Lightweight and perfect for haldi, mehendi and festive wear.",
    price: 899,
    discountPercentage: 48,
    stockQuantity: 25,
    brand: "65a7e20102e12c44f59943e0",   // Piludi
    category: "65a7e24602e12c44f599442e", // Chaniya Choli
    thumbnail: "https://m.media-amazon.com/images/I/91sxFmQks8L._SY606_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/91yPqgAa5XL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/911q0blZAiL._SY741_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994505",
    title: "Women's Traditional Mirror Work Navratri Chaniya Choli (Multi Color)",
    description: "Fabric: Cotton with heavy mirror work and embroidery. Blouse: Embroidered with mirror detailing. Dupatta: Cotton printed. Ideal for Navratri, Garba and cultural festivals.",
    price: 1199,
    discountPercentage: 45,
    stockQuantity: 35,
    brand: "65a7e20102e12c44f59943dd",   // Janasya
    category: "65a7e24602e12c44f599442e", // Chaniya Choli
    thumbnail: "https://m.media-amazon.com/images/I/81TqeC6kNAL._SY741_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81TqeC6kNAL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/81mmWzBBQ8L._SY741_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994513",
    title: "ZAALIMA Fashion Women's Net Embroidered Chaniya Choli (Black)",
    description: "Net chaniya choli with sequence embroidery and dupatta. Perfect for party and evening wear.",
    price: 735,
    discountPercentage: 60,
    stockQuantity: 30,
    brand: "65a7e20102e12c44f59943e3",   // ZAALIMA Fashion
    category: "65a7e24602e12c44f599442e", // Chaniya Choli
    thumbnail: "https://m.media-amazon.com/images/I/41N2F2GbFPL.jpg",
    images: [
      "https://m.media-amazon.com/images/I/41N2F2GbFPL.jpg",
      "https://m.media-amazon.com/images/I/41dyc-mPVKL.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994514",
    title: "Piludi Women's Floral Printed Chaniya Choli (Yellow)",
    description: "Floral printed chaniya choli with soft fabric and dupatta. Ideal for casual festive wear.",
    price: 499,
    discountPercentage: 55,
    stockQuantity: 40,
    brand: "65a7e20102e12c44f59943e0",   // Piludi
    category: "65a7e24602e12c44f599442e", // Chaniya Choli
    thumbnail: "https://m.media-amazon.com/images/I/61X6FgitbuL._SX569_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61X6FgitbuL._SX569_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994518",
    title: "Piludi Women's Satin Silk Chaniya Choli (Maroon)",
    description: "Satin silk chaniya choli with embroidery and soft dupatta. Ideal for festive and wedding wear.",
    price: 1399,
    discountPercentage: 47,
    stockQuantity: 19,
    brand: "65a7e20102e12c44f59943e0",   // Piludi
    category: "65a7e24602e12c44f599442e", // Chaniya Choli
    thumbnail: "https://m.media-amazon.com/images/I/71h3LWJK4GL._SX466_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71h3LWJK4GL._SX466_.jpg",
    ],
    isDeleted: false,
  },

  // ── SAREE ─────────────────────────────────────────────────────────────────
  {
    _id: "65a7e45902e12c44f5994520",
    title: "Saree Mall Women's Banarasi Silk Woven Saree with Blouse Piece (Purple)",
    description: "Fabric: Banarasi Silk | Blouse: Unstitched Banglori Silk. Rich zari woven border with traditional motifs. Perfect for weddings, pujas and festive occasions. Length: 6.3 metres.",
    price: 1599,
    discountPercentage: 40,
    stockQuantity: 25,
    brand: "65a7e20102e12c44f59943e2",   // LooknBook
    category: "65a7e24602e12c44f599442f", // Saree
    thumbnail: "https://m.media-amazon.com/images/I/71pM0o96c0L._SY741_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71pM0o96c0L._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71KtSETuMsL._SY741_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994521",
    title: "Kanjivaram Silk Saree with Zari Border (Red & Gold)",
    description: "Pure Kanjivaram silk saree with traditional zari border and pallu. Ideal for bridal and wedding wear. Comes with unstitched blouse piece.",
    price: 2499,
    discountPercentage: 30,
    stockQuantity: 10,
    brand: "65a7e20102e12c44f59943e1",   // Fab Window
    category: "65a7e24602e12c44f599442f", // Saree
    thumbnail: "https://m.media-amazon.com/images/I/91paYrGokzL._SY606_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/91paYrGokzL._SY606_.jpg",
      "https://m.media-amazon.com/images/I/81mmWzBBQ8L._SY606_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994522",
    title: "Georgette Printed Saree with Lace Border (Blue)",
    description: "Lightweight georgette saree with digital floral print and lace border. Easy to drape and perfect for office, casual and festive wear.",
    price: 699,
    discountPercentage: 50,
    stockQuantity: 40,
    brand: "65a7e20102e12c44f59943e3",   // ZAALIMA Fashion
    category: "65a7e24602e12c44f599442f", // Saree
    thumbnail: "https://m.media-amazon.com/images/I/81TqeC6kNAL._SY741_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81TqeC6kNAL._SY741_.jpg",
    ],
    isDeleted: false,
  },
  {
    _id: "65a7e45902e12c44f5994523",
    title: "Chanderi Cotton Silk Saree with Embroidered Blouse (Peach)",
    description: "Chanderi cotton silk saree with delicate embroidery on pallu and border. Soft, breathable fabric ideal for summer weddings and daytime events.",
    price: 1199,
    discountPercentage: 35,
    stockQuantity: 20,
    brand: "65a7e20102e12c44f59943dd",   // Janasya
    category: "65a7e24602e12c44f599442f", // Saree
    thumbnail: "https://m.media-amazon.com/images/I/91sxFmQks8L._SY606_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/91sxFmQks8L._SY606_.jpg",
      "https://m.media-amazon.com/images/I/91yPqgAa5XL._SY741_.jpg",
    ],
    isDeleted: false,
  },
];

exports.seedProduct = async () => {
  try {
    await Product.insertMany(products);
    console.log("Product seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
