import React, { useState, useEffect } from 'react';
import { TopBarWrapper } from './styled';
import { Search } from '../Search';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  searchEnd,
  searchStart,
  doSearch,
} from '../../redux/actions/searchActions';
import useDebounce from '../../utils/hooks/use-debounce';

export const TopBarComponent = ({
  showCancelButton,
  doSearch,
  searchStart,
  searchEnd,
}) => {
  const [value, setValue] = useState('');
  const debounceValue = useDebounce(value, 500);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onCancel = () => {
    searchEnd();
  };
  const onFocus = () => {
    searchStart();
  };

  useEffect(
    () => {
      if (debounceValue) {
        doSearch(debounceValue);
      }
    },
    [debounceValue, doSearch], // Only call effect if debounced search term changes
  );
  return (
    <TopBarWrapper>
      <Search
        onFocus={onFocus}
        onCancel={onCancel}
        onChange={onChange}
        showCancelButton={showCancelButton}
      />
    </TopBarWrapper>
  );
};

const mapStateToProps = (store) => ({
  showCancelButton: store.searchState.search,
});
const mapDispatchProps = (dispatch) =>
  bindActionCreators({ doSearch, searchStart, searchEnd }, dispatch);
export const TopBar = connect(
  mapStateToProps,
  mapDispatchProps,
)(TopBarComponent);
