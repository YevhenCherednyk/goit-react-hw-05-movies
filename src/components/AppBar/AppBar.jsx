import { Box } from 'components/Layout/Box';
import { NavItem } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

const AppBar = () => {
  return (
    <Box as="header" p={4}>
      <Box as="nav" display="flex" gridGap={3}>
        {navItems.map(({ href, text }) => {
          return (
            <NavItem to={href} key={href}>
              {text}
            </NavItem>
          );
        })}
      </Box>
    </Box>
  );
};

export default AppBar;
