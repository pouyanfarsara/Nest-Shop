import Image from "next/image";
import { Truck, BadgeDollarSign, LayoutGrid, RotateCcw } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Best prices & offers",
    desc: "Orders $50 or more",
    image: "/features1.png",
  },
  {
    id: 2,
    title: "Free delivery",
    desc: "24/7 amazing services",
    image:"/features2.png"
  },
  {
    id: 3,
    title: "Great daily deal",
    desc: "When you sign up",
   image:"/features3.png"
  },
  {
    id: 4,
    title: "Wide assortment",
    desc: "Mega Discounts",
   image:"/features4.png"
  },
  {
    id: 5,
    title: "Easy returns",
    desc: "Within 30 days",
    image:"/features5.png"
  },
];

export default function FeatureCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 -mt-8">
      <div className="rounded-2xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {features.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-3"
            >
              <div className="w-10 h-10 rounded-xl  flex items-center justify-center">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                ) : (
                  item.Icon && (
                    <item.Icon className="w-5 h-5 text-green-600" />
                  )
                )}
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {item.title}
                </p>
                <p className="text-xs text-[#ADADAD]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}