import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Button, Card, Container, Form, Navbar} from "react-bootstrap";

function SifreGetir() {
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
                    <div className={"col-lg-8 col-md-auto"}>
                        <Card className={"m-5"} style={
                            {"background-color": "white"}
                        }>
                            <div className="bg-secondary card-header">
                                <div className="text-white card-title h5"
                                     style={{"text-align": "center"}}>Şifre Değiştirme
                                </div>
                            </div>

                            <div className={"container"}>
                                <div className={"justify-content-md-center row"}>
                                    <div className={"col-lg-8 col-md-auto"}>
                                        <Form>
                                            <Alert variant="success" style={
                                                {
                                                    "margin-top": "20px",
                                                    "margin-bottom": "30px"
                                                }
                                            }>
                                                <Alert.Heading>Hatırlatma !!</Alert.Heading>
                                                <hr/>
                                                <p>
                                                    Lütfen sistemde kayıtlı olan e-posta adresinizi giriniz.
                                                    Eğer girdiğiniz e-posta sistemimizde kayıtlı ise şifre
                                                    değiştirme bağlantısı e-posta adresinize gönderilecektir.
                                                </p>
                                            </Alert>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>*E-posta (Kullanıcı Adı)</Form.Label>
                                                <Form.Control type="email" placeholder="E-posta Giriniz"/>
                                            </Form.Group>
                                            <Button type="submit" variant="primary" style={
                                                {
                                                    "margin-bottom": "10px",
                                                    "margin-top": "20px"
                                                    // "color": "#fff",
                                                    // "background-color": "#6993ff",
                                                    // "border-color": "#6993ff"
                                                }
                                            }>Gönder</Button>{' '}
                                            <Button href="/" type="button" variant="primary" style={
                                                {
                                                    "margin-bottom": "10px",
                                                    "margin-top": "20px",
                                                    "color": "#7e8299",
                                                    "border-color": "#7e8299"
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
    );
}

export default SifreGetir;