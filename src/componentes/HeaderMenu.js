import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export function HeaderMenu() {
  return (
    <>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#" class="text-light">
            <img
              alt=""
              src="logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderMenu;