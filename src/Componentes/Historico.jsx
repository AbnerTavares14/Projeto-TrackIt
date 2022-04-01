import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components"
import PorcentagemContext from "../Contexts/Porcentagem";
import { useContext } from "react";

export default function Historico(){
    // const {numeroHabitos} = useContext(PorcentagemContext);
    return (
        <>
            <Header />
            <Texto>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Texto>
            <Footer />
        </>
    )
}

const Texto = styled.div`
    margin-top: 100px;
    margin-left: 20px;

    h1{
        color: #126BA5;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 22.98px;
        margin-bottom: 17px;
    }

    p{
        color: #666666;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 17.98px;
    }
`