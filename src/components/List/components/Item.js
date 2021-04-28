import React from 'react';
import {
  InfoBlock,
  ItemWrapper,
  Logo,
  Title,
  AdditionalInfo,
  CostTimeBlock,
} from './styled';

export const ListItem = ({ item }) => {
  return (
    <ItemWrapper>
      <Logo src={item.logo} />
      <InfoBlock>
        <Title>{item.name}</Title>
        <AdditionalInfo>
          {item.type} - {item.kitchen.join(',')}
        </AdditionalInfo>
        <CostTimeBlock>
          {item.cost} ₴ ::: {item.timeStart} - {item.timeEnd}
        </CostTimeBlock>
      </InfoBlock>
    </ItemWrapper>
  );
};
