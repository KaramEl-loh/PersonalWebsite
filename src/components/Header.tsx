import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-hero bg-cover bg-no-repeat bg-center text-background space-y-16 pb-32 md:pb-64">
      <Navbar></Navbar>
      <Hero></Hero>
    </header>
  );
}
