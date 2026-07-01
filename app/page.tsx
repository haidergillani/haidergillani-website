import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative z-[2]">
      <Nav />
      <Hero />
      <Divider />
      <Journey />
      <Divider />
      <Work />
      <Divider />
      <Footer />
    </main>
  );
}

function Divider() {
  return (
    <div className="mx-auto h-px max-w-4xl hairline border-t" aria-hidden />
  );
}
