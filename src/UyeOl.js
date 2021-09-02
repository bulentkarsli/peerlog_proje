import React from "react";
import {Link} from "react-router-dom";
import {Button, Card, Col, Container, Form, Navbar, Row} from "react-bootstrap";

function UyeOl() {
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
                                    "padding": "20px"
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
                    <div className={"col-lg-9 col-md-auto"}>
                        <Card className={"m-5"} style={
                            {"background-color": "white"}
                        }>
                            <div className="bg-secondary card-header">
                                <div className="text-white card-title h5" style={
                                    {
                                        "text-align": "center"
                                    }
                                }>Üyelik Alanı
                                </div>
                            </div>
                            <div className={"container"}>
                                <div className={"justify-content-md-center row"}>
                                    <div className={"col-lg-11 col-md-auto"}>
                                        <Form>
                                            <Form.Group as={Row} className="mb-3" controlId="formGridAddress2" style={
                                                {
                                                    "padding-left": "12.5px",
                                                    "marginTop": "20px"
                                                }
                                            }>
                                                <Form.Label column sm="4">*Ad :</Form.Label>
                                                <Col sm="8">
                                                    <Form.Control type="text" placeholder="Ad Giriniz"/>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formGridAddress2" style={
                                                {
                                                    "padding-left": "12.5px",
                                                    "marginTop": "20px"
                                                }
                                            }>
                                                <Form.Label column sm="4">*Soyad :</Form.Label>
                                                <Col sm="8">
                                                    <Form.Control type="text" placeholder="Soyad Giriniz"/>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"
                                                        style={
                                                            {
                                                                "padding-left": "12.5px",
                                                                "marginTop": "20px"
                                                            }
                                                        }>
                                                <Form.Label column sm="4">*TC Kimlik No :</Form.Label>
                                                <Col sm="8">
                                                    <Form.Control type="text" placeholder="TC Kimlik No Giriniz"/>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" style={
                                                {
                                                    "padding-left": "12.5px",
                                                    "marginTop": "20px"
                                                }
                                            }>
                                                <Form.Label column sm="4">*E-mail :</Form.Label>
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
                                                    <Form.Control type="password" placeholder="Şifre Belirleyiniz"/>
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
                                                    <Form.Control type="password"
                                                                  placeholder="Şifrenizi Tekrar Giriniz"/>
                                                </Col>
                                            </Form.Group>
                                        </Form>
                                        <br/><hr/>
                                    </div>
                                </div>
                            </div>
                            <div className={"container"}>
                                <div className={"justify-content-md-center row"}>
                                    <div className={"col-lg-20 col-md-auto"}>
                                        <Link to="/">
                                            <Button type="submit" style={
                                                {
                                                    "margin-bottom": "15px"
                                                }
                                            }>Üyeliği Tamamla</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UyeOl;