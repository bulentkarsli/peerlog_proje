import React from "react";
import {
    Button,
    Card,
    Col,
    Container,
    Dropdown, DropdownButton,
    Form,
    FormControl, FormLabel,
    InputGroup,
    Nav,
    Navbar,
    Row,
    SplitButton
} from "react-bootstrap";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
                    <Navbar.Toggle />
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
                                <div className="text-white card-title h5" style={{"text-align": "center"}}>Kişi Ekleme
                                    Alanı
                                </div>
                            </div>
                            <div className={"container"}>
                                <div className={"justify-content-md-center row"}>
                                    <div className={"col-lg-5 col-md-auto"}>
                                        <Form style={
                                            {"margin-top": "30px"}
                                        }>
                                            <Row className="mb-3">
                                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                                    <Form.Label className={"form-label"} style={
                                                        {"padding-left": "12.5px"}
                                                    }>*Ad : <InputGroup>
                                                        <InputGroup.Text id="btnGroupAddon2"></InputGroup.Text>
                                                        <FormControl
                                                            type="text"
                                                            placeholder="Ad"
                                                        /></InputGroup>
                                                    </Form.Label>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                                    <Form.Label className={"form-label"} style={
                                                        {"padding-left": "12.5px"}
                                                    }>*Soyad : <InputGroup>
                                                        <InputGroup.Text id="btnGroupAddon2"></InputGroup.Text>
                                                        <FormControl
                                                            type="text"
                                                            placeholder="Soyad"
                                                        /></InputGroup>
                                                    </Form.Label>
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-3">
                                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                                    <Form.Label className={"form-label"} style={
                                                        {"padding-left": "12.5px"}
                                                    }>*Telefon Numarası : <InputGroup>
                                                        <InputGroup.Text id="btnGroupAddon2"></InputGroup.Text>
                                                        <FormControl
                                                            type="text"
                                                            placeholder="Telefon Numarası"
                                                        /></InputGroup>
                                                    </Form.Label>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                                    <Form.Label className={"form-label"} style={
                                                        {"padding-left": "12.5px"}
                                                    }>*TC Kimlik No : <InputGroup>
                                                        <InputGroup.Text id="btnGroupAddon2"></InputGroup.Text>
                                                        <FormControl
                                                            type="text"
                                                            placeholder="TC No Giriniz"
                                                        /></InputGroup>
                                                    </Form.Label>
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-3">
                                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                                    <Form.Label className={"form-label"} style={
                                                        {"padding-left": "12.5px"}
                                                    }>*Mail (Kullanıcı Adı) : <InputGroup>
                                                        <InputGroup.Text id="btnGroupAddon2"></InputGroup.Text>
                                                        <FormControl
                                                            type="email"
                                                            placeholder="E-posta"
                                                        /></InputGroup>
                                                    </Form.Label>
                                                </Form.Group>
                                            </Row>
                                            <Row className="mb-3">
                                                <fieldset>
                                                    <Form.Group as={Row} className="mb-3" style={
                                                        {"padding-left": "12.5px"}
                                                    }>
                                                        <Form.Label as="legend" column sm={20} style={
                                                            {
                                                                "padding-left": "12.5px",
                                                                "margin-top": "10px",
                                                                "margin-bottom": "10px"
                                                            }
                                                        }>
                                                            Statüsü Seçiniz :
                                                        </Form.Label>
                                                        <Col sm={10}>
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
                                                            />
                                                        </Col>
                                                    </Form.Group>
                                                </fieldset>
                                                <FormLabel style={
                                                    {
                                                        "padding-left": "25px",
                                                        "margin-top": "10px",
                                                        "margin-bottom": "10px"
                                                    }
                                                }> Departman Seçiniz :
                                                    <Dropdown>
                                                        <Dropdown.Toggle id="dropdown-button-dark-example1"
                                                                         variant="secondary" style={
                                                            {
                                                                "padding-left": "25px",
                                                                "margin-top": "10px",
                                                                "margin-bottom": "130px"
                                                            }
                                                        }>
                                                            Departman Listele
                                                        </Dropdown.Toggle>

                                                        <Dropdown.Menu variant="dark">
                                                            <Dropdown.Item href="#/action-1" active>
                                                                Bilgi İşlem
                                                            </Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">İnsan
                                                                Kaynakları</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Muhasebe</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">Satın Alma</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </FormLabel>

                                            </Row>
                                            <div style={
                                                {
                                                    "padding-left": "12.5px",
                                                    "margin-top": "10px",
                                                    "margin-bottom": "10px"
                                                }
                                            }>
                                                <Button as="input" type="submit" value="Kaydet" />{' '}
                                                <Button href="/KisiGoster" style={
                                                    {
                                                        "margin-bottom": "10px",
                                                        "margin-top": "10px"
                                                    }
                                                }>Kişileri Göster</Button>

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