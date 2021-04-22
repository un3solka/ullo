import React from 'react';
import { SearchWrapper, SearchInput } from './styled';
import searchIcon from '../../assets/topbar/search.svg';
import { Icon } from '../Icon';

export const Search = () => {
  return (
    <SearchWrapper>
      <Icon icon={searchIcon} />
      <SearchInput placeholder="Пошук ресторанів" />
    </SearchWrapper>
  );
};
