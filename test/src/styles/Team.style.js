import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const TeamWrapper = styled.section`
  margin: 200px auto 0;
  text-align: center;
  padding: 0 20px;
`;

export const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 400,
    margin: 'auto',
    paddingTop: 20
  },
  gridContainer: {
    width: '100%!important',
    margin: '0!important',
  },
  cardMedia: {
    width: 200,
    height: 200,
    margin: 'auto'
  },
  cardContent: {
    padding: '20px 30px 40px!important',
  }
});