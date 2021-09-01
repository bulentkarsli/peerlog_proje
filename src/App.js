import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import KisiEkle from "./KisiEkle"
import Yetkili from "./GirisYap";
import UyeOl from "./UyeOl";

function App() {
  return (
    <div className="App">

      <UyeOl />

    </div>
  );
}

export default App;
