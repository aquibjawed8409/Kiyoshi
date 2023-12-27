const FilterReducer = (state, action) => {
  switch (action.type) {
    // Set the Initial Data
    case "FILTER_DATA": {
      let specialCategory = action.payload.filter((curElem, i) => {
        return curElem.Category == "special";
      });
      let topProduct = action.payload.filter((curElem,i)=>{
        return curElem.TopProduct === true
      })
      return {
        ...state,
        all_filters: action.payload,
        filter_products: action.payload,
        selected_filters: action.payload,
        category_filters: specialCategory,
        single_product: action.payload,
        top_product : topProduct
      };
    }

    case "SPECIAL_CATEGORY": {
      let specialCategoryFilter = state.category_filters.filter(
        (curElem, i) => {
          return curElem.Make === action.payload;
        }
      );

      return {
        ...state,
        filter_products: specialCategoryFilter,
      };
    }

    case "SELECTED_CATEGORY": {
      const { all_filters } = state;
      let selected_filter = [...all_filters]; // Copy of original filter
      let categoryWiseFilter = selected_filter.filter((curElem, i) => {
        return curElem.Make === action.payload;
      });


      return {
        ...state,
        selected_filters: categoryWiseFilter,
      };
    }

    case "SELECTED_FILTER_TYPE": {
      const { all_filters } = state;
      let selected_filter = [...all_filters]; // Copy of original filter

      let filterType = selected_filter.filter((curElem, i) => {
        return curElem.FilterType === action.payload;
      });
      return {
        ...state,
        selected_filters: filterType,
      };
    }

    case "GET_SINGLE_DATA": {
      return {
        ...state,
        single_product: action.payload,
      };
    }

    // Search Filter
    case "SEARCH_FILTER": {
      let { all_filters } = state;
      let searchFilter = [...all_filters];

      if (action.payload) {
        searchFilter = searchFilter.filter((elem) => {
          return elem.Model.toLowerCase().includes(
            action.payload.toLowerCase()
          );
        });
      }

      return {
        ...state,
        selected_filters: searchFilter,
      };
    }

    default:
      return {
        ...state,
      };
  }
};

export default FilterReducer;
