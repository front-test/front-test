import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const NavbarWrapper = styled.nav`
  button {
    font-size: 0.75rem;
  }

  .active-page {
    color: #b646e4;
  }
`;

export const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 30,
  },
  appbar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    position: 'static',
  },
  list: {
    width: 250
  }
});