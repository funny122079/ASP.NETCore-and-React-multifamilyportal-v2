"use client"
import UseShortedProperty from "@/hooks/useShortedProperty";
import DropdownFive from "@/components/search-dropdown/inner-dropdown/DropdownFive";
import ListingTwoArea from "../listing-02/ListingTwoArea";

const ListingTwelveArea = () => {

  const itemsPerPage = 5;
  const page = "listing_3";

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
      <DropdownFive
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
      <ListingTwoArea style={true} />
    </>
  )
}

export default ListingTwelveArea
