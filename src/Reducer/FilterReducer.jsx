const FilterReducer = (state, action) => {

  switch (action.type)  {

    // Set the Initial Data
    case "FILTER_DATA" : {

      let specialCategory = action.payload.filter((curElem,i)=>{
          return  curElem.Category == "special"
          
        })
        // console.log(specialCategory)
      return {
        ...state,
        all_filters : action.payload,
        filter_products : action.payload,
        selected_filters : action.payload,
        category_filters : specialCategory
      }
    }

    case "SPECIAL_CATEGORY" : {
      let specialCategoryFilter = state.category_filters.filter((curElem, i) =>{
        return curElem.Make === action.payload
      })
      // console.log(categoryWiseFilter)
        
      return {
        ...state,
        filter_products : specialCategoryFilter,
      }
    }

    case "SELECTED_CATEGORY" :{

      const {all_filters} = state
      let selected_filter = [...all_filters]   // Copy of original filter
      let categoryWiseFilter = selected_filter.filter((curElem, i) =>{
        return curElem.Make === action.payload
      })

      // console.log(categoryWiseFilter)

      return {
        ...state,
        selected_filters : categoryWiseFilter
      }
    }

    case "SELECTED_FILTER_TYPE" : {
      const {all_filters} = state
      let selected_filter = [...all_filters]   // Copy of original filter

      let filterType = selected_filter.filter((curElem, i) =>{
        return curElem.FilterType === action.payload
      })
      console.log(filterType)
      return {
        ...state,
        selected_filter : filterType
      }
    }






    default :  
    return {
      ...state
    }
  }




  
}

export default FilterReducer
