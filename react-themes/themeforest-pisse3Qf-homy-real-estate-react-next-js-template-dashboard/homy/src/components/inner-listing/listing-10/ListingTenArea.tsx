"use client"
import DropdownFour from "@/components/search-dropdown/inner-dropdown/DropdownFour"
import UseShortedProperty from "@/hooks/useShortedProperty";
import ListingEightArea from "../listing-08/ListingEightArea";

const ListingTenArea = () => {

   const itemsPerPage = 9;
   const page = "listing_5";

   const {
      handleBathroomChange,
      handleBedroomChange,
      handleSearchChange,
      handlePriceChange,
      maxPrice,
      priceValue,
      resetFilters,
      selectedAmenities,
      handleAmenityChange,
      handleLocationChange,
      handleStatusChange,
      handlePriceDropChange
   } = UseShortedProperty({ itemsPerPage, page });

   const handleResetFilter = () => {
      resetFilters();
   };

   return (
      <>
         <DropdownFour
            handlePriceDropChange={handlePriceDropChange}
            handleSearchChange={handleSearchChange}
            handleBedroomChange={handleBedroomChange}
            handleBathroomChange={handleBathroomChange}
            handlePriceChange={handlePriceChange}
            maxPrice={maxPrice}
            priceValue={priceValue}
            handleResetFilter={handleResetFilter}
            selectedAmenities={selectedAmenities}
            handleAmenityChange={handleAmenityChange}
            handleLocationChange={handleLocationChange}
            handleStatusChange={handleStatusChange}
         />
         <ListingEightArea style={true} />
      </>
   )
}

export default ListingTenArea
