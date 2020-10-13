import styled from 'styled-components';
import { respondTo } from './_respondTo';
import Button from '@material-ui/core/Button';

export const WorksWrapper = styled.section`
  display: flex;
  justify-content: 'space-between';
  align-content: 'center';
  margin: 200px auto 0;
  padding: 0 10%;

  ${respondTo.md`
    flex-wrap: wrap;
	`}

  ${respondTo.sm`
    padding: 20px;
	`}

  .works-desc {
    width: 45%;

    ${respondTo.md`
      width: 100%;
	  `}
  }

  .works-img {
    width: 50%;
    padding-left: 20px;
    display: flex;
    justify-content: flex-end;
    align-self: center;

    & img {
      width: 100%;
      max-width: 450px;
    }

    ${respondTo.md`
      width: 100%;
      margin-top: 50px;
      padding: 0;
      justify-content: center;
	  `}
  }
`;

export const WorksButton = styled(Button)`
  width: 150px;
  background: linear-gradient(90deg, #724df7, #d726d7);
  color: white;
  text-transform: none;
`;
