import React from 'react';
import { ListItem } from './components/Item';
import { ListWrapper } from './components/styled';
import PropTypes from 'prop-types';

export const List = ({ collection }) => {
  if (!collection.length) {
    return null;
  }
  const listItems = collection.map((item) => (
    <ListItem key={item.id} item={item} />
  ));
  return <ListWrapper>{listItems}</ListWrapper>;
};
List.defaultProps = {
  collection: [],
};

List.propTypes = {
  collection: PropTypes.array,
};
