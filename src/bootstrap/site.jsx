import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import a from './img/1.png';


import { Col, Container, Row, Form, Card, Navbar, Offcanvas, Nav, NavDropdown, Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap';
const expand = false

export default function Site() {
  return (<>
    <Navbar expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Album</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        
    <Container >
    <h1 className="text-center mb-3">Album example</h1>
      <p className="text-center mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Quis, molestiae atque beatae libero veritatis vel, perspiciatis fugit eos repellat, repudiandae accusantium consequatur magnam.
      Illo fugiat explicabo ipsam temporibus iste nostrum.</p>
      <div className="text-center">
      <Button variant="secondary" className="m-3">Left</Button>
      <Button variant="secondary" className="m-3">Right</Button>
      </div>
        <Row xxl ={6} lg = {4} md = {3} xs = {1}>
            <Col > 
              <Card >
                  <Card.Img variant="top" src={a} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="secondary">Left</Button>
                      <Button variant="secondary">Right</Button>
                    </ButtonGroup>
                  </Card.Body>
              </Card>
            </Col>
            <Col > 
            <Card >
                  <Card.Img variant="top" src={a} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="secondary">Left</Button>
                      <Button variant="secondary">Right</Button>
                    </ButtonGroup>
                  </Card.Body>
              </Card>
            </Col>
            <Col > 
            <Card >
                  <Card.Img variant="top" src={a} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="secondary">Left</Button>
                      <Button variant="secondary">Right</Button>
                    </ButtonGroup>
                  </Card.Body>
              </Card>
            </Col>
            <Col > 
            <Card >
                  <Card.Img variant="top" src={a} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="secondary">Left</Button>
                      <Button variant="secondary">Right</Button>
                    </ButtonGroup>
                  </Card.Body>
              </Card>
            </Col>
            <Col > 
                <Card >
                  <Card.Img variant="top" src={a} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="secondary">Left</Button>
                      <Button variant="secondary">Right</Button>
                    </ButtonGroup>
                  </Card.Body>
              </Card>
            </Col>
            <Col > 
                <Card >
                  <Card.Img variant="top" src={a} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="secondary">Left</Button>
                      <Button variant="secondary">Right</Button>
                    </ButtonGroup>
                  </Card.Body>
              </Card>
            </Col>
            <Col > 
                <Card >
                  <Card.Img variant="top" src={a} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="secondary">Left</Button>
                      <Button variant="secondary">Right</Button>
                    </ButtonGroup>
                  </Card.Body>
              </Card>
            </Col>
            <Col > 
                <Card >
                  <Card.Img variant="top" src={a} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="secondary">Left</Button>
                      <Button variant="secondary">Right</Button>
                    </ButtonGroup>
                  </Card.Body>
              </Card>
            </Col>
            <Col > 
                <Card >
                  <Card.Img variant="top" src={a} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="secondary">Left</Button>
                      <Button variant="secondary">Right</Button>
                    </ButtonGroup>
                  </Card.Body>
              </Card>
            </Col>
            <Col > 
                <Card >
                  <Card.Img variant="top" src={a} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="secondary">Left</Button>
                      <Button variant="secondary">Right</Button>
                    </ButtonGroup>
                  </Card.Body>
              </Card>
            </Col>
            <Col > 
                <Card >
                  <Card.Img variant="top" src={a} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="secondary">Left</Button>
                      <Button variant="secondary">Right</Button>
                    </ButtonGroup>
                  </Card.Body>
              </Card>
            </Col>
            <Col > 
                <Card >
                  <Card.Img variant="top" src={a} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <ButtonGroup aria-label="Basic example">
                      <Button variant="secondary">Left</Button>
                      <Button variant="secondary">Right</Button>
                    </ButtonGroup>
                  </Card.Body>
              </Card>
            </Col>
         </Row>
    </Container>
  </>)
}
