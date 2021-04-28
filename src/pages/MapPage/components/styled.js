import styled from 'styled-components';
import { TOP_BAR_HEIGHT } from '../../../CONSTANTS';

export const SearchPanel = styled.div`
  position: absolute;
  top: ${TOP_BAR_HEIGHT}px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #fff;
  height: ${(props) => (props.showSearch ? '100%' : '0')};
  transition: height 0.3s;
  border-top: 1px solid rgb(0 0 0 / 8%);
`;

export const MapWrapper = styled.div`
  display: flex;
  flex: 1;
`;
