import Banner from "@/app/components/Banner";
import Explore from "@/app/components/Explore";
import Live from "@/app/components/Live";
import GreatestOutdoors from "@/app/components/GreatestOutdoors";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Banner />

        <Explore />

        <Live />

        <GreatestOutdoors />
      </main>

      <Footer />
    </>
  );
}
