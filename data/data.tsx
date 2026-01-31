// ১. ইন্টারফেস আপডেট (image স্ট্রিং এর বদলে images অ্যারে)
// types/types.ts
export interface Product {
  id: number;
  title: string;
  price: string;
  originalPrice: string;
  images: string[]; // নিশ্চিত করুন এটি plural (images)
  tag: string;
  rating: string;
  soldCount: string;
  category: "Releasekalender" | "Best Seller" | "Upcoming";
}

export const productsData: Product[] = [
  // --- Releasekalender Category ---
  {
    id: 1,
    title: "Nike Zoom Vomero 5",
    price: "$25.99",
    originalPrice: "$00.00",
    images: [
      "/assets/images/shoeImage.jpg",
      "/assets/images/shoeImage.jpg",
      "/assets/images/shoeImage.jpg",
      "/assets/images/shoeImage.jpg",
    ],
    tag: "Wishlist",
    rating: "5.0/5.0",
    soldCount: "300",
    category: "Releasekalender",
  },
  {
    id: 2,
    title: "Nike Air Max 1 'Grey & Black'",
    price: "$25.99",
    originalPrice: "$00.00",
    images: [
      "/assets/images/shoeImage2.jpg",
      "/assets/images/shoeImage2.jpg",
      "/assets/images/shoeImage2.jpg",
      "/assets/images/shoeImage2.jpg",
    ],
    tag: "Best Seller",
    rating: "5.0/5.0",
    soldCount: "300",
    category: "Releasekalender",
  },
  {
    id: 3,
    title: "Nike Air Force",
    price: "$25.99",
    originalPrice: "$00.00",
    images: [
      "/assets/images/shoeImage3.jpg",
      "/assets/images/shoeImage3.jpg",
      "/assets/images/shoeImage3.jpg",
      "/assets/images/shoeImage3.jpg",
    ],
    tag: "New",
    rating: "5.0/5.0",
    soldCount: "300",
    category: "Releasekalender",
  },
  {
    id: 4,
    title: "Nike Zoom Vomero 5",
    price: "$25.99",
    originalPrice: "$00.00",
    images: [
      "/assets/images/shoeImage4.jpg",
      "/assets/images/shoeImage4.jpg",
      "/assets/images/shoeImage4.jpg",
      "/assets/images/shoeImage4.jpg",
    ],
    tag: "Best Seller",
    rating: "5.0/5.0",
    soldCount: "300",
    category: "Releasekalender",
  },

  // --- Best Seller Category ---
  {
    id: 5,
    title: "Nike Zoom Vomero 5",
    price: "$25.99",
    originalPrice: "$00.00",
    images: [
      "/assets/images/bestSellShoe (1).jpg",
      "/assets/images/bestSellShoe (1).jpg",
      "/assets/images/bestSellShoe (1).jpg",
      "/assets/images/bestSellShoe (1).jpg",
    ],
    tag: "Wishlist",
    rating: "5.0/5.0",
    soldCount: "300",
    category: "Best Seller",
  },
  {
    id: 6,
    title: "Nike Air Max 1 'Grey & Black'",
    price: "$25.99",
    originalPrice: "$00.00",
    images: [
      "/assets/images/bestSellShoe (2).jpg",
      "/assets/images/bestSellShoe (2).jpg",
      "/assets/images/bestSellShoe (2).jpg",
      "/assets/images/bestSellShoe (2).jpg",
    ],
    tag: "Best Seller",
    rating: "5.0/5.0",
    soldCount: "300",
    category: "Best Seller",
  },
  {
    id: 7,
    title: "Nike Air Force",
    price: "$25.99",
    originalPrice: "$00.00",
    images: [
      "/assets/images/bestSellShoe (3).jpg",
      "/assets/images/bestSellShoe (3).jpg",
      "/assets/images/bestSellShoe (3).jpg",
      "/assets/images/bestSellShoe (3).jpg",
    ],
    tag: "New",
    rating: "5.0/5.0",
    soldCount: "300",
    category: "Best Seller",
  },
  {
    id: 8,
    title: "Nike Zoom Vomero 5",
    price: "$25.99",
    originalPrice: "$00.00",
    images: [
      "/assets/images/bestSellShoe (1).jpg",
      "/assets/images/bestSellShoe (1).jpg",
      "/assets/images/bestSellShoe (1).jpg",
      "/assets/images/bestSellShoe (1).jpg",
    ],
    tag: "Best Seller",
    rating: "5.0/5.0",
    soldCount: "300",
    category: "Best Seller",
  },

  // --- Upcoming Category ---
  {
    id: 9,
    title: "Nike Zoom Vomero 5",
    price: "$25.99",
    originalPrice: "$00.00",
    images: [
      "/assets/images/upcomingShoe (1).jpg",
      "/assets/images/upcomingShoe (1).jpg",
      "/assets/images/upcomingShoe (1).jpg",
      "/assets/images/upcomingShoe (1).jpg",
    ],
    tag: "Wishlist",
    rating: "5.0/5.0",
    soldCount: "300",
    category: "Upcoming",
  },
  {
    id: 10,
    title: "Nike Air Max 1 'Grey & Black'",
    price: "$25.99",
    originalPrice: "$00.00",
    images: [
      "/assets/images/upcomingShoe (2).jpg",
      "/assets/images/upcomingShoe (2).jpg",
      "/assets/images/upcomingShoe (2).jpg",
      "/assets/images/upcomingShoe (2).jpg",
    ],
    tag: "Best Seller",
    rating: "5.0/5.0",
    soldCount: "300",
    category: "Upcoming",
  },
  {
    id: 11,
    title: "Nike Air Force",
    price: "$25.99",
    originalPrice: "$00.00",
    images: [
      "/assets/images/upcomingShoe (3).jpg",
      "/assets/images/upcomingShoe (3).jpg",
      "/assets/images/upcomingShoe (3).jpg",
      "/assets/images/upcomingShoe (3).jpg",
    ],
    tag: "New",
    rating: "5.0/5.0",
    soldCount: "300",
    category: "Upcoming",
  },
  {
    id: 12,
    title: "Nike Zoom Vomero 5",
    price: "$25.99",
    originalPrice: "$00.00",
    images: [
      "/assets/images/upcomingShoe (4).jpg",
      "/assets/images/upcomingShoe (4).jpg",
      "/assets/images/upcomingShoe (4).jpg",
      "/assets/images/upcomingShoe (4).jpg",
    ],
    tag: "Best Seller",
    rating: "5.0/5.0",
    soldCount: "300",
    category: "Upcoming",
  },
];

// produts page data
// constants/data.ts
export const BRANDS = [
  "Rocker",
  "Ashley",
  "Just",
  "Cube",
  "Artical Melts",
  "Blind Store",
];
export const CATEGORIES = [
  "Nike Air Max 1",
  "Nike Air Max 90",
  "Nike Dunk",
  "Nike P-6000",
  "Nike Air Force 1",
  "Jordan Air Jordan 4",
];
export const COLORS = [
  { name: "Blue", class: "bg-blue-600" },
  { name: "Green", class: "bg-green-500" },
  { name: "Red", class: "bg-red-500" },
  { name: "Black", class: "bg-black" },
  { name: "Orange", class: "bg-orange-500" },
  { name: "Yellow", class: "bg-yellow-400" },
];

export const PRODUCTS = Array(12).fill({
  title: "Nike Zoom Vomero 5",
  price: 25.99,
  oldPrice: 50.0,
  rating: 5.0,
  sold: 300,
  image:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
});
