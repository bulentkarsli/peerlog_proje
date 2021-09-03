import React from "react";
import {
    Button,
    Card,
    Col,
    Container,
    Dropdown,
    Form,
    InputGroup,
    Nav,
    Navbar,
    Row
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsAt, BsFillExclamationSquareFill, BsInfoSquare, BsInfoSquareFill} from "react-icons/bs";
import {AiFillPhone} from "react-icons/ai";
import {FaAt, FaPhone} from "react-icons/fa";


function KisiEkle() {

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
                                    "padding": "20px",

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
                            {"background-color": "white"}
                        }>
                            <div className="bg-secondary card-header">
                                <div className="text-white card-title h5"
                                     style={
                                         {
                                             "padding-left": "10px",
                                             "marginTop": "10px"
                                         }
                                     }>Kişi Ekleme
                                    Alanı
                                </div>
                            </div>
                            <div className={"container"}>
                                <div className={"justify-content-md-center row"}>
                                    <div className={"col-lg-11 col-md-auto"}>
                                        <Form style={
                                            {"margin-top": "30px"}
                                        }>
                                            <Form.Group as={Row} className="mb-3" controlId="formGridAddress2" style={
                                                {
                                                    "marginTop": "20px"
                                                }
                                            }>
                                                <Form.Label column sm="4">*Ad :</Form.Label>
                                                <Col sm="8">
                                                    <InputGroup>
                                                        <InputGroup.Text id="btnGroupAddon2"><BsFillExclamationSquareFill style={{"opacity":"0.5"}}/></InputGroup.Text>
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

                                            <Form.Group as={Row} className="mb-3" controlId="formGridAddress2" style={
                                                {
                                                    "marginTop": "20px"
                                                }
                                            }>
                                                <Form.Label column sm="4">*Telefon Numarası :</Form.Label>
                                                <Col sm="8">
                                                    <InputGroup>
                                                        <InputGroup.Text id="btnGroupAddon2"><FaPhone style={{"opacity":"0.5"}}/></InputGroup.Text>
                                                        <Form.Control type="text" placeholder="Telefon Numarası" style={{"opacity":"0.5"}}/>
                                                    </InputGroup>

                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formGridAddress2" style={
                                                {
                                                    "marginTop": "20px"
                                                }
                                            }>
                                                <Form.Label column sm="4">*TC Kimlik No :</Form.Label>
                                                <Col sm="8">
                                                    <InputGroup>
                                                        <InputGroup.Text id="btnGroupAddon2"><BsFillExclamationSquareFill style={{"opacity":"0.5"}}/></InputGroup.Text>
                                                        <Form.Control type="text" placeholder="TC No Giriniz" style={{"opacity":"0.5"}}/>
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

                                            <div style={
                                                {
                                                    "width": "100%"
                                                }
                                            }>
                                                <div className={"container"}>
                                                    <div className={"justify-content-md-center row"}>
                                                        <div className={"col-lg-15 col-md-auto"}>
                                                            <div style={
                                                                {
                                                                    "width": "50%",
                                                                    "height": "100%",
                                                                    "float": "left",
                                                                    "marginTop": "20px"
                                                                }
                                                            }>
                                                                <Form.Group as={Row} className="mb-3">
                                                                    <Form.Label as="legend" column sm={20} style={
                                                                        {
                                                                            "margin-bottom": "10px"
                                                                        }
                                                                    }>
                                                                        *Statüsü Seçiniz :
                                                                    </Form.Label>
                                                                    <Col sm={15}>

                                                                        <Form.Check
                                                                            type="radio"
                                                                            label="Çalışan"
                                                                            name="formHorizontalRadios"
                                                                            id="formHorizontalRadios1"
                                                                        />

                                                                        <Form.Check
                                                                            type="radio"
                                                                            label="Stajyer"
                                                                            name="formHorizontalRadios"
                                                                            id="formHorizontalRadios2"
                                                                        />

                                                                        <Form.Check
                                                                            type="radio"
                                                                            label="Müşteri"
                                                                            name="formHorizontalRadios"
                                                                            id="formHorizontalRadios3"
                                                                            style={
                                                                                {
                                                                                    "marginBottom": "25px",

                                                                                }
                                                                            }
                                                                        />

                                                                    </Col>

                                                                </Form.Group>
                                                            </div>
                                                            <div style={
                                                                {
                                                                    "width": "50%",
                                                                    "height": "100%",
                                                                    "float": "right",
                                                                    "marginTop": "18px"
                                                                }
                                                            }>
                                                                <Form.Group as={Row} className="mb-3" style={
                                                                    {"padding-left": "75px"}
                                                                }>
                                                                    <Form.Label as="legend" column sm={20} style={
                                                                        {
                                                                            "margin-bottom": "10px"
                                                                        }
                                                                    }>
                                                                        *Departman Seçiniz :
                                                                    </Form.Label>
                                                                    <Col sm={15}>
                                                                        <Dropdown>
                                                                            <Dropdown.Toggle
                                                                                id="dropdown-button-dark-example1"
                                                                                variant="secondary" style={
                                                                                {
                                                                                    "padding-left": "6px",
                                                                                    "margin-bottom": "130px"

                                                                                }
                                                                            }>Departman Listele
                                                                            </Dropdown.Toggle>

                                                                            <Dropdown.Menu variant="dark">
                                                                                <Dropdown.Item href="#/action-1" active>
                                                                                    Bilgi İşlem
                                                                                </Dropdown.Item>
                                                                                <Dropdown.Item href="#/action-2">İnsan
                                                                                    Kaynakları</Dropdown.Item>
                                                                                <Dropdown.Item
                                                                                    href="#/action-3">Muhasebe</Dropdown.Item>
                                                                                <Dropdown.Item href="#/action-4">Satın
                                                                                    Alma</Dropdown.Item>
                                                                            </Dropdown.Menu>
                                                                        </Dropdown>
                                                                    </Col>


                                                                </Form.Group>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className={"container"}>
                                                <div className={"justify-content-md-center row"}>
                                                    <div className={"col-lg-7 col-md-auto"}>
                                                        <div style={
                                                            {
                                                                "padding-left": "12.5px",
                                                                "margin-bottom": "15px"
                                                            }
                                                        }>
                                                            <Button as="input" type="submit" value="Kaydet"/>{' '}
                                                            <Button href="/KisiGoster" style={
                                                                {
                                                                    "margin-bottom": "5px",
                                                                    "margin-top": "5px"
                                                                }
                                                            }>Kişileri Göster</Button>
                                                        </div>
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

export default KisiEkle;