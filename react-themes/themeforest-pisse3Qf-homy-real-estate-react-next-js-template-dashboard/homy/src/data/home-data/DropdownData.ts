interface InputField {
   id: number;
   page: string;
   col?: string;
   border_lg?: string;
   label: string;
   options: {
      value: string;
      text: string;
   }[];
   className?: string;
}[]

const dropdoun_data: InputField[] = [
   {
      id: 1,
      page: "home_1",
      col: "col-xl-3",
      label: "I’m looking to...",
      options: [{ value: "1", text: "Buy Apartments" }, { value: "2", text: "Rent Condos" }, { value: "3", text: "Sell Houses" }, { value: "4", text: "Sell Houses" }, { value: "5", text: "Rent Industrial" }, { value: "6", text: "Sell Villas" },],
   },
   {
      id: 2,
      page: "home_1",
      col: "col-xl-4",
      label: "Location",
      options: [{ value: "1", text: "Dhanmondi, Dhaka" }, { value: "2", text: "Acapulco, Mexico" }, { value: "3", text: "Berlin, Germany" }, { value: "4", text: "Cannes, France" }, { value: "5", text: "Delhi, India" }, { value: "6", text: "Giza, Egypt" }, { value: "7", text: "Havana, Cuba" },],
      className: "location",
   },
   {
      id: 3,
      page: "home_1",
      col: "col-xl-3",
      border_lg: "border-lg-0",
      label: "Price Range",
      options: [{ value: "1", text: "$10,000 - $200,000" }, { value: "2", text: "$200,000 - $300,000" }, { value: "3", text: "$300,000 - $400,000" },],
   },

   // home_2_tab_1

   {
      id: 1,
      page: "home_2_tab_1",
      col: "col-xl-2",
      label: "I’m looking to...",
      options: [{ value: "1", text: "Buy Apartments" }, { value: "2", text: "Rent Condos" }, { value: "3", text: "Sell Houses" }, { value: "4", text: "Sell Houses" }, { value: "5", text: "Rent Industrial" }, { value: "6", text: "Sell Villas" },],
   },
   {
      id: 2,
      page: "home_2_tab_1",
      col: "col-xl-3",
      label: "Location",
      options: [{ value: "1", text: "Dhanmondi, Dhaka" }, { value: "2", text: "Acapulco, Mexico" }, { value: "3", text: "Berlin, Germany" }, { value: "4", text: "Cannes, France" }, { value: "5", text: "Delhi, India" }, { value: "6", text: "Giza, Egypt" }, { value: "7", text: "Havana, Cuba" },],
      className: "location",
   },
   {
      id: 3,
      page: "home_2_tab_1",
      col: "col-xl-3",
      label: "Price Range",
      options: [{ value: "1", text: "$10,000 - $200,000" }, { value: "2", text: "$200,000 - $300,000" }, { value: "3", text: "$300,000 - $400,000" },],
   },

   // home_2_tab_2

   {
      id: 1,
      page: "home_2_tab_2",
      col: "col-xl-2",
      label: "I’m looking to...",
      options: [{ value: "1", text: "Rent Industrial" }, { value: "2", text: "Rent Condos" }, { value: "3", text: "Sell Houses" }, { value: "4", text: "Sell Houses" }, { value: "5", text: "Buy Apartments" }, { value: "6", text: "Sell Villas" },],
   },
   {
      id: 2,
      page: "home_2_tab_2",
      col: "col-xl-3",
      label: "Location",
      options: [{ value: "1", text: "Acapulco, Mexico" }, { value: "2", text: "Dhanmondi, Dhaka" }, { value: "3", text: "Berlin, Germany" }, { value: "4", text: "Cannes, France" }, { value: "5", text: "Delhi, India" }, { value: "6", text: "Giza, Egypt" }, { value: "7", text: "Havana, Cuba" },],
      className: "location",
   },
   {
      id: 3,
      page: "home_2_tab_2",
      col: "col-xl-3",
      label: "Price Range",
      options: [{ value: "1", text: "$200,000 - $300,000" }, { value: "2", text: "$10,000 - $200,000" }, { value: "3", text: "$300,000 - $400,000" },],
   },

   // home_3_tab_1

   {
      id: 1,
      page: "home_3_tab_1",
      col: "mb-25",
      label: "I’m looking to...",
      options: [{ value: "1", text: "Buy Apartments" }, { value: "2", text: "Rent Condos" }, { value: "3", text: "Sell Houses" }, { value: "4", text: "Sell Houses" }, { value: "5", text: "Rent Industrial" }, { value: "6", text: "Sell Villas" },],
   },
   {
      id: 2,
      page: "home_3_tab_1",
      col: "mb-25",
      label: "Location",
      options: [{ value: "1", text: "Dhanmondi, Dhaka" }, { value: "2", text: "Acapulco, Mexico" }, { value: "3", text: "Berlin, Germany" }, { value: "4", text: "Cannes, France" }, { value: "5", text: "Delhi, India" }, { value: "6", text: "Giza, Egypt" }, { value: "7", text: "Havana, Cuba" },],
      className: "location",
   },
   {
      id: 3,
      page: "home_3_tab_1",
      col: "mb-50 lg-mb-30",
      border_lg: "border-lg-0",
      label: "Price Range",
      options: [{ value: "1", text: "$10,000 - $200,000" }, { value: "2", text: "$200,000 - $300,000" }, { value: "3", text: "$300,000 - $400,000" },],
   },

   // home_3_tab_2

   {
      id: 1,
      page: "home_3_tab_2",
      col: "mb-25",
      label: "I’m looking to...",
      options: [{ value: "1", text: "Rent Condos" }, { value: "2", text: "Buy Apartments" }, { value: "3", text: "Sell Houses" }, { value: "4", text: "Sell Houses" }, { value: "5", text: "Rent Industrial" }, { value: "6", text: "Sell Villas" },],
   },
   {
      id: 2,
      page: "home_3_tab_2",
      col: "mb-25",
      label: "Location",
      options: [{ value: "1", text: "Acapulco, Mexico" }, { value: "2", text: "Dhanmondi, Dhaka" }, { value: "3", text: "Berlin, Germany" }, { value: "4", text: "Cannes, France" }, { value: "5", text: "Delhi, India" }, { value: "6", text: "Giza, Egypt" }, { value: "7", text: "Havana, Cuba" },],
      className: "location",
   },
   {
      id: 3,
      page: "home_3_tab_2",
      col: "mb-50 lg-mb-30",
      border_lg: "border-lg-0",
      label: "Price Range",
      options: [{ value: "1", text: "$200,000 - $300,000" }, { value: "2", text: "$10,000 - $200,000" }, { value: "3", text: "$300,000 - $400,000" },],
   },

   // home_3_tab_3

   {
      id: 1,
      page: "home_3_tab_3",
      col: "mb-25",
      label: "I’m looking to...",
      options: [{ value: "1", text: "Sell Houses" }, { value: "2", text: "Rent Condos" }, { value: "3", text: "Buy Apartments" }, { value: "4", text: "Sell Houses" }, { value: "5", text: "Rent Industrial" }, { value: "6", text: "Sell Villas" },],
   },
   {
      id: 2,
      page: "home_3_tab_3",
      col: "mb-25",
      label: "Location",
      options: [{ value: "1", text: "Berlin, Germany" }, { value: "2", text: "Acapulco, Mexico" }, { value: "3", text: "Dhanmondi, Dhaka" }, { value: "4", text: "Cannes, France" }, { value: "5", text: "Delhi, India" }, { value: "6", text: "Giza, Egypt" }, { value: "7", text: "Havana, Cuba" },],
      className: "location",
   },
   {
      id: 3,
      page: "home_3_tab_3",
      col: "mb-50 lg-mb-30",
      border_lg: "border-lg-0",
      label: "Price Range",
      options: [{ value: "1", text: "$300,000 - $400,000" }, { value: "2", text: "$200,000 - $300,000" }, { value: "3", text: "$10,000 - $200,000" },],
   },

   // home_5_tab_1

   {
      id: 1,
      page: "home_5_tab_1",
      col: "col-lg-3",
      label: "I’m looking to...",
      border_lg: "border-left",
      options: [{ value: "1", text: "Buy Apartments" }, { value: "2", text: "Rent Condos" }, { value: "3", text: "Sell Houses" }, { value: "4", text: "Sell Houses" }, { value: "5", text: "Rent Industrial" }, { value: "6", text: "Sell Villas" },],
   },
   {
      id: 2,
      page: "home_5_tab_1",
      col: "col-lg-4",
      label: "Location",
      border_lg: "border-left",
      options: [{ value: "1", text: "Dhanmondi, Dhaka" }, { value: "2", text: "Acapulco, Mexico" }, { value: "3", text: "Berlin, Germany" }, { value: "4", text: "Cannes, France" }, { value: "5", text: "Delhi, India" }, { value: "6", text: "Giza, Egypt" }, { value: "7", text: "Havana, Cuba" },],
      className: "location",
   },
   {
      id: 3,
      page: "home_5_tab_1",
      col: "col-xl-3 col-lg-4",
      label: "Price Range",
      options: [{ value: "1", text: "$10,000 - $200,000" }, { value: "2", text: "$200,000 - $300,000" }, { value: "3", text: "$300,000 - $400,000" },],
   },

   // home_5_tab_2

   {
      id: 1,
      page: "home_5_tab_2",
      col: "col-lg-3",
      label: "I’m looking to...",
      border_lg: "border-left",
      options: [{ value: "1", text: "Rent Condos" }, { value: "2", text: "Buy Apartments" }, { value: "3", text: "Sell Houses" }, { value: "4", text: "Sell Houses" }, { value: "5", text: "Rent Industrial" }, { value: "6", text: "Sell Villas" },],
   },
   {
      id: 2,
      page: "home_5_tab_2",
      col: "col-lg-4",
      label: "Location",
      border_lg: "border-left",
      options: [{ value: "1", text: "Acapulco, Mexico" }, { value: "2", text: "Dhanmondi, Dhaka" }, { value: "3", text: "Berlin, Germany" }, { value: "4", text: "Cannes, France" }, { value: "5", text: "Delhi, India" }, { value: "6", text: "Giza, Egypt" }, { value: "7", text: "Havana, Cuba" },],
      className: "location",
   },
   {
      id: 3,
      page: "home_5_tab_2",
      col: "col-xl-3 col-lg-4",
      label: "Price Range",
      options: [{ value: "1", text: "$200,000 - $300,000" }, { value: "2", text: "$10,000 - $200,000" }, { value: "3", text: "$300,000 - $400,000" },],
   },

   // home_6_tab_1

   {
      id: 1,
      page: "home_6_tab_1",
      col: "col-xxl-2",
      label: "I’m looking to...",
      options: [{ value: "1", text: "Buy Apartments" }, { value: "2", text: "Rent Condos" }, { value: "3", text: "Sell Houses" }, { value: "4", text: "Sell Houses" }, { value: "5", text: "Rent Industrial" }, { value: "6", text: "Sell Villas" },],
   },
   {
      id: 2,
      page: "home_6_tab_1",
      label: "Location",
      options: [{ value: "1", text: "Dhanmondi, Dhaka" }, { value: "2", text: "Acapulco, Mexico" }, { value: "3", text: "Berlin, Germany" }, { value: "4", text: "Cannes, France" }, { value: "5", text: "Delhi, India" }, { value: "6", text: "Giza, Egypt" }, { value: "7", text: "Havana, Cuba" },],
      className: "location",
   },
   {
      id: 3,
      page: "home_6_tab_1",
      border_lg: "border-lg-0",
      label: "Price Range",
      options: [{ value: "1", text: "$10,000 - $200,000" }, { value: "2", text: "$200,000 - $300,000" }, { value: "3", text: "$300,000 - $400,000" },],
   },

   // home_6_tab_2

   {
      id: 1,
      page: "home_6_tab_2",
      col: "col-xxl-2",
      label: "I’m looking to...",
      options: [{ value: "1", text: "Rent Condos" }, { value: "2", text: "Buy Apartments" }, { value: "3", text: "Sell Houses" }, { value: "4", text: "Sell Houses" }, { value: "5", text: "Rent Industrial" }, { value: "6", text: "Sell Villas" },],
   },
   {
      id: 2,
      page: "home_6_tab_2",
      label: "Location",
      options: [{ value: "1", text: "Acapulco, Mexico" }, { value: "2", text: "Dhanmondi, Dhaka" }, { value: "3", text: "Berlin, Germany" }, { value: "4", text: "Cannes, France" }, { value: "5", text: "Delhi, India" }, { value: "6", text: "Giza, Egypt" }, { value: "7", text: "Havana, Cuba" },],
      className: "location",
   },
   {
      id: 3,
      page: "home_6_tab_2",
      border_lg: "border-lg-0",
      label: "Price Range",
      options: [{ value: "1", text: "$200,000 - $300,000" }, { value: "2", text: "$10,000 - $200,000" }, { value: "3", text: "$300,000 - $400,000" },],
   },

   // home_6_tab_3

   {
      id: 1,
      page: "home_6_tab_3",
      col: "col-xxl-2",
      label: "I’m looking to...",
      options: [{ value: "1", text: "Sell Houses" }, { value: "2", text: "Rent Condos" }, { value: "3", text: "Buy Apartments" }, { value: "4", text: "Sell Houses" }, { value: "5", text: "Rent Industrial" }, { value: "6", text: "Sell Villas" },],
   },
   {
      id: 2,
      page: "home_6_tab_3",
      label: "Location",
      options: [{ value: "1", text: "Berlin, Germany" }, { value: "2", text: "Acapulco, Mexico" }, { value: "3", text: "Dhanmondi, Dhaka" }, { value: "4", text: "Cannes, France" }, { value: "5", text: "Delhi, India" }, { value: "6", text: "Giza, Egypt" }, { value: "7", text: "Havana, Cuba" },],
      className: "location",
   },
   {
      id: 3,
      page: "home_6_tab_3",
      border_lg: "border-lg-0",
      label: "Price Range",
      options: [{ value: "1", text: "$300,000 - $400,000" }, { value: "2", text: "$200,000 - $300,000" }, { value: "3", text: "$10,000 - $200,000" },],
   },
];

export default dropdoun_data;