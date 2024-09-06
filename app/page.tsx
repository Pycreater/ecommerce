import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero1 from "@/components/hero/Hero1";
import Main1 from "@/components/main/Main1";
import Navbar from "@/components/navbar/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#18181B]">
      <BackgroundBeams />
      <Navbar /> {/* Moved Navbar here to ensure it's always on top */}
      <div className="mt-16">
        {" "}
        {/* Add margin-top to prevent content from overlapping */}
        <Header />
        <Hero1 />
        <Main1 />
        <Footer />
      </div>
    </div>
  );
}
