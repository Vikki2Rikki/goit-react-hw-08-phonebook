import React from 'react';
//import { useDispatch } from 'react-redux';

const Filter = () => {
  //   const dispatch = useDispatch();
  //   const inputFilter = e => {
  //     const filterValue = e.target.value;
  //  dispatch(setFilter(filterValue.toLowerCase()));
  //};
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input type="text" name="filter" />
    </div>
  );
};

export default Filter;
