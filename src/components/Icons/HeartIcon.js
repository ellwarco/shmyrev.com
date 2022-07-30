import styled, { keyframes } from 'react-emotion';
import FaHeart from 'react-icons/lib/fa/heart';

const beat = keyframes`
  to { transform: scale(1.2); }
`;

const HeartIcon = styled(FaHeart)`
  animation: ${beat} 0.9s infinite alternate;
  color: #D81B60;
  margin: 0 4px;
`;

export default HeartIcon;