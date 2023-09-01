const dataP = [
  {
    id: 1,
    name: "dyson",
    price: 45900,
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22660956/2023/5/4/7b409b9d-0c8c-41ab-8b72-8ceb2e777aeb1683191418526-dyson-Gift-Edition-Airwrap-Hair-Multi-Styler---Vinca-Blue--R-1.jpg",
    brand: "dyson",
    category: "Gift Edition Airwrap",
    rating: 4.6,
    reviews: 70,
  },

  {
    id: 9876543210,
    name: "Lakme",
    price: 437,
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/55118/2022/3/21/d647d908-2909-4244-ad1a-186fa8f3f89d1647860104751-Lakme-Absolute-Mattreal-Skin-Natural-Mousse-with-SPF-8---Ivo-1.jpg",
    brand: "Maybelline New York",
    category: "Skin Care Combo",
    rating: 4.3,
    reviews: 5000,
  },
  {
    id: 1011122131,
    name: "Ponds",
    price: 299,
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/136266/2023/8/1/7a8099f5-5e85-4e1c-aa9c-18c7f50bd7571690871769346-Ponds-Age-Miracle-Cell-ReGEN-Day-Cream-4881690871768951-1.jpg",
    brand: "Ponds",
    category: "Message Oils",
    rating: 4.4,
    reviews: 469,
  },

  {
    id: 3,
    name: "JAGUAR",
    price: 299,
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1677389/2023/6/1/e4cc80b9-ab4b-47b8-b4f0-b6b11b8c31fc1685620364997-JAGUAR-Men-Classic-Eau-De-Toilette-100-ml-9301685620364695-1.jpg",
    brand: "JAGUAR",
    category: "Perfume",
    rating: 4.4,
    reviews: 469,
  },
  {
    id: 1,
    name: "dyson",
    price: 45900,
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22660956/2023/5/4/7b409b9d-0c8c-41ab-8b72-8ceb2e777aeb1683191418526-dyson-Gift-Edition-Airwrap-Hair-Multi-Styler---Vinca-Blue--R-1.jpg",
    brand: "dyson",
    category: "Gift Edition Airwrap",
    rating: 4.6,
    reviews: 70,
  },

  {
    id: 9876543210,
    name: "Lakme",
    price: 437,
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/55118/2022/3/21/d647d908-2909-4244-ad1a-186fa8f3f89d1647860104751-Lakme-Absolute-Mattreal-Skin-Natural-Mousse-with-SPF-8---Ivo-1.jpg",
    brand: "Maybelline New York",
    category: "Skin Care Combo",
    rating: 4.3,
    reviews: 5000,
  },
  {
    id: 1011122131,
    name: "Ponds",
    price: 299,
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/136266/2023/8/1/7a8099f5-5e85-4e1c-aa9c-18c7f50bd7571690871769346-Ponds-Age-Miracle-Cell-ReGEN-Day-Cream-4881690871768951-1.jpg",
    brand: "Ponds",
    category: "Message Oils",
    rating: 4.4,
    reviews: 469,
  },

  {
    id: 3,
    name: "JAGUAR",
    price: 299,
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1677389/2023/6/1/e4cc80b9-ab4b-47b8-b4f0-b6b11b8c31fc1685620364997-JAGUAR-Men-Classic-Eau-De-Toilette-100-ml-9301685620364695-1.jpg",
    brand: "JAGUAR",
    category: "Perfume",
    rating: 4.4,
    reviews: 469,
  },
  {
    id: 1,
    name: "dyson",
    price: 45900,
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22660956/2023/5/4/7b409b9d-0c8c-41ab-8b72-8ceb2e777aeb1683191418526-dyson-Gift-Edition-Airwrap-Hair-Multi-Styler---Vinca-Blue--R-1.jpg",
    brand: "dyson",
    category: "Gift Edition Airwrap",
    rating: 4.6,
    reviews: 70,
  },

  {
    id: 9876543210,
    name: "Lakme",
    price: 437,
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/55118/2022/3/21/d647d908-2909-4244-ad1a-186fa8f3f89d1647860104751-Lakme-Absolute-Mattreal-Skin-Natural-Mousse-with-SPF-8---Ivo-1.jpg",
    brand: "Maybelline New York",
    category: "Skin Care Combo",
    rating: 4.3,
    reviews: 5000,
  },
  {
    id: 1011122131,
    name: "Ponds",
    price: 299,
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/136266/2023/8/1/7a8099f5-5e85-4e1c-aa9c-18c7f50bd7571690871769346-Ponds-Age-Miracle-Cell-ReGEN-Day-Cream-4881690871768951-1.jpg",
    brand: "Ponds",
    category: "Message Oils",
    rating: 4.4,
    reviews: 469,
  },

  {
    id: 3,
    name: "JAGUAR",
    price: 299,
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1677389/2023/6/1/e4cc80b9-ab4b-47b8-b4f0-b6b11b8c31fc1685620364997-JAGUAR-Men-Classic-Eau-De-Toilette-100-ml-9301685620364695-1.jpg",
    brand: "JAGUAR",
    category: "Perfume",
    rating: 4.4,
    reviews: 469,
  },
  {
    id: 1,
    name: "dyson",
    price: 45900,
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22660956/2023/5/4/7b409b9d-0c8c-41ab-8b72-8ceb2e777aeb1683191418526-dyson-Gift-Edition-Airwrap-Hair-Multi-Styler---Vinca-Blue--R-1.jpg",
    brand: "dyson",
    category: "Gift Edition Airwrap",
    rating: 4.6,
    reviews: 70,
  },

  {
    id: 9876543210,
    name: "Lakme",
    price: 437,
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/55118/2022/3/21/d647d908-2909-4244-ad1a-186fa8f3f89d1647860104751-Lakme-Absolute-Mattreal-Skin-Natural-Mousse-with-SPF-8---Ivo-1.jpg",
    brand: "Maybelline New York",
    category: "Skin Care Combo",
    rating: 4.3,
    reviews: 5000,
  },
  {
    id: 1011122131,
    name: "Ponds",
    price: 299,
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/136266/2023/8/1/7a8099f5-5e85-4e1c-aa9c-18c7f50bd7571690871769346-Ponds-Age-Miracle-Cell-ReGEN-Day-Cream-4881690871768951-1.jpg",
    brand: "Ponds",
    category: "Message Oils",
    rating: 4.4,
    reviews: 469,
  },

  {
    id: 3,
    name: "JAGUAR",
    price: 299,
    imageUrl:
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1677389/2023/6/1/e4cc80b9-ab4b-47b8-b4f0-b6b11b8c31fc1685620364997-JAGUAR-Men-Classic-Eau-De-Toilette-100-ml-9301685620364695-1.jpg",
    brand: "JAGUAR",
    category: "Perfume",
    rating: 4.4,
    reviews: 469,
  },
];
export default dataP;
