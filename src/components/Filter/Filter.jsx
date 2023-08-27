import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'store/filter/filterSlice';
import { FilterWrap, FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const inputFilter = e => {
    const filterValue = e.target.value;
    dispatch(setFilter(filterValue.toLowerCase()));
  };
  return (
    <FilterWrap>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" name="filter" onChange={inputFilter} />
    </FilterWrap>
  );
};

export default Filter;
