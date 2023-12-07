// import { createContext, useContext, useReducer } from "react";
// import reducer from "../Reducer/ProductPageReducer"
// import { FilterContext } from "./FilterContext";

// const ProductPageContext = createContext();

// const InitialState  = {

// }


// const ProductPageProvider =({children})=>{

//     const {all_filters} = useContext(FilterContext)

//     const [state, dispatch] = useReducer(reducer, InitialState);




//     useEffect(()=>{
//         dispatch({type : "GET_ALL_PRODUCT" , payload : all_filters})
//     },[])

//     return <ProductPageContext.Provider value={...state}>{children}</ProductPageContext.Provider>
// }

// export {ProductPageContext,ProductPageProvider }