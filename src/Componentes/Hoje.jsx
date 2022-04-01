import Header from "./Header"
import Footer from "./Footer"
import { useState, useEffect, useContext } from "react";
import TokenContext from "../Contexts/TokenContext";
import axios from "axios";
import * as dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import styled from "styled-components"
import DiaDaSemana from "./DiaDaSemana";
import Check from "./Check";

export default function Hoje() {
    const { token } = useContext(TokenContext);
    const [habitos, setHabitos] = useState([]);
    const [concluidos, setConcluidos] = useState([]);
    const [qtdHabitos, setQtdHabitos] = useState(null);
    

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
            setQtdHabitos(habitos.length);
            const newArr = resposta.data.filter(habito => {
                console.log(habito.done);
                return habito.done === true;
            });
            setConcluidos([...newArr]);
            console.log(resposta);
        });
        promise.catch(err => {
            console.log(err.statusText);
        })
    }, []);

    function concluido(id) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promessa = axios.post(URL, { id: id }, config);
        promessa.then(resposta => {
            console.log(resposta);
            setConcluidos([...concluidos, id]);
        });
        promessa.catch(err => {
            console.log(err)
        })
    }
    console.log(concluidos.length);
    let porcentagem = isFinite(((concluidos.length) * 100) / qtdHabitos);
    console.log(porcentagem)

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
                            <Check concluido={() => {concluido(habito.id)}} id={habito.id} done={habito.done} />
                        </Habito>
                    )}
                </Body>
                <Footer />
            </>
        )
    } else {
        return (
            <>
                <Header />
                <Body>
                    <DiaDaSemana dia={dayjs().day()} data={dayjs().date()} Mes={dayjs().month()} />
                    <TextoPorcentagem>
                        <h1>{porcentagem}% dos hábitos concluídos</h1>
                    </TextoPorcentagem>
                    {habitos.map(habito =>
                        <Habito >
                            <Textos>
                                <h1>{habito.name}</h1>
                                <h2>Sequência atual: {habito.currentSequence} dias</h2>
                                <h2>Seu recorde: {habito.highestSequence} dias</h2>
                            </Textos>
                            <Check concluido={() => {concluido(habito.id)}} id={habito.id} done={habito.done} />
                        </Habito>
                    )}
                </Body>
                <Footer />
            </>
        )
    }
}

const TextoPorcentagem = styled.div `
    margin-top: 5px;
    margin-left: 20px;
    h1 {    
        font-family: 'Lexend Deca', sans-serif;
        color: #8FC549;
        font-size: 17.98px;
    }
`


const Habito = styled.div`
    display: flex;
    justify-content: space-between;
    width: 340px;
    height: 94px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin-left: 20px;
    margin-top: 20px;
    padding: 15px;
    box-sizing: border-box;
`

const Textos = styled.div`
    h1{
        color: #666666;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 19.98px;
        margin-bottom: 10px;
    }

    h2{
        color: #666666;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 12.98px;
        margin-top: 3px;
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