import React from "react";
import {Link} from "react-router-dom";
import {Button, Card, Col, Container, Form, InputGroup, Navbar, Row} from "react-bootstrap";
import {FaAt, FaKey} from "react-icons/fa";
import {BsFillExclamationSquareFill, BsInfoSquareFill} from "react-icons/bs";

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
                    <div className={"col-lg-7 col-md-auto"}>
                        <Card className={"m-5"} style={
                            {"background-color": "white"}
                        }>
                            <div className="bg-secondary card-header">
                                <div className="text-white card-title h5" style={
                                    {
                                        "padding-left": "10px",
                                        "marginTop": "10px"
                                    }
                                }>Yeni Hesap Aç
                                </div>
                            </div>
                            <div className={"container"}>
                                <div className={"justify-content-md-center row"}>
                                    <div className={"col-lg-11 col-md-auto"}>
                                        <Form>
                                            <Form.Group as={Row} className="mb-3" controlId="formGridAddress2" style={
                                                {
                                                    "marginTop": "20px"
                                                }
                                            }>
                                                <Form.Label column sm="4">*Ad :</Form.Label>
                                                <Col sm="8">
                                                    <InputGroup>
                                                        <InputGroup.Text id="btnGroupAddon2"><BsFillExclamationSquareFill  style={{"opacity":"0.5"}}/></InputGroup.Text>
                                                        <Form.Control type="text" placeholder="Ad Giriniz" style={{"opacity":"0.5"}}/>
                                                    </InputGroup>

                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formGridAddress2" style={
                                                {
                                                    "marginTop": "20px"
                                                }
                                            }>
                                                <Form.Label column sm="4">*Soyad :</Form.Label>
                                                <Col sm="8">
                                                    <InputGroup>
                                                        <InputGroup.Text id="btnGroupAddon2"><BsFillExclamationSquareFill style={{"opacity":"0.5"}}/></InputGroup.Text>
                                                        <Form.Control type="text" placeholder="Soyad Giriniz" style={{"opacity":"0.5"}}/>
                                                    </InputGroup>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"
                                                        style={
                                                            {
                                                                "marginTop": "20px"
                                                            }
                                                        }>
                                                <Form.Label column sm="4">*TC Kimlik No :</Form.Label>
                                                <Col sm="8">
                                                    <InputGroup>
                                                        <InputGroup.Text id="btnGroupAddon2"><BsFillExclamationSquareFill style={{"opacity":"0.5"}}/></InputGroup.Text>
                                                        <Form.Control type="text" placeholder="TC Kimlik No Giriniz" style={{"opacity":"0.5"}}/>
                                                    </InputGroup>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail" style={
                                                {
                                                    "marginTop": "20px"
                                                }
                                            }>
                                                <Form.Label column sm="4">*E-mail :</Form.Label>
                                                <Col sm="8">
                                                    <InputGroup>
                                                        <InputGroup.Text id="btnGroupAddon2"><FaAt style={{"opacity":"0.5"}}/></InputGroup.Text>
                                                        <Form.Control type="email" placeholder="E-posta Giriniz" style={{"opacity":"0.5"}}/>
                                                    </InputGroup>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"
                                                        style={
                                                            {
                                                                "marginTop": "20px"
                                                            }
                                                        }>
                                                <Form.Label column sm="4">*Şifre :</Form.Label>
                                                <Col sm="8">
                                                    <InputGroup>
                                                        <InputGroup.Text id="btnGroupAddon2"><FaKey style={{"opacity":"0.5"}}/></InputGroup.Text>
                                                        <Form.Control type="password" placeholder="Şifre Belirleyiniz" style={{"opacity":"0.5"}}/>
                                                    </InputGroup>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"
                                                        style={
                                                            {
                                                                "marginTop": "20px"
                                                            }
                                                        }>
                                                <Form.Label column sm="4">*Şifre :</Form.Label>
                                                <Col sm="8"><InputGroup>
                                                    <InputGroup.Text id="btnGroupAddon2"><FaKey style={{"opacity":"0.5"}}/></InputGroup.Text>
                                                    <Form.Control type="password" placeholder="Şifrenizi Tekrar Giriniz" style={{"opacity":"0.5"}}/>
                                                </InputGroup>
                                                </Col>
                                            </Form.Group>
                                            <br/><hr/>
                                            <Link to="/">
                                                <Button type="submit" variant="primary" style={
                                                    {
                                                        "margin-bottom": "20px",
                                                        "margin-top": "5px"
                                                        // "color": "#fff",
                                                        // "background-color": "#6993ff",
                                                        // "border-color": "#6993ff"
                                                    }
                                                }>Kaydet</Button>
                                            </Link>
                                            <Button href="/" type="button" variant="primary" style={
                                                {
                                                    "margin-bottom": "20px",
                                                    "margin-top": "5px",
                                                    "color": "#7e8299",
                                                    "border-color": "#7e8299",
                                                    "float": "right"
                                                }
                                            }>Vazgeç</Button>
                                        </Form>
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