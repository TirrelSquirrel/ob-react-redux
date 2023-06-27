import React from "react";
import FilterContainer from "../container/FilterContainer";

const FilterOptions = () => {
  
  return (
    <div className="filters">
        {/* FIlter containers */}
        <FilterContainer filter='SHOW_ALL'>
            ALL
        </FilterContainer>
        <FilterContainer filter='SHOW_ACTIVE'>
            ACTIVE
        </FilterContainer>
        <FilterContainer filter='SHOW_COMPLETED'>
            COMPLETED
        </FilterContainer>
    </div>
  )
};



export default FilterOptions;
