import React, {} from "react";
import {Link} from "react-router-dom";
import {Button, Card, Col, Container, Form, Navbar, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function GirisYap() {

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>PEERLOG</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a href="/UyeOl" style={
                                {
                                    "padding": "20px",
                                }
                            }>Üye Ol</a>
                        </Navbar.Text>
                        <Navbar.Text>
                            <a href="/">Giriş Yap</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className={"container"}>
                <div className={"justify-content-md-center row"}>
                    <div className={"col-lg-6 col-md-auto"}>
                        <Card className={"m-5"} style={
                            {"background-color": "white"}
                        }>
                            <div className="bg-secondary card-header">
                                <div className="text-white card-title h5"
                                     style={{"text-align": "center"}}>Giriş Yapınız
                                </div>
                            </div>

                            <div className={"container"}>
                                <div className={"justify-content-md-center row"}>
                                    <div className={"col-lg-10 col-md-auto"}>
                                        <Form>
                                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" style={
                                                {
                                                    "padding-left": "12.5px",
                                                    "marginTop": "20px"
                                                }
                                            }>
                                                <Form.Label column sm="4">*Kullanıcı Adı :</Form.Label>
                                                <Col sm="8">
                                                    <Form.Control type="email" placeholder="E-posta Giriniz"/>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"
                                                        style={
                                                            {
                                                                "padding-left": "12.5px",
                                                                "marginTop": "20px"
                                                            }
                                                        }>
                                                <Form.Label column sm="4">*Şifre :</Form.Label>
                                                <Col sm="8">
                                                    <Form.Control type="password" placeholder="Şifre Giriniz"/>
                                                </Col>
                                            </Form.Group>

                                            <div className={"container"}>
                                                <div className={"justify-content-md-center row"}>
                                                    <div className={"col-lg-20 col-md-auto"}>
                                                        <Link to="/KisiGoster">
                                                            <Button type={"submit"} variant="primary" style={
                                                                {
                                                                    "margin-bottom": "10px",
                                                                    "margin-top": "30px",
                                                                    "margin-right": "110px"
                                                                }
                                                            }>Giriş Yap</Button>{' '}
                                                        </Link>
                                                        <Link to="/SifreGetir">
                                                            <Button type={"button"} variant="primary" style={
                                                                {
                                                                    "margin-bottom": "10px",
                                                                    "margin-top": "30px",
                                                                    "background-color":"#ffa800"
                                                                }
                                                            }>Şifremi Unuttum</Button>{' '}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GirisYap;