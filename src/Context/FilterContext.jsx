import { useReducer, createContext, useEffect } from "react";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

// Get the selected Filters from local storage
const getStorageData = () =>{
  let newSingleData = localStorage.getItem("selectFilter");
  let parsedData = JSON.parse(newSingleData);
  return parsedData;
}

const InitialState = {
  all_filters: [],
  filter_products: [],
  category_filters: [],
  selected_filters: [],
  single_product : getStorageData(),
  top_product : [],
  text : "",
};

const FilterProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, InitialState);

// Special Category Filter 
  const getSpecialCat = (category) =>{
    dispatch({type: "SPECIAL_CATEGORY", payload : category});
 }

 // Selected Category Filter (2,3,4, Heavy Wheeler)
 const getCatSelection = (category) =>{
  dispatch({type: "SELECTED_CATEGORY", payload : category});
}
// Filter Type (Air /Oil / Cabin)
const selectFilterType = (category) =>{
  dispatch({type: "SELECTED_FILTER_TYPE", payload : category});
}

// Search FIlter
const searchFilter = (e) =>{
  const value = e.target.value;
  dispatch({type: "SEARCH_FILTER", payload : value});
}


// Single Product
const getSingleProduct = async (data) =>{
 dispatch({type : "GET_SINGLE_DATA", payload : data});
}

// Set the Selected Filter in local storage
useEffect(()=>{
localStorage.setItem("selectFilter", JSON.stringify(state.single_product))
},[state.single_product])

useEffect(()=>{
  fetch("Filter.json")
  .then((response)=> response.json())
  .then((data)=> {
    dispatch({type : "FILTER_DATA", payload : data});
    getSpecialCat("2-WHEELER")       // By default "2-Wheeler" Data is selected
  });
},[])


  
  return <FilterContext.Provider value={{ ...state,getSpecialCat,getCatSelection,selectFilterType,getSingleProduct,searchFilter}}>{children}</FilterContext.Provider>;
};

export { FilterProvider, FilterContext };
