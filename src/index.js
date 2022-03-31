import reactDOM from "react-dom";
import Login from "./Componentes/Login";
// import "./reset.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Componentes/Cadastro";
import Habitos from "./Componentes/Habitos";
import GlobalStyle from "./GlobalStyle";
import {useState} from "react"
import TokenContext from "./Componentes/TokenContext";


function App(){
    const [token, setToken] = useState(null);

    return(
        <>
            <BrowserRouter>
            <GlobalStyle />
                <TokenContext.Provider value={{token,setToken}}>
                    <Routes>
                        <Route path="/" element={<Login salvarToken={(token) => setToken(token)} />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/habitos" element={<Habitos />} />
                    </Routes>
                </TokenContext.Provider>
            </BrowserRouter>
        </>
    )
}

reactDOM.render(<App />, document.querySelector(".root"));