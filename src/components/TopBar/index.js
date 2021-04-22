import React from 'react';
import { TopBarWrapper } from './styled';
import { Search } from '../Search';

export const TopBar = () => {
  return (
    <TopBarWrapper>
      <Search />
    </TopBarWrapper>
  );
};
