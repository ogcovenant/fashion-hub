import FIlter from "@/components/FIlter";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main>
      <div className="sticky top-0 left-0">
      <Header />
      </div>
      <Hero />
      <div className="w-full flex">
        <FIlter />
        <ProductList />
      </div>
    </main>
  );
}
