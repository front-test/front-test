import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { respondTo } from './_respondTo';
import IntroBG from '../assets/7566@2x.png';

export const IntroWrapper = styled.header`
  max-width: 700px;
  min-height: 600px;
  padding: 0 20px;
  margin: 80px auto 0;
  text-align: center;
  background: url(${IntroBG});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center bottom;

  ${respondTo.sm`
    min-height: 650px;
	`}

  p {
    margin: 20px auto;
    max-width: 600px;
  }
`;

export const IntroButton = styled(Button)`
  width: 100%;
  max-width: 300px;
  background: linear-gradient(90deg, #724df7, #d726d7);
  color: white;
  text-transform: none;
`;