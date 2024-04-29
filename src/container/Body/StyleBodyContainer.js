import styled from 'styled-components'
import background from '../../assets/grafi.png'

export const StyleBodyContainer = styled.div`
  background-image: url(${background});
  background-attachment: fixed;
  width: 100%;
  height: 100%;
 background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;

  &::after{
    position: absolute;
    background-color: rgba(0,0,0, 0.7);
    background-attachment: fixed;
    top: 0;
    left: 0;
    width: 100%;
  height: 100%;
  z-index: -1;
  content: '';
  }
`
