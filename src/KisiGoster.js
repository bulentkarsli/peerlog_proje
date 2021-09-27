import React, {Component} from "react";
import {Button, Card, Col, Form, InputGroup, Modal, Row, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Client from "./Client";
import {bindActionCreators} from "redux";
import * as kisiActions from "./redux/actions/KisiActions";
import {connect} from "react-redux";
import {AiFillDelete, AiOutlineWarning, FaArrowRight, FaUserEdit, GrRefresh, ImWarning} from "react-icons/all";
import {BsFillExclamationSquareFill} from "react-icons/bs";
import {FaAt, FaPhone} from "react-icons/fa";


class KisiGoster extends Component {

    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {
            kisiler: [],
            showG: false,
            showS: false,
            secilenKisi: null
        };
        this.client.kisi().then(k => this.setState({kisi: k}));
    }

    openModalGuncelle = (kisi) => {
        this.setState({showG: true, secilenKisi: kisi})
    }

    openModalSil = (kisi) => {
        this.setState({showS: true, secilenKisi: kisi})
    }

    closeModal = () => {
        this.setState({showG: false})
        this.setState({showS: false})
    }

    componentDidMount() {
        this.props.actions.getAllKisiler();
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if ((prevProps.kisiler !== this.props.kisiler) && this.props.kisiler) {
        }
    }

    kisiSil = () => {
        this.props.actions.deleteKisi(this.state.secilenKisi)
        this.setState({showS: false})
    }

    kisiGuncelle = () => {
        this.props.actions.updateKisi(this.state.secilenKisi)
        this.setState({showG: false})
    }

    maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
            object.target.value = object.target.value.slice(0, object.target.maxLength)
        }
    }

    changeInput = (e) => {
        this.setState({
            ...this.state, // onceki state'lerin korunmasini saglar
            secilenKisi:
                {
                    ...this.state.secilenKisi,
                    [e.target.name]: e.target.value
                }
        });
    }

    render() {
        return (
            <div>
                {/*Guncelle Modal*/}
                <Modal show={this.state.showG} onHide={this.closeModal} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title>Kişi Güncelle</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
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
                                                      value={this.state.secilenKisi?.adi}
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
                                                      value={this.state.secilenKisi?.soyadi}
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
                                                      value={this.state.secilenKisi?.cepTel}
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
                                                      value={this.state.secilenKisi?.tcKimlikNo}
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
                                                      value={this.state.secilenKisi?.mail}
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
                                                    checked={this.state.secilenKisi?.statu === "Calisan"} // secilenKisi bos mu kontrolu yapar.
                                                    onChange={() => this.setState({
                                                        ...this.state,
                                                        secilenKisi: {
                                                            ...this.state.secilenKisi,
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
                                                    checked={this.state.secilenKisi?.statu === "Stajyer"}
                                                    onChange={() => this.setState({
                                                        ...this.state,
                                                        secilenKisi: {
                                                            ...this.state.secilenKisi,
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
                                                    checked={this.state.secilenKisi?.statu === "Musteri"}
                                                    onChange={() => this.setState({
                                                        ...this.state,
                                                        secilenKisi: {
                                                            ...this.state.secilenKisi,
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
                                                    checked={this.state.secilenKisi?.departman === "BilgiIslem"}
                                                    onChange={() => this.setState({
                                                        ...this.state,
                                                        secilenKisi: {
                                                            ...this.state.secilenKisi,
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
                                                    checked={this.state.secilenKisi?.departman === "InsanKaynaklari"}
                                                    onChange={() => this.setState({
                                                        ...this.state,
                                                        secilenKisi: {
                                                            ...this.state.secilenKisi,
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
                                                    checked={this.state.secilenKisi?.departman === "Muhasebe"}
                                                    onChange={() => this.setState({
                                                        ...this.state,
                                                        secilenKisi: {
                                                            ...this.state.secilenKisi,
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
                                                    checked={this.state.secilenKisi?.departman === "SatinAlma"}
                                                    onChange={() => this.setState({
                                                        ...this.state,
                                                        secilenKisi: {
                                                            ...this.state.secilenKisi,
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
                            {/*<Button as="input" type="submit" value="Kaydet"*/}
                            {/*        onClick={() => this.kisiEkle()}/>{' '}*/}
                            {/*<Button href="/KisiGoster" style={*/}
                            {/*    {*/}
                            {/*        marginBottom: "15px",*/}
                            {/*        float: "right"*/}
                            {/*    }*/}
                            {/*}>Kişileri Göster</Button>*/}
                        </Form>
                        {/*<tbody>*/}
                        {/*{this.props.kisiler?.map((kisi) => {*/}
                        {/*    return <tr key={kisi.id}>*/}
                        {/*        <td>{kisi.adi}</td>*/}
                        {/*        <td>{kisi.soyadi}</td>*/}
                        {/*        <td>{kisi.tcKimlikNo}</td>*/}
                        {/*        <td>{kisi.cepTel}</td>*/}
                        {/*        <td>{kisi.mail}</td>*/}
                        {/*        <td>{kisi.statu}</td>*/}
                        {/*        <td>{kisi.departman}</td>*/}
                        {/*    </tr>;*/}
                        {/*})}*/}
                        {/*</tbody>*/}

                    </Modal.Body>

                    <Modal.Footer>
                        {/*<Button variant="secondary" onClick={() => this.closeModal()}>*/}
                        {/*    Vazgeç*/}
                        {/*</Button>*/}
                        <div className={"container"}>
                            <div className={"justify-content-md-center row"}>
                                <div className={"col-lg-20 col-md-auto"}>
                                    <Button as="input" type="submit" value="Güncelle"
                                            onClick={() => this.kisiGuncelle()}/>
                                </div>
                            </div>
                        </div>

                    </Modal.Footer>
                </Modal>

                {/*Sil Modal*/}
                <Modal show={this.state.showS} onHide={this.closeModal}>
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Kişi Sil</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>Seçilen kişiyi silmek istediğinizden emin misiniz?</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.closeModal()} style={
                                {
                                    backgroundColor: "#ffa800",
                                    borderColor: "#ffa800"
                                }
                            }>Vazgeç</Button>{' '}
                            <Button as="input" type="submit" value="Sil" onClick={() => this.kisiSil()}/>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal>

                <div className={"container"}>
                    <div className={"justify-content-md-center row"}>
                        <div className={"col-lg-12 col-md-auto"}>
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
                                         }>Kayıtlı Kişiler
                                        <Button href="/KisiGoster" type="reset" style={
                                            {
                                                float: "right",
                                                marginBottom: "5px",
                                                backgroundColor: "white"
                                            }
                                        }><GrRefresh/></Button>
                                    </div>
                                </div>
                                <Table striped bordered hover size="sm" style={{marginBottom: "30px"}}>
                                    <thead>
                                    <tr>
                                        <th></th>
                                        <th width="175px">Ad</th>
                                        <th width="175px">Soyad</th>
                                        <th width="175px">TC Kimlik No</th>
                                        <th width="175px">Telefon</th>
                                        <th width="175px">Mail</th>
                                        <th width="175px">Statü</th>
                                        <th width="175px">Departman</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.props.kisiler?.map((kisi) => {
                                        return <tr key={kisi.id}>
                                            <td><FaArrowRight/></td>
                                            <td>{kisi.adi}</td>
                                            <td>{kisi.soyadi}</td>
                                            <td>{kisi.tcKimlikNo}</td>
                                            <td>{kisi.cepTel}</td>
                                            <td>{kisi.mail}</td>
                                            <td>{kisi.statu}</td>
                                            <td>{kisi.departman}</td>
                                            <td>
                                                <Button onClick={() => this.openModalGuncelle(kisi)}
                                                ><FaUserEdit/></Button>
                                            </td>
                                            <td>
                                                <Button  onClick={() => this.openModalSil(kisi)}
                                                    style={
                                                        {
                                                            backgroundColor: "#ffa800",
                                                            borderColor: "#ffa800"
                                                        }
                                                    }><AiFillDelete/></Button>
                                            </td>
                                        </tr>;
                                    })}
                                    </tbody>
                                </Table>
                                <div className={"container"}>
                                    <div className={"justify-content-md-center row"}>
                                        <div className={"col-lg-20 col-md-auto"}>
                                            <hr/>
                                            <Link to="/KisiEkle">
                                                <Button type={"submit"} style={
                                                    {
                                                        marginBottom: "15px",
                                                    }
                                                }>
                                                    Yeni Kişi Ekle
                                                </Button>
                                            </Link>
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
            getAllKisiler: bindActionCreators(kisiActions.getAllKisiler, dispatch),
            updateKisi: bindActionCreators(kisiActions.updateKisi, dispatch),
            deleteKisi: bindActionCreators(kisiActions.deleteKisi, dispatch),
        }
    }
}

function mapStateToProps(state) {
    return {
        kisiler: state.kisiReducer.kisiler,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KisiGoster);


// export default KisiGoster;