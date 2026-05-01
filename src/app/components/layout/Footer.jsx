import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Delivery Information", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Support Center", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Sign In", href: "#" },
      { label: "View Cart", href: "#" },
      { label: "My Wishlist", href: "#" },
      { label: "Track My Order", href: "#" },
      { label: "Help Ticket", href: "#" },
      { label: "Shipping Details", href: "#" },
      { label: "Compare products", href: "#" },
    ],
  },
  {
    title: "Corporate",
    links: [
      { label: "Become a Vendor", href: "#" },
      { label: "Affiliate Program", href: "#" },
      { label: "Farm Business", href: "#" },
      { label: "Farm Careers", href: "#" },
      { label: "Our Suppliers", href: "#" },
      { label: "Accessibility", href: "#" },
      { label: "Promotions", href: "#" },
    ],
  },
  {
    title: "Popular",
    links: [
      { label: "Milk & Flavoured Milk", href: "#" },
      { label: "Butter and Margarine", href: "#" },
      { label: "Eggs Substitutes", href: "#" },
      { label: "Marmalades", href: "#" },
      { label: "Sour Cream and Dips", href: "#" },
      { label: "Tea & Kombucha", href: "#" },
      { label: "Cheese", href: "#" },
    ],
  },
];

export default function FooterTop() {
  return (
    <section className="border-b border-[#BCE3C9] bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Left */}
          <div className="lg:col-span-4">
            <div className="relative w-36 h-10">
              <Image
                src="/logo.png"
                alt="Nest"
                fill
                className="object-contain"
              />
            </div>

            <p className="text-sm text-gray-600 mt-4 max-w-sm">
              Awesome grocery store website template
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-green-600" />
                <span>
                  Address 5171 W Campbell Ave undefined Kent, Utah 53127 United
                  States
                </span>
              </li>
              <li className="flex gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-green-600" />
                <span>Call Us (+91)-540-025-124553</span>
              </li>
              <li className="flex gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-green-600" />
                <span>Email sale@Nest.com</span>
              </li>
              <li className="flex gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-green-600" />
                <span>Hours 10:00 - 18:00, Mon - Sat</span>
              </li>
            </ul>
          </div>

          {/* Middle */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-gray-900">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-gray-600 hover:text-green-600 transition"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-gray-900">Install App</h4>

            <p className="text-xs text-gray-500 mt-3">
              From App Store or Google Play
            </p>

            {/* App buttons */}
            <div className="mt-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <div className="relative w-[140px] h-[42px] cursor-pointer">
                <Image
                  src="/Appstore.png"
                  alt="App Store"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative w-[140px] h-[42px] cursor-pointer">
                <Image
                  src="/googleplay.png"
                  alt="Google Play"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Secured Payment Gateways
            </p>

            {/* Payments (FIXED 🔥) */}
            <div className="mt-3">
              <div className="relative w-[220px] h-[32px]">
                <Image
                  src="/payment.png"
                  alt="Payments"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
