import { Outlet } from 'react-router-dom';
import { Navigation, Container } from 'components';

const Header = () => {
  return (
    <div>
      <Container>
        <Navigation />
      </Container>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Header;
