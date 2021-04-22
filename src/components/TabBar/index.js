import React from 'react';
import { TabBarWrapper } from './styled';
import { TabButton } from './components/TabButton';
import searchIcon from '../../assets/tabbar/searchIcon.svg';
import listIcon from '../../assets/tabbar/listIcon.svg';
import mapIcon from '../../assets/tabbar/mapIcon.svg';
import aboutIcon from '../../assets/tabbar/aboutIcon.svg';

export const TabBar = () => {
  return (
    <TabBarWrapper>
      <TabButton icon={searchIcon} label="Пошук" />
      <TabButton icon={listIcon} label="Список" />
      <TabButton icon={mapIcon} label="Карта" />
      <TabButton icon={aboutIcon} label="О нас" />
    </TabBarWrapper>
  );
};
