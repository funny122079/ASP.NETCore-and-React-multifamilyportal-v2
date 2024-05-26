"use client"
import UseShortedProperty from "@/hooks/useShortedProperty";
import ListingThreeArea from "../listing-03/ListingThreeArea"
import DropdownFive from "@/components/search-dropdown/inner-dropdown/DropdownFive";

const ListingElevenArea = () => {

  const itemsPerPage = 9;
  const page = "listing_4";

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
      <ListingThreeArea style={true} />
    </>
  )
}

export default ListingElevenArea
