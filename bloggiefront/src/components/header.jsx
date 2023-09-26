import Nav from 'react-bootstrap/Nav';
import './Header.css';

function Header() {
  return (
    <Nav
    className='header justify-content-center'
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item >
        <Nav.Link className='header-text' href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='header-text' eventKey="/create">Create</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='header-text' eventKey="/profile">Profile</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='header-text' eventKey="/myposts">MyPosts</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='header-text' eventKey="/logout" disabled>
          Logout
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;