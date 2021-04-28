import styled from 'styled-components';
import { TOP_BAR_HEIGHT } from '../../CONSTANTS';

export const TopBarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 8px 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  height: ${TOP_BAR_HEIGHT}px;
`;
