import { format } from "date-fns";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { get_SearchResult } from "@/app/utils/api";
import { SearchResultData } from "@/app/types/app";
import ListingCard from "@/app/components/ListingCard";

type CustomSearchParams = {
  location: string;
  startDate: string;
  endDate: string;
  numOfGuests: string;
};
//comment

const SearchResult = async ({
  searchParams: { location, startDate, endDate, numOfGuests },
}: {
  searchParams: CustomSearchParams;
}) => {
  let formatedStartDate = "";
  let formatedEndDate = "";

  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  }
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  const filters = [
    "Cancellation Flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More filters",
  ];

  const searchResultData: SearchResultData = await get_SearchResult();

  return (
    <>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />
      <main>
        <div className="container mx-auto">
          <p className="text-xs">
            300+ Stays - {range} - for {numOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          {/* Animated Filter Buttons */}
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {filters.map((filter, index) => (
              <motion.button
                type="button"
                key={filter}
                className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium transition-all duration-300 ease-in-out 
                           hover:bg-gray-100 hover:scale-105 hover:shadow-md 
                           focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 
                           active:bg-gray-200 active:scale-95"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>

          {/* Listings */}
          <div>
            {searchResultData.map((listing) => (
              <ListingCard
                key={listing.title}
                img={listing.img}
                title={listing.title}
                location={listing.location}
                description={listing.description}
                price={listing.price}
                total={listing.total}
                star={listing.star}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SearchResult;
//me
