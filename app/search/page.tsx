import { format } from "date-fns";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { get_SearchResult } from "@/app/utils/api";
import { SearchResultData } from "@/app/types/app";
import ListingCard from "@/app/components/ListingCard";

type SearchParams = {
  location?: string;
  startDate?: string;
  endDate?: string;
  numOfGuests?: string;
};

const SearchResult = async ({
  searchParams: { 
    location = '', 
    startDate = '', 
    endDate = '', 
    numOfGuests = '' 
  },
}: {
  searchParams: SearchParams;
}) => {
  let formatedStartDate = '';
  let formatedEndDate = '';
  
  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  }
  
  const range = `${formatedStartDate}${formatedEndDate ? ` - ${formatedEndDate}` : ''}`;

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
            300+ Stays - {range || 'Select dates'} - for {numOfGuests || '0'} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location || 'your destination'}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            {filters.map((filter) => (
              <button
                type="button"
                className="filter-btn px-4 py-2 border rounded-full transition-all duration-300 ease-in-out 
                 hover:bg-gray-100 hover:scale-105 hover:shadow-md 
                 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 
                 active:bg-gray-200 active:scale-95"
                key={filter}
              >
                {filter}
              </button>
            ))}
          </div>

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