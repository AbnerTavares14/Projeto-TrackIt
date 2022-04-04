import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PorcentagemContext from "../Contexts/Porcentagem";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Footer() {

    const { porcentagem } = useContext(PorcentagemContext);

    return (
        <>
            <Rodape>
                <Link to='/habitos'>
                    <p>Hábitos</p>
                </Link>
                <Link to='/hoje'>
                    <div>
                    <CircularProgressbar background={true} backgroundPadding={5} value={porcentagem} maxValue={100} text={`Hoje`} styles={{
                        background: {
                            fill: '#52B6FF',
                        },
                        text: {
                            fontFamily:'Lexend Deca, sans-serif', 
                            fontSize:'17.98px',
                            fill: '#FFFFFF',
                        },
                        path: {
                            stroke: '#FFFFFF'
                        },
                        trail: {
                            stroke: '#52B6FF',
                        },
                    }} />
                    </div>
                </Link>
                <Link to='/historico'>
                    <p>Histórico</p>
                </Link>
            </Rodape>
        </>

    )
}




const Rodape = styled.footer`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 17.98px;
        color: #52B6FF;
    }

    a{
        text-decoration: none;
    }

    div {
        width: 90px;
        height: 130px;
        margin: 0 auto;
        /* background-color: #52B6FF; */
    }
`