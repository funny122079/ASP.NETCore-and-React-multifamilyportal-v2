import UseProperty from "@/hooks/UseProperty";
import { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectProperties } from "@/redux/features/propertySlice";
import listing_data from "@/data/inner-data/ListingData";

interface DataType {
   itemsPerPage: number;
   page: string;
}

const UseShortedProperty = ({ itemsPerPage, page }: DataType) => {

   let all_property = listing_data;

   const { properties, setProperties } = UseProperty();
   const filteredProperties = properties.filter((item) => item.page === page);

   const [itemOffset, setItemOffset] = useState(0);
   const [sortOption, setSortOption] = useState<string>("");
   const [status, setStatus] = useState<string | null>(null);
   const [location, setLocation] = useState<string | null>(null);
   const [selectedBedrooms, setSelectedBedrooms] = useState<string | null>(null);
   const [selectedBathrooms, setSelectedBathrooms] = useState<string | null>(null);
   const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

   // handleSortOptionChange
   const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setSortOption(event.target.value);
      setItemOffset(0);
   };

   // handleStatusChange
   const handleStatusChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setStatus(event.target.value);
      setItemOffset(0);
   };

   // handleLocationChange
   const handleLocationChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setLocation(event.target.value);
      setItemOffset(0);
   };

   // handleBedroomChange
   const handleBedroomChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setSelectedBedrooms(event.target.value);
      setItemOffset(0);
   };

   // handleBathroomChange
   const handleBathroomChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setSelectedBathrooms(event.target.value);
      setItemOffset(0);
   };

   // handleAmenityChange
   const handleAmenityChange = (event: ChangeEvent<HTMLInputElement>) => {
      const amenity = event.target.value;

      setSelectedAmenities((prevSelectedAmenities) => {
         if (prevSelectedAmenities.includes(amenity)) {
            return prevSelectedAmenities.filter((a) => a !== amenity);
         } else {
            return [...prevSelectedAmenities, amenity];
         }
      });
   };

   useEffect(() => {
      // This block will be executed after selectedAmenities has been updated.
      setItemOffset(0);
   }, [selectedAmenities]);

   const getSortedProperties = () => {
      let filtered = filteredProperties;

      // Status filtering
      if (status !== null) {
         filtered = filtered.filter((item) => {
            return item.status.toLowerCase().includes(status.toLowerCase());
         });
      }

      // Location filtering
      if (location !== null) {
         filtered = filtered.filter((item) => {
            return item.location.toLowerCase().includes(location.toLowerCase());
         });
      }

      // Bedrooms filtering
      if (selectedBedrooms !== null) {
         filtered = filtered.filter((item) => {
            return item.property_info.bed.toLowerCase().includes(selectedBedrooms.toLowerCase());
         });
      }

      // Bathrooms filtering
      if (selectedBathrooms !== null) {
         filtered = filtered.filter((item) => {
            return item.property_info.bath.toLowerCase().includes(selectedBathrooms.toLowerCase());
         });
      }

      // Amenities filtering
      if (selectedAmenities.length > 0) {
         filtered = filtered.filter((item) => {
            const propertyAmenities = item.amenities || [];
            return selectedAmenities.every((amenity) => propertyAmenities.includes(amenity));
         });
      }

      // Type filtering
      switch (sortOption) {
         case "newest":
            return filtered.filter((item) => item.type === "newest");
         case "best_seller":
            return filtered.filter((item) => item.type === "Best Seller");
         case "best_match":
            return filtered.filter((item) => item.type === "Best Match");
         case "price_low":
            return filtered.sort((a, b) => a.price - b.price);
         case "price_high":
            return filtered.sort((a, b) => b.price - a.price);
         default:
            return filtered;
      }
   };

   const sortedProperties = getSortedProperties();
   const endOffset = itemOffset + itemsPerPage;
   const currentItems = sortedProperties.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(sortedProperties.length / itemsPerPage);

   const handlePageClick = (event: any) => {
      const newOffset = event.selected * itemsPerPage;
      setItemOffset(newOffset);
   };

   // All products
   const allProperties = useSelector(selectProperties);
   const filteredAllProduct = allProperties.filter(item => item.page === "listing_1");

   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const searchingProducts = filteredAllProduct.filter((p) =>
         p.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setProperties(searchingProducts);
   };

   // handle Price
   const maxPrice = all_property.filter(item => item.page === page).reduce((max, item) => {
      return item.price > max ? item.price : max;
   }, 0);
   const [priceValue, setPriceValue] = useState([0, maxPrice]);

   useEffect(() => {
      let filterPrice = all_property.filter((j) => j.price >= priceValue[0] && j.price <= priceValue[1]);
      setProperties(filterPrice)
   }, [priceValue]);

   const handlePriceChange = (val: number[]) => {
      setPriceValue(val)
   }


   const priceRanges: {
      [key: string]: number[];
   } = {
      "1": [10000, 200000],
      "2": [20000, 300000],
      "3": [30000, 400000],
   };

   const handlePriceDropChange = (selectedValue: string) => {
      const selectedRange = priceRanges[selectedValue];
      const newPriceValue = selectedRange ? selectedRange : [0, maxPrice];
      setPriceValue(newPriceValue);
   };

   const resetFilters = () => {
      setSortOption("");
      setItemOffset(0);
      setStatus(null);
      setLocation(null);
      setSelectedBedrooms(null);
      setSelectedBathrooms(null);
      setSelectedAmenities([]);
      setPriceValue([0, maxPrice]);
   };

   return {
      handlePriceDropChange,
      itemOffset,
      sortedProperties,
      currentItems,
      handlePageClick,
      handleSearchChange,
      handleBedroomChange,
      handleLocationChange,
      handleTypeChange,
      handleStatusChange,
      handleBathroomChange,
      handlePriceChange,
      maxPrice,
      priceValue,
      resetFilters,
      selectedAmenities,
      handleAmenityChange,
      pageCount,
   };
};

export default UseShortedProperty;