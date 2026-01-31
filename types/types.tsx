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

// এটি আপনার প্রোডাক্ট স্লাইসের স্টেটের টাইপ
export interface ProductState {
  items: Product[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// এটি পুরো রেডক্স স্টোরের টাইপ (RootState)
export interface RootState {
  products: ProductState;
}

export interface ColorOption {
  name: string;
  class: string;
  count: number;
}

export interface FilterState {
  brands: string[];
  categories: string[];
  priceRange: number;
  audience: string[];
  colors: string[];
}
