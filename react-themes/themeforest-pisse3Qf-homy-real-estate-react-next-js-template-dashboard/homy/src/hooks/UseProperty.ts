import { useState } from "react";
import { useSelector } from "react-redux";
import { selectProperties } from "../redux/features/propertySlice";

const UseProperty = () => {
   const [properties, setProperties] = useState(useSelector(selectProperties))
   return {
      properties,
      setProperties
   }
}

export default UseProperty;
