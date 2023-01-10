import { Box } from './Box';
import AppBar from 'components/AppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Box>
      <AppBar />
      <Outlet />
    </Box>
  );
};

export default Layout;
