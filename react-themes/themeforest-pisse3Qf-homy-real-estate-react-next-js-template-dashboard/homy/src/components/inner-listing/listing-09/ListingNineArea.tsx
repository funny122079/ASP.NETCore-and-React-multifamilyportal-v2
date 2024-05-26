"use client"
import DropdownFour from "@/components/search-dropdown/inner-dropdown/DropdownFour"
import ListingSevenArea from "../listing-07/ListingSevenArea"
import UseShortedProperty from "@/hooks/useShortedProperty";

const ListingNineArea = () => {

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
      <ListingSevenArea style={true} />
    </>
  )
}

export default ListingNineArea
