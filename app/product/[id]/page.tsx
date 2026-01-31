import { productsData } from "@/data/data";
import Image from "next/image";
import { notFound } from "next/navigation";

// টাইপ ডিফাইন করা
interface PageProps {
  params: Promise<{ id: string }>; // Next.js 15 এ এটি একটি Promise
}

export default async function ProductDetails({ params }: PageProps) {
  // ১. প্রথমে params কে await করতে হবে
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // ২. আইডি কে Number এ কনভার্ট করে ডাটাবেস/অ্যারে থেকে খুঁজতে হবে
  const product = productsData.find((p) => p.id === Number(id));

  // ৩. যদি প্রোডাক্ট না পাওয়া যায় তবে Next.js এর built-in notFound কল করুন
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Gallery Side */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 border">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden border bg-gray-50 cursor-pointer hover:opacity-80 transition"
              >
                <Image
                  src={img}
                  alt={`${product.title}-${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content Side */}
        <div className="flex flex-col justify-center">
          <span className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2">
            {product.tag}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            {product.title}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-4xl font-bold text-gray-900">
              {product.price}
            </span>
            <span className="text-2xl text-gray-400 line-through">
              {product.originalPrice}
            </span>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl mb-8">
            <p className="text-gray-600 leading-relaxed">
              Category:{" "}
              <strong className="text-gray-900">{product.category}</strong>
              <br />
              Rating:{" "}
              <strong className="text-gray-900">{product.rating}</strong> ⭐
              <br />
              Total Sold:{" "}
              <strong className="text-gray-900">
                {product.soldCount} units
              </strong>
            </p>
          </div>

          <button className="w-full md:w-max bg-black text-white px-12 py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all active:scale-95 shadow-lg">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
