import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Page1 from "./GirisYap";
import Page2 from "./UyeOl"
import Page3 from "./KisiEkle";
import Page4 from "./KisiGoster";
import Page5 from "./SifreGetir";


const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Page1} />
            <Route path="/UyeOl" component={Page2} />
            <Route path="/KisiEkle" component={Page3} />
            <Route path="/KisiGoster" component={Page4} />
            <Route path="/SifreGetir" component={Page5} />
        </Switch>
    </BrowserRouter>,
    rootElement
);