import React, {Component} from "react";
import {
    Button,
    Card,
    Col,
    Container,
    Form,
    InputGroup,
    Nav,
    Navbar,
    Row
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillExclamationSquareFill} from "react-icons/bs";
import {FaAt, FaPhone} from "react-icons/fa";
import * as kisiActions from "./redux/actions/KisiActions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Client from "./Client";

class KisiEkle extends Component {

    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {
            kisi: {
                adi: "",
                soyadi: "",
                cepTel: "",
                mail: "",
                tcKimlikNo: "",
                statu: "",
                departman: ""
            }
        };

        this.client.kisi().then(k => this.setState({kisi: k}));
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeInput = (e) => {
        this.setState({
            kisi:
                {
                    ...this.state.kisi,
                    [e.target.name]: e.target.value
                }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        // const data = new FormData(event.target);
    }

    // componentDidMount() {
    //     this.props.actions.addKisi();
    // }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if ((prevProps.kisi !== this.props.kisi) && this.props.kisi) {
            console.log(this.props.kisi)
        }
    }

    maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    kisiEkle = () => {
        console.log(this.props.kisi);
        this.props.actions.addKisi(this.state.kisi)
    }

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

                <div className={"container"}>
                    <div className={"justify-content-md-center row"}>
                        <div className={"col-lg-7 col-md-auto"}>
                            <Card className={" m-5"} style={
                                {backgroundColor: "white"}
                            }>
                                <div className="bg-secondary card-header">
                                    <div className="text-white card-title h5"
                                         style={
                                             {
                                                 paddingLeft: "10px",
                                                 marginTop: "10px"
                                             }
                                         }>Kişi Ekleme
                                        Alanı
                                    </div>
                                </div>
                                <div className={"container"}>
                                    <div className={"justify-content-md-center row"}>
                                        <div className={"col-lg-11 col-md-auto"}>
                                            <Form onSubmit={this.handleSubmit} style={
                                                {marginTop: "30px"}
                                            }>
                                                <Form.Group as={Row} className="mb-3" controlId="formGridAddress2"
                                                            style={
                                                                {
                                                                    marginTop: "20px"
                                                                }
                                                            }>
                                                    <Form.Label column sm="4">*Ad :</Form.Label>
                                                    <Col sm="8">
                                                        <InputGroup>
                                                            <InputGroup.Text
                                                                id="btnGroupAddon2"><BsFillExclamationSquareFill
                                                                style={{opacity: "0.5"}}/></InputGroup.Text>
                                                            <Form.Control type="text"
                                                                          name="adi"
                                                                          placeholder="Adınızı Giriniz"
                                                                          style={{opacity: "0.5"}}
                                                                          value={this.state.adi}
                                                                          onChange={this.changeInput}
                                                            />
                                                        </InputGroup>
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="formGridAddress2"
                                                            style={
                                                                {
                                                                    marginTop: "20px"
                                                                }
                                                            }>
                                                    <Form.Label column sm="4">*Soyad :</Form.Label>
                                                    <Col sm="8">
                                                        <InputGroup>
                                                            <InputGroup.Text
                                                                id="btnGroupAddon2"><BsFillExclamationSquareFill
                                                                style={{opacity: "0.5"}}/></InputGroup.Text>
                                                            <Form.Control type="text"
                                                                          name="soyadi"
                                                                          placeholder="Soyadınızı Giriniz"
                                                                          style={{opacity: "0.5"}}
                                                                          value={this.state.soyadi}
                                                                          onChange={this.changeInput}
                                                            />
                                                        </InputGroup>
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="formGridAddress2"
                                                            style={
                                                                {
                                                                    marginTop: "20px"
                                                                }
                                                            }>
                                                    <Form.Label column sm="4">*Telefon Numarası :</Form.Label>
                                                    <Col sm="8">
                                                        <InputGroup>
                                                            <InputGroup.Text id="btnGroupAddon2"><FaPhone
                                                                style={{opacity: "0.5"}}
                                                                maxLength={11}/></InputGroup.Text>
                                                            <Form.Control type="number"
                                                                          name="cepTel"
                                                                          placeholder="+90 ( _ _ _ ) _ _ _   _ _   _ _"
                                                                          style={{opacity: "0.5"}} maxLength="10"
                                                                          onInput={this.maxLengthCheck}
                                                                          value={this.state.cepTel}
                                                                          onChange={this.changeInput}
                                                            />
                                                        </InputGroup>
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="formGridAddress2"
                                                            style={
                                                                {
                                                                    marginTop: "20px"
                                                                }
                                                            }>
                                                    <Form.Label column sm="4">*TC Kimlik No :</Form.Label>
                                                    <Col sm="8">
                                                        <InputGroup>
                                                            <InputGroup.Text
                                                                id="btnGroupAddon2"><BsFillExclamationSquareFill
                                                                style={{opacity: "0.5"}}/></InputGroup.Text>
                                                            <Form.Control type="number"
                                                                          name="tcKimlikNo"
                                                                          placeholder="TC No Giriniz"
                                                                          style={{opacity: "0.5"}} maxLength="11"
                                                                          onInput={this.maxLengthCheck}
                                                                          value={this.state.tcKimlikNo}
                                                                          onChange={this.changeInput}
                                                            />
                                                        </InputGroup>
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail"
                                                            style={
                                                                {
                                                                    marginTop: "20px"
                                                                }
                                                            }>
                                                    <Form.Label column sm="4">*E-mail :</Form.Label>
                                                    <Col sm="8">
                                                        <InputGroup>
                                                            <InputGroup.Text id="btnGroupAddon2"><FaAt
                                                                style={{opacity: "0.5"}}/></InputGroup.Text>
                                                            <Form.Control type="email"
                                                                          name="mail"
                                                                          placeholder="E-posta Giriniz"
                                                                          style={{opacity: "0.5"}}
                                                                          value={this.state.mail}
                                                                          onChange={this.changeInput}
                                                            />
                                                        </InputGroup>
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label as="legend" column sm={20} style={
                                                        {marginBottom: "3px"}}>
                                                        *Statüsü :
                                                    </Form.Label>
                                                    <div className={"container"}>
                                                        <div className={"justify-content-md-center row"}>
                                                            <div className={"col-lg-4 col-md-auto"}>
                                                                <Col sm={15}>
                                                                    <Form.Check
                                                                        type="radio"
                                                                        label="Çalışan"
                                                                        name="statu"
                                                                        id="formHorizontalRadios1"
                                                                        value={this.state.kisi.statu}
                                                                        onChange={() => this.setState({
                                                                            ...this.state,
                                                                            kisi: {
                                                                                ...this.state.kisi,
                                                                                statu: "Calisan"
                                                                            }
                                                                        })
                                                                        }
                                                                    />
                                                                    <Form.Check
                                                                        type="radio"
                                                                        label="Stajyer"
                                                                        name="statu"
                                                                        id="formHorizontalRadios2"
                                                                        value={this.state.kisi.statu}
                                                                        onChange={() => this.setState({
                                                                            ...this.state,
                                                                            kisi: {
                                                                                ...this.state.kisi,
                                                                                statu: "Stajyer"
                                                                            }
                                                                        })
                                                                        }
                                                                    />
                                                                    <Form.Check
                                                                        type="radio"
                                                                        label="Müşteri"
                                                                        name="statu"
                                                                        id="formHorizontalRadios3"
                                                                        value={this.state.kisi.statu}
                                                                        onChange={() => this.setState({
                                                                            ...this.state,
                                                                            kisi: {
                                                                                ...this.state.kisi,
                                                                                statu: "Musteri"
                                                                            }
                                                                        })
                                                                        }
                                                                    />
                                                                </Col>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Form.Group>

