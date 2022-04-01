import Header from "./Header"
import Footer from "./Footer"
import { useState, useEffect, useContext } from "react";
import TokenContext from "../Contexts/TokenContext";
import axios from "axios";
import * as dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import styled from "styled-components"
import DiaDaSemana from "./DiaDaSemana";

export default function Hoje() {
    const { token } = useContext(TokenContext);
    const [habitos, setHabitos] = useState([]);
    const [concluidos, setConcluidos] = useState([]);

    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(URL, config);
        promise.then(resposta => {
            setHabitos(resposta.data);
            console.log(resposta)
        });
        promise.catch(err => {
            console.log(err.statusText);
        })
    }, []);

    if (concluidos.length === 0) {
        return (
            <>
                <Header />
                <Body>
                    <DiaDaSemana dia={dayjs().day()} data={dayjs().date()} Mes={dayjs().month()} />
                    <Texto>
                        <h1>Nenhum hábito concluído ainda</h1>
                    </Texto>
                    {habitos.map(habito => 
                        <Habito >
                            <Textos>
                                <h1>{habito.name}</h1>
                                <h2>Sequência atual: {habito.currentSequence} dias</h2>
                                <h2>Seu recorde: {habito.highestSequence} dias</h2>
                            </Textos>
                        </Habito>    
                    )}
                </Body>
                <Footer />
            </>
        )
    }
}

const Habito = styled.div`
    width: 340px;
    height: 94px;
    border-radius: 5px;
    background-color: #FFFFFF;
`

const Textos = styled.div`
    h1{
        color: #666666;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 19.98px;
    }

    h2{
        color: #666666;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 12.98px;
    }
`

const Texto = styled.div`
    margin-top: 5px;
    margin-left: 20px;
    h1 {
        font-family: 'Lexend Deca', sans-serif;
        color: #BABABA;
        font-size: 17.98px;
    }
`

const Body = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    overflow-y: scroll;
`