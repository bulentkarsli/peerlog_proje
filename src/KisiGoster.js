import React, {Component} from "react";
import {Button, Card, Container, Nav, Navbar, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Client from "./Client";
import {bindActionCreators} from "redux";
import * as kisiActions from "./redux/actions/KisiActions";
import {connect} from "react-redux";

class KisiGoster extends Component {

    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {kisi: []};
        this.client.kisi().then(k => this.setState({kisi: k}));
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
                        <div className={"col-lg-12 col-md-auto"}>
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
                                         }>Kayıtlı
                                        Kişiler
                                    </div>
                                </div>
                                <Table striped bordered hover size="sm" style={{"marginBottom": "30px"}}>
                                    <thead>
                                    <tr>
                                        <th width="25px">#</th>
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

                                    <tr>
                                        <td>1</td>
                                        <td></td>
                                        <td></td>
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
                                            <hr/>
                                            <Link to="/KisiEkle">
                                                <Button type={"submit"} style={
                                                    {
                                                        "margin-bottom": "15px",
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
        }
    }
}

function mapStateToProps(state) {
    return {
        blogPosts: state.kisiReducer.kisiler,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(KisiGoster);



// export default KisiGoster;