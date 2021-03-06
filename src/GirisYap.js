import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button, Card, Col, Form, InputGroup, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaAt, FaKey} from "react-icons/fa";

class GirisYap extends Component {

    maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    render() {
        return (
            <div>
                <div className={"container"}>
                    <div className={"justify-content-md-center row"}>
                        <div className={"col-lg-6 col-md-auto"}>
                            <Card className={"m-5"} style={
                                {backgroundColor: "white"}
                            }>
                                <div className="bg-secondary card-header">
                                    <div className="text-white card-title h5"
                                         style={
                                             {
                                                 paddingLeft: "10px",
                                                 marginTop: "10px"
                                             }
                                         }>Giriş Yapınız
                                    </div>
                                </div>

                                <div className={"container"}>
                                    <div className={"justify-content-md-center row"}>
                                        <div className={"col-lg-12 col-md-auto"}>
                                            <Form>
                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail"
                                                            style={
                                                                {
                                                                    paddingLeft: "12.5px",
                                                                    marginTop: "20px"
                                                                }
                                                            }>
                                                    <Form.Label column sm="4">*Kullanıcı Adı :</Form.Label>
                                                    <Col sm="8">
                                                        <InputGroup>
                                                            <InputGroup.Text id="btnGroupAddon2"><FaAt
                                                                style={{opacity: "0.5"}}/></InputGroup.Text>
                                                            <Form.Control type="email" placeholder="E-posta Giriniz"
                                                                          id="adi"
                                                                          style={{opacity: "0.5"}}/>
                                                        </InputGroup>
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword"
                                                            style={
                                                                {
                                                                    paddingLeft: "12.5px",
                                                                    marginTop: "20px"
                                                                }
                                                            }>
                                                    <Form.Label column sm="4">*Şifre :</Form.Label>
                                                    <Col sm="8">
                                                        <InputGroup>
                                                            <InputGroup.Text id="btnGroupAddon2"><FaKey
                                                                style={{opacity: "0.5"}}/></InputGroup.Text>
                                                            <Form.Control
                                                                type="password"
                                                                placeholder="Şifre Giriniz"
                                                                id="parola"
                                                                style={{opacity: "0.5"}}
                                                                onInput={this.maxLengthCheck}
                                                                maxLength="10"
                                                            />
                                                        </InputGroup>
                                                    </Col>
                                                </Form.Group>
                                                <br/>
                                                <hr/>
                                                <Link to="/KisiGoster">
                                                    <Button type="submit" variant="primary" style={
                                                        {
                                                            marginBottom: "20px",
                                                            marginTop: "5px"
                                                        }
                                                    }>Giriş Yap</Button>{' '}
                                                </Link>
                                                <Link to="/SifreGetir">
                                                    <Button type="button" variant="primary" style={
                                                        {
                                                            marginBottom: "20px",
                                                            marginTop: "5px",
                                                            backgroundColor: "#ffa800",
                                                            borderColor: "#ffa800",
                                                            float: "right"
                                                        }
                                                    }>Şifremi Unuttum</Button>{' '}
                                                </Link>
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

export default GirisYap;