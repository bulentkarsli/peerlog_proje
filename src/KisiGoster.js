import React, {Component} from "react";
import {Button, Card, Container, Nav, Navbar, Table} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Client from "./Client";
import {bindActionCreators} from "redux";
import * as kisiActions from "./redux/actions/KisiActions";
import {connect} from "react-redux";
import {AiFillDelete, AiFillEdit, FaArrowRight, GrRefresh} from "react-icons/all";

class KisiGoster extends Component {

    constructor(props) {
        super(props);
        this.client = new Client();
        this.state = {kisiler: []};
        this.client.kisi().then(k => this.setState({kisi: k}));
    }

    componentDidMount() {
        this.props.actions.getAllKisiler();
        // this.props.actions.deleteKisi();
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        // if((prevProps.kisiler !== this.props.kisiler) && this.props.kisiler) {
        //     console.log(this.props.kisiler)
        // }
    }

    // kisiSil = () => {
    //     // console.log(this.props.kisiler);
    //     this.props.actions.deleteKisi(this.state.kisiler)
    // }

    // kisiGuncelle = () => {
    //     this.props.actions.updateKisi(this.state.kisiler)
    // }

    render() {
        return (
            <div>
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
                                                backgroundColor: "white",
                                                marginBottom: "5px"
                                            }
                                        }><GrRefresh/></Button>
                                    </div>
                                </div>
                                <Table striped bordered hover size="sm" style={{marginBottom: "30px"}}>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th width="175px">Ad</th>
                                        <th width="175px">Soyad</th>
                                        <th width="175px">TC Kimlik No</th>
                                        <th width="175px">Telefon</th>
                                        <th width="175px">Mail</th>
                                        <th width="175px">Statü</th>
                                        <th width="175px">Departman</th>
                                        {/*<th style={{opacity:"0.5"}}></th>*/}
                                        {/*<th style={{opacity:"0.5"}}></th>*/}
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
                                                <Button //onClick={() => this.kisiGuncelle()}
                                                    style={
                                                        {
                                                            backgroundColor: "#ffa800",
                                                            borderColor: "#ffa800"
                                                            //#6c757d
                                                        }
                                                    }>
                                                    <AiFillEdit/></Button>
                                            </td>
                                            <td>
                                                <Button //key={kisi.id} onClick={() => this.kisiSil()}
                                                    style={
                                                        {
                                                            backgroundColor: "#6c757d",
                                                            borderColor: "#6c757d"
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
            // deleteKisi: bindActionCreators(kisiActions.deleteKisi, dispatch),
            // updateKisi: bindActionCreators(kisiActions.updateKisi, dispatch),
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