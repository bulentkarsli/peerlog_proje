import React, {Component} from 'react';
import Page1 from "./GirisYap";
import Page2 from "./UyeOl"
import Page3 from "./KisiEkle";
import Page4 from "./KisiGoster";
import Page5 from "./SifreGetir";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand>PEERLOG</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/KisiGoster">Kişiler</Nav.Link>
                            <Nav.Link href="/KisiEkle">Kişi Ekle</Nav.Link>
                        </Nav>
                        <Navbar.Toggle/>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                <a href="/UyeOl" style={
                                    {
                                        padding: "20px",

                                    }
                                }>Üye Ol</a>
                            </Navbar.Text>
                            <Navbar.Text>
                                <a href="/">Çıkış Yap</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Page1}>

                        </Route>
                        <Route path="/UyeOl" component={Page2}>

                        </Route>
                        <Route path="/KisiEkle" component={Page3}>

                        </Route>
                        <Route path="/KisiGoster" component={Page4}>

                        </Route>
                        <Route path="/SifreGetir" component={Page5}>

                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;