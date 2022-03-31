import reactDOM from "react-dom";
import Login from "./Login";
// import "./reset.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
import GlobalStyle from "./GlobalStyle";
import {useState} from "react"


function App(){
    const [token, setToken] = useState(null);

    return(
        <>
            <BrowserRouter>
            <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Login salvarToken={(token) => setToken(token)} />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/habitos" element={<Habitos token={token} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

reactDOM.render(<App />, document.querySelector(".root"));