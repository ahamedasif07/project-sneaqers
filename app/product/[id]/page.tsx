import { productsData } from "@/data/data";
import { notFound } from "next/navigation";

import MarketplaceSidebar from "./__components/marketplaceSidebar";
import ProductGallery from "./__components/productGallery";
import Container from "@/components/ui/container";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetails({ params }: PageProps) {
  const resolvedParams = await params;
  const product = productsData.find((p) => p.id === Number(resolvedParams.id));

  if (!product) notFound();

  const sellers = [
    {
      name: "ASICS",
      price: 100,
      logo: "/asics-logo.png",
      status: "Beschikbaar",
    },
    {
      name: "Queens",
      price: 130,
      logo: "/queens-logo.png",
      status: "Beschikbaar",
    },
    {
      name: "FOOTDISTRICT",
      price: 150,
      logo: "/fd-logo.png",
      status: "Beschikbaar",
    },
    {
      name: "Sneaxxx",
      price: 180,
      logo: "/sneax-logo.png",
      status: "Beschikbaar",
    },
  ];

  return (
    <div>
      <Container>
        <div className=" p-4 md:p-8 bg-white min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <ProductGallery images={product.images} title={product.title} />
            <MarketplaceSidebar title={product.title} sellers={sellers} />
          </div>
        </div>
      </Container>
    </div>
  );
}
