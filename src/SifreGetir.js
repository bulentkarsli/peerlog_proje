import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Button, Card, Container, Form, InputGroup, Navbar} from "react-bootstrap";
import { AiOutlinePushpin } from "react-icons/ai";
import {FaAt} from "react-icons/fa";
import {Link} from "react-router-dom";


class SifreGetir extends Component {

    ButtonAlert() {
        alert("Yeni Şifre Oluşturmak İçin E-postanıza Gönderilen Bağlantıyı Takip Ediniz.");
    }

    render() {
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
                        <div className={"col-lg-7 col-md-auto"}>
                            <Card className={"m-5"} style={
                                {"background-color": "white"}
                            }>
                                <div className="bg-secondary card-header">
                                    <div className="text-white card-title h5"
                                         style={
                                             {
                                                 "padding-left": "10px",
                                                 "marginTop": "10px"
                                             }
                                         }>Şifre Değiştirme
                                    </div>
                                </div>

                                <div className={"container"}>
                                    <div className={"justify-content-md-center row"}>
                                        <div className={"col-lg-10 col-md-auto"}>
                                            <Form>
                                                <Alert variant="success" style={
                                                    {
                                                        "margin-top": "20px",
                                                        "margin-bottom": "30px"
                                                    }
                                                }>
                                                    <Alert.Heading><AiOutlinePushpin /> Hatırlatma !!</Alert.Heading>
                                                    <hr/>
                                                    <p>
                                                        Lütfen sistemde kayıtlı olan e-posta adresinizi giriniz.
                                                        Eğer girdiğiniz e-posta sistemimizde kayıtlı ise şifre
                                                        değiştirme bağlantısı e-posta adresinize gönderilecektir.
                                                    </p>
                                                </Alert>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Label>*E-posta (Kullanıcı Adı)</Form.Label>
                                                    <InputGroup>
                                                        <InputGroup.Text id="btnGroupAddon2"><FaAt style={{"opacity":"0.5"}}/></InputGroup.Text>
                                                        <Form.Control type="email" placeholder="E-posta Giriniz" style={{"opacity":"0.5"}}/>
                                                    </InputGroup>
                                                </Form.Group>
                                                <br/>
                                                <hr/>
                                                <Link to="/">
                                                    <Button onClick={this.ButtonAlert} type="submit" variant="primary" style={
                                                        {
                                                            "margin-bottom": "20px",
                                                            "margin-top": "5px"
                                                            // "color": "#fff",
                                                            // "background-color": "#6993ff",
                                                            // "border-color": "#6993ff"
                                                        }
                                                    }>Gönder</Button>
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
        );
    }
}

export default SifreGetir;