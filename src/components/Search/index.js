import React from 'react';
import { Wrapper, SearchWrapper, SearchInput, CancelButton } from './styled';
import searchIcon from '../../assets/topbar/search.svg';
import { Icon } from '../Icon';
import PropTypes from 'prop-types';

export const Search = ({ onFocus, onCancel, onChange, showCancelButton }) => {
  return (
    <Wrapper>
      <SearchWrapper>
        <Icon icon={searchIcon} />
        <SearchInput
          onFocus={onFocus}
          onChange={onChange}
          placeholder="Пошук ресторанів"
        />
      </SearchWrapper>
      {showCancelButton && (
        <CancelButton onClick={onCancel}>Скасувати</CancelButton>
      )}
    </Wrapper>
  );
};

Search.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onCancel: PropTypes.func,
  showCancelButton: PropTypes.bool,
};
