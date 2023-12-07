import { useReducer, createContext, useEffect } from "react";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const InitialState = {
  all_filters: [],
  filter_products: [],
  category_filters: [],
  selected_filters: [],
};

const FilterProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, InitialState);

// Special Category Filter 
  const getSpecialCat = (category) =>{
    dispatch({type: "SPECIAL_CATEGORY", payload : category});
 }

 // Selected Category Filter 
 const getCatSelection = (category) =>{
  dispatch({type: "SELECTED_CATEGORY", payload : category});
}
// Filter Type
const selectFilterType = (category) =>{
  dispatch({type: "SELECTED_FILTER_TYPE", payload : category});
}




useEffect(()=>{
  fetch("Filter.json")
  .then((response)=> response.json())
  .then((data)=> {
    dispatch({type : "FILTER_DATA", payload : data});
    getSpecialCat("2-WHEELER")       // By default "2-Wheeler" Data is selected
  });
},[])


  
  return <FilterContext.Provider value={{ ...state,getSpecialCat,getCatSelection,selectFilterType}}>{children}</FilterContext.Provider>;
};

export { FilterProvider, FilterContext };
