import React, {Component} from 'react';
import Page1 from "./GirisYap";
import Page2 from "./UyeOl"
import Page3 from "./KisiEkle";
import Page4 from "./KisiGoster";
import Page5 from "./SifreGetir";
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Page1}>

                        </Route>
                        <Route path="/UyeOl" component={Page2}>

                        </Route>
                        <Route path="/KisiEkle" component={Page3}>

                        </Route>
                        <Route path="/KisiGoster" component={Page4}>

                        </Route>
                        <Route path="/SifreGetir" component={Page5}>

                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

// function GirisYap() {
//     return <h2>Home</h2>;
// }
//
// function UyeOl() {
//     return <h2>About</h2>;
// }
//
// function KisiEkle() {
//     return <h2>Users</h2>;
// }
//
// function KisiGoster() {
//     return <h2>Users</h2>;
// }
//
// function SifreGetir() {
//     return <h2>Users</h2>;
// }

export default App;