import Header from "@/components/header/Header";
import Hero1 from "@/components/hero/Hero1";
import Navbar from "@/components/navbar/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#18181B]">
      <BackgroundBeams />
      <div className="bg-[#18181B] p-1 flex rounded-xl">
        <div className="p-5 bg-black text-white ">
          <Navbar />
        </div>
      </div>
      <div className="mb-0 w-[80%]">
        <Header />
      </div>
      <div className="w-screen mt-8 sm:mt-10 md:mt-20 ">
        <Hero1 />
      </div>
    </div>
  );
}
