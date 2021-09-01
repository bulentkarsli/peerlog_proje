import React from "react";
import {Button, Card, Container, Nav, Navbar, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


function KisiGoster() {

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
                    <div className={"col-lg-10 col-md-auto"}>
                        <Card className={" m-5"} style={
                            {"background-color": "white"}
                        }>
                            <div className="bg-secondary card-header">
                                <div className="text-white card-title h5" style={{"text-align": "center"}}>Kayıtlı
                                    Kişiler
                                </div>
                            </div>
                            <Table striped bordered hover size="sm">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Ad</th>
                                    <th>Soyad</th>
                                    <th>TC No</th>
                                    <th>Cep No</th>
                                    <th>Mail</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </Table>
                            <div className={"container"}>
                                <div className={"justify-content-md-center row"}>
                                    <div className={"col-lg-20 col-md-auto"}>
                                        <Link to="/KisiEkle"><Button style={
                                            {"margin-bottom": "10px",
                                                "margin-top": "10px"}
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

export default KisiGoster;