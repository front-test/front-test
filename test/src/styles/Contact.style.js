import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { WorksButton } from './Works.style';

export const ContactWrapper = styled.section`
  margin: 200px auto 50px;
  text-align: center;
  padding: 0 20px;
  max-width: 800px;

  .contact-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    button {
      margin-top: 30px;
    }
  }
`;

export const ContactButton = styled(WorksButton)``;

export const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3,2),
    },
  },
  textField: {
    width: '45%',

    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));
