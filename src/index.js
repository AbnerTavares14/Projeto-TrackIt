import reactDOM from "react-dom";
import TelaLogin from "./TelaLogin";
// import "./reset.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./Cadastro";
import Habitos from "./Habitos";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";


function App(){
    return(
        <>
            <BrowserRouter>
            <Header />
            <GlobalStyle />
                <Routes>
                    <Route path="/" element={<TelaLogin />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/habitos" element={<Habitos />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

reactDOM.render(<App />, document.querySelector(".root"));