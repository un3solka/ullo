import React from 'react';
import PropTypes from 'prop-types';
import { TabButtonWrapper, TabButtonLabel } from './styled';
import { Icon } from '../../Icon';

export const TabButton = ({ icon, label }) => {
  return (
    <TabButtonWrapper>
      <Icon icon={icon} />
      <TabButtonLabel>{label}</TabButtonLabel>
    </TabButtonWrapper>
  );
};

TabButton.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
};
