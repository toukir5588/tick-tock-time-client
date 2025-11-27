import CarouselPlugin from "@/components/Carousel/CarouselPlugin";
import ProductsPage from "../products/page";
import TimeseepingArt from "@/components/ui/homeComponent/TimeseepingArt";
import WatchJournalSection from "@/components/ui/homeComponent/WatchJournalSection";

export default function HomePage() {
  return (
    <div className="">
       <CarouselPlugin/>
       <ProductsPage/>
       <TimeseepingArt/>
       <WatchJournalSection/>
    </div>
  );
}