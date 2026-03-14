import { Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function FooterBottom() {
  return (
    <div className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-gray-600">
          
        
          <p className="text-center lg:text-left">
            © 2022, Nest – WordPress Ecommerce Template <br className="hidden sm:block" />
            All rights reserved
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-green-600 font-semibold">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <div>
                <p>1900 6666</p>
                <span className="text-xs text-gray-500 font-normal">
                  Working 8:00 - 22:00
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <div>
                <p>1900 8888</p>
                <span className="text-xs text-gray-500 font-normal">
                  24/7 Support Center
                </span>
              </div>
            </div>
          </div>

          {/* Right: Social + Discount */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-700 font-medium">Follow Us</span>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full cursor-pointer bg-green-100 flex items-center justify-center text-green-600">
                  <Facebook className="w-4 h-4 " />
                </div>
                <div className="w-8 h-8 cursor-pointer rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Twitter className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 cursor-pointer rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 cursor-pointer rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Youtube className="w-4 h-4" />
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              Up to 15% discount on your first subscribe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}