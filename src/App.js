import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component, useState} from 'react';
import UyeOl from "./UyeOl";
import KisiEkle from "./KisiEkle";
import GirisYap from "./GirisYap";
import SifreGetir from "./SifreGetir";
import KisiGoster from "./KisiGoster";

class App extends Component {

    render() {
        return (
            <div className="App">

                <UyeOl/>

            </div>
        );
    }
}

export default App;
