import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { setSpendFilter } from '../../actions';
import { RangeInput } from '../../common';
import './RangeFilter.css';

interface RangeFilterProps {}

const RangeFilter: React.FC<RangeFilterProps> = React.memo(() => {
  const { state, dispatch } = useAppContext();

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSpendFilter(Number(e.target.value)));
  };

  return (
    <div className="range-slider">
      <h1>Filters</h1>
      <h3>Spending</h3>
      <RangeInput
        min={state.filters.minSpend} 
        max={state.filters.maxSpend}
        value={state.filters.spend}
        onChange={handleRangeChange}
      />
    </div>
  );
});

export default RangeFilter;