                                                <Form.Group as={Row} className="mb-3">
                                                    <Form.Label as="legend" column sm={20} style={
                                                        {marginBottom: "3px"}}>
                                                        *Departman :
                                                    </Form.Label>
                                                    <div className={"container"}>
                                                        <div className={"justify-content-md-center row"}>
                                                            <div className={"col-lg-4 col-md-auto"}>
                                                                <Col sm={15}>
                                                                    <Form.Check
                                                                        type="radio"
                                                                        label="Bilgi İşlem"
                                                                        name="departman"
                                                                        id="formHorizontalRadios4"
                                                                        value={this.state.kisi.departman}
                                                                        onChange={() => this.setState({
                                                                            ...this.state,
                                                                            kisi: {
                                                                                ...this.state.kisi,
                                                                                departman: "BilgiIslem"
                                                                            }
                                                                        })
                                                                        }
                                                                    />
                                                                    <Form.Check
                                                                        type="radio"
                                                                        label="İnsan Kaynakları"
                                                                        name="departman"
                                                                        id="formHorizontalRadios5"
                                                                        value={this.state.kisi.departman}
                                                                        onChange={() => this.setState({
                                                                            ...this.state,
                                                                            kisi: {
                                                                                ...this.state.kisi,
                                                                                departman: "InsanKaynaklari"
                                                                            }
                                                                        })
                                                                        }
                                                                    />
                                                                    <Form.Check
                                                                        type="radio"
                                                                        label="Muhasebe"
                                                                        name="departman"
                                                                        id="formHorizontalRadios6"
                                                                        value={this.state.kisi.departman}
                                                                        onChange={() => this.setState({
                                                                            ...this.state,
                                                                            kisi: {
                                                                                ...this.state.kisi,
                                                                                departman: "Muhasebe"
                                                                            }
                                                                        })
                                                                        }
                                                                    />
                                                                    <Form.Check
                                                                        type="radio"
                                                                        label="Satın Alma"
                                                                        name="departman"
                                                                        id="formHorizontalRadios7"
                                                                        value={this.state.kisi.departman}
                                                                        onChange={() => this.setState({
                                                                            ...this.state,
                                                                            kisi: {
                                                                                ...this.state.kisi,
                                                                                departman: "SatinAlma"
                                                                            }
                                                                        })
                                                                        }
                                                                        style={
                                                                            {
                                                                                marginBottom: "3px",
                                                                            }
                                                                        }
                                                                    />
                                                                </Col>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Form.Group>
                                                <hr/>
                                                <Button as="input" type="submit" value="Kaydet"
                                                        onClick={() => this.kisiEkle()}/>{' '}
                                                <Button href="/KisiGoster" style={
                                                    {
                                                        marginBottom: "15px",
                                                        float: "right"
                                                    }
                                                }>Kişileri Göster</Button>
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

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            addKisi: bindActionCreators(kisiActions.addKisi, dispatch),
        }
    }
}

function mapStateToProps(state) {
    return {
        kisiler: state.kisiReducer.kisiler,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KisiEkle);

// export default KisiEkle;