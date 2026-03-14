import FooterTop from "@/app/components/layout/Footer";
import FooterBottom from "@/app/components/layout/FooterBottom";
import ShopHeader from "@/app/components/layout/shopheader";
import {
  BadgePercent,
  Handshake,
  FileText,
  Users,
  PackageCheck,
  RefreshCcw,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Best Prices & Offers",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    image: "/category-2.png",
  },
  {
    id: 2,
    title: "Wide Assortment",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    image: "/category-2.png",
  },
  {
    id: 3,
    title: "Free Delivery",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    image: "/category-2.png",
  },
  {
    id: 4,
    title: "Easy Returns",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    image: "/category-2.png",
  },
  {
    id: 5,
    title: "100% Satisfaction",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    image: "/category-2.png",
  },
  {
    id: 6,
    title: "Great Daily Deal",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    image: "/category-2.png",
  },
];

const galleryImages = [
  "/aboutslider1.png",
  "/aboutslider2.png",
  "/aboutslider3.png",
];

const infoBoxes = [
  {
    id: 1,
    title: "Who we are",
    desc: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.",
  },
  {
    id: 2,
    title: "Our history",
    desc: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.",
  },
  {
    id: 3,
    title: "Our mission",
    desc: "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus elementum sagittis vitae et leo duis ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.",
  },
];

const counters = [
  { id: 1, number: "0+", label: "Glorious years" },
  { id: 2, number: "0+", label: "Happy clients" },
  { id: 3, number: "0+", label: "Projects complete" },
  { id: 4, number: "0+", label: "Team advisor" },
  { id: 5, number: "0+", label: "Products Sale" },
];

const teamMembers = [
  {
    id: 1,
    name: "Eleanor Pena",
    role: "CEO & Co-Founder",
    image: "/main1.png",
  },
  {
    id: 2,
    name: "Arlene McCoy",
    role: "Head of Marketing",
    image: "/main2.png",
  },

];

export default function About() {
  return (

    <>
    
    <main className="bg-white container"><ShopHeader/>
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <div className="mb-6 text-xs text-[#7E7E7E]">
          <span className="text-[#3BB77E]">Home</span>
          <span className="mx-2">›</span>
          <span>Pages</span>
          <span className="mx-2">›</span>
          <span>About Us</span>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="overflow-hidden rounded-[22px]">
            <img
              src="/aboutimage.png"
              alt="About Nest"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>

          <div className="pt-1">
            <h1 className="mb-4 text-3xl font-bold text-[#253D4E] md:text-4xl">
              Welcome to Nest
            </h1>

            <p className="mb-4 text-sm leading-7 text-[#7E7E7E]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="mb-6 text-sm leading-7 text-[#7E7E7E]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-[#ECECEC]"
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="h-[120px] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6 md:pb-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-[#253D4E] md:text-3xl">
            What We Provide?
          </h2>

          <div className="mt-3 flex justify-center">
            <div className="h-[3px] w-16 rounded-full bg-[#BCE3C9]" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
            const image = item.image;

            return (
              <div
                key={item.id}
                className="rounded-[20px] border border-[#ECECEC] bg-white px-7 py-10 text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F4FFF8]">
                    <img src="/category-3.png"/>
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-[#253D4E]">
                  {item.title}
                </h3>

                <p className="mx-auto mb-5 max-w-[280px] text-sm leading-6 text-[#7E7E7E]">
                  {item.desc}
                </p>

                <button className="text-sm font-medium text-[#3BB77E] transition hover:opacity-80">
                  Read more
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6 md:pb-16">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        
            <div className="overflow-hidden rounded-[20px]">
              <img
                src="/partner.png"
                alt="Performance 2"
                className="h-[320px] w-full object-cover"
              />
         
          </div>

          <div>
            <span className="mb-2 inline-block text-sm text-[#B6B6B6]">
              Our performance
            </span>

            <h2 className="mb-5 max-w-[520px] text-3xl font-bold leading-tight text-[#253D4E] md:text-4xl">
              Your Partner for e-commerce grocery solution
            </h2>

            <p className="mb-4 text-sm leading-7 text-[#7E7E7E]">
              Ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto.
            </p>

            <p className="text-sm leading-7 text-[#7E7E7E]">
              Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia ipsam voluptatem quia voluptas sit aspernatur.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-[18px]  md:grid-cols-3">
          {infoBoxes.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white px-6 py-6 ${
                index !== infoBoxes.length - 1
                  ? "border-b md:border-b-0  border-[#3BB77E]"
                  : ""
              }`}
            >
              <h3 className="mb-3 text-2xl font-semibold text-[#253D4E]">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-[#7E7E7E]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6 md:pb-16">
        <div className="relative overflow-hidden rounded-[22px]">
          <img
            src="/Mainpicture.png"
            alt="Counter Background"
            className="h-[260px] w-full object-cover md:h-[300px]"
          />

          <div className="absolute inset-0 bg-[#3BB77E]/55" />

          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="grid w-full max-w-6xl grid-cols-2 gap-8 text-center text-white md:grid-cols-5">
              {counters.map((item) => (
                <div key={item.id}>
                  <h3 className="mb-2 text-4xl font-bold md:text-5xl">
                    {item.number}
                  </h3>
                  <p className="text-sm md:text-base">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 md:px-6 md:pb-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-[#253D4E] md:text-3xl">
            Our Team
          </h2>

          <div className="mt-3 flex justify-center">
            <div className="h-[3px] w-16 rounded-full bg-[#BCE3C9]" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1fr_1fr]">
          <div className="flex flex-col justify-center rounded-[20px] bg-white py-4">
            <span className="mb-2 text-sm text-[#3BB77E]">Our Team</span>

            <h3 className="mb-4 max-w-[260px] text-3xl font-bold leading-tight text-[#253D4E]">
              Meet Our Expert Team
            </h3>

            <p className="mb-4 text-sm leading-7 text-[#7E7E7E]">
              Proin ullamcorper pretium orci. Donec scelerisque leo et euismod
              faucibus. Nam massa dolor imperdiet nec consequat a, congue id
              sem.
            </p>

            <p className="mb-6 text-sm leading-7 text-[#7E7E7E]">
              Proin ullamcorper pretium orci. Donec scelerisque leo et euismod
              faucibus. Nam massa dolor imperdiet nec consequat a, congue id
              sem. Maecenas malesuada faucibus finibus.
            </p>

            <button className="w-fit rounded-md bg-[#3BB77E] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90">
              View All Members
            </button>
          </div>

          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group overflow-hidden rounded-[20px] border border-[#ECECEC] bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="px-6 py-5 text-center">
                <h4 className="mb-1 text-xl font-semibold text-[#253D4E]">
                  {member.name}
                </h4>
                <p className="mb-4 text-sm text-[#7E7E7E]">{member.role}</p>

                <div className="flex items-center justify-center gap-3">
                  <a
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4FFF8] text-[#3BB77E] transition hover:bg-[#3BB77E] hover:text-white"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4FFF8] text-[#3BB77E] transition hover:bg-[#3BB77E] hover:text-white"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F4FFF8] text-[#3BB77E] transition hover:bg-[#3BB77E] hover:text-white"
                  >
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FooterTop/>
      <FooterBottom/>
    </main>

    
    </>
    
  );
}
