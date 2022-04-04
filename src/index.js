import reactDOM from "react-dom";
import Login from "./Componentes/Login";
// import "./reset.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Componentes/Cadastro";
import Habitos from "./Componentes/Habitos";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react"
import TokenContext from "./Contexts/TokenContext";
import Hoje from "./Componentes/Hoje";
import FotoContext from "./Contexts/FotoContext";
import Historico from "./Componentes/Historico";
import PorcentagemContext from "./Contexts/Porcentagem";


function App() {
    const [token, setToken] = useState(null);
    const [foto, setFoto] = useState(null);
    const [porcentagem, setPorcentagem] = useState(null);

    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <TokenContext.Provider value={{ token, setToken }}>
                    <FotoContext.Provider value={{ foto, setFoto }}>
                        <PorcentagemContext.Provider value={{ porcentagem, setPorcentagem }}>
                            <Routes>
                                <Route path="/" element={<Login salvarToken={(token) => setToken(token)} />} />
                                <Route path="/cadastro" element={<Cadastro />} />
                                <Route path="/hoje" element={<Hoje />} />
                                <Route path="/habitos" element={<Habitos />} />
                                <Route path="/historico" element={<Historico />} />
                            </Routes>
                        </PorcentagemContext.Provider>
                    </FotoContext.Provider>
                </TokenContext.Provider>
            </BrowserRouter>
        </>
    )
}

reactDOM.render(<App />, document.querySelector(".root"));