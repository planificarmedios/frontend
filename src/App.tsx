import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { sampleProducts } from './data'

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>tsamazona</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <main>
          <Container className="m-3 mt-2">
            <Row>
              {sampleProducts.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={3}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <h6>{product.name}</h6>
                  <p>
                    ${product.price} En Stock {product.countInStock}{' '}
                  </p>
                </Col>
              ))}
            </Row>
          </Container>
        </main>
      </main>
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </div>
  )
}

export default App
