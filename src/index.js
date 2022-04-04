import reactDOM from "react-dom";
import Login from "./Componentes/Login";
// import "./reset.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Componentes/Cadastro";
import Habitos from "./Componentes/Habitos";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react"
import UserContext from "./Contexts/UserContext";
import Hoje from "./Componentes/Hoje";
import Historico from "./Componentes/Historico";


function App() {
    const [token, setToken] = useState(null);
    const [foto, setFoto] = useState(null);
    const [porcentagem, setPorcentagem] = useState(null);

    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <UserContext.Provider value={{ token, setToken, foto, setFoto, porcentagem, setPorcentagem }}>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/hoje" element={<Hoje />} />
                        <Route path="/habitos" element={<Habitos />} />
                        <Route path="/historico" element={<Historico />} />
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>
        </>
    )
}

reactDOM.render(<App />, document.querySelector(".root"));