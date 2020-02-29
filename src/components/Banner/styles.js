import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Background = styled.div`
  height: 500px;
  background: url('${props => props.img}');
  z-index: 1;
  background-size: cover;
  background-position: center;
`;

export const Title = styled.div`
  position: absolute;
  top: 190px;
  right: 0;
  left: 0;
  color: #FAFAFA;
  text-align: center;
  font-size: 50px;
  font-weight:  bold;
  text-shadow: 1px 1px 1px #CCC;
  text-transform: uppercase;
  z-index: 5;
`;

export const Overlay = styled.div`
  position: absolute;
  background: black;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: .4;
  z-index: 2;
`;
