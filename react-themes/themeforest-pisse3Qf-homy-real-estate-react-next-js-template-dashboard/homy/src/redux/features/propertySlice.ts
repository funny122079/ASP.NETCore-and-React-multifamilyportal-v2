import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import properties from '@/data/inner-data/ListingData';

interface Property {
   id: number;
}

interface PropertyState {
   properties: Property[] | any[];
   property: Property | {};
}

const initialState: PropertyState = {
   properties: properties,
   property: {},
};

export const propertySlice = createSlice({
   name: 'properties',
   initialState,
   reducers: {
      single_property: (state, action: PayloadAction<number>) => {
         state.property = state.properties.find((p) => Number(p.id) === Number(action.payload)) || {};
      },
   },
});

export const { single_property } = propertySlice.actions;

// Selectors
export const selectProperties = (state: { properties: PropertyState }) => state?.properties?.properties;
export const selectProperty = (state: { properties: PropertyState }) => state?.properties?.property;

export default propertySlice.reducer;