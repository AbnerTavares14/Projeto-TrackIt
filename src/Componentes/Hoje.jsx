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
import PorcentagemContext from "../Contexts/Porcentagem";

export default function Hoje() {
    const { token } = useContext(TokenContext);
    const [habitos, setHabitos] = useState([]);
    const [concluidos, setConcluidos] = useState([]);
    const [qtdHabitos, setQtdHabitos] = useState(0);
    const {porcentagem,setPorcentagem} = useContext(PorcentagemContext);


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
            const newArr = resposta.data.filter(habito => habito.done === true).map(habito => habito.id)
            setConcluidos([...newArr]);
        });
        promise.catch(err => {
            console.log(err.statusText);
        })
    }, [habitos.length]);

    function concluido(id) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
        const URL2 = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promessa = axios.post(URL, { id: id }, config);
        promessa.then(() => {
            const promise = axios.get(URL2, config);
            promise.then((resposta) => {
                setHabitos(resposta.data);
                setConcluidos([...concluidos, id]);
            })
        });
        promessa.catch(err => {
            console.log(err)
        })
    }

    function desmarcar(id) {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
        const URL2 = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promessa = axios.post(URL, { id: id }, config);
        promessa.then(() => {
            const promise = axios.get(URL2, config);
            promise.then((resposta) => {
                setHabitos(resposta.data);
                const newArr = concluidos.filter(conc => {
                    if(conc !== id){
                        return conc;
                    }
                });
                console.log(newArr)
                setConcluidos([...newArr]);
            });
            promessa.catch(err => {
                console.log(err)
            })
        })
    }

    let porcent = ((concluidos.length) * 100) / qtdHabitos;
    setPorcentagem(porcent);

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
                        <Habito key={habito.id}>
                            <Textos>
                                <h1>{habito.name}</h1>
                                <h2>Sequência atual: {habito.currentSequence} dias</h2>
                                <h2>Seu recorde: {habito.highestSequence} dias</h2>
                            </Textos>
                            <Check concluido={() => { concluido(habito.id) }} desmarcar={() => desmarcar(habito.id)} id={habito.id} done={habito.done} />
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
                        <h1>{porcentagem.toFixed()}% dos hábitos concluídos</h1>
                    </TextoPorcentagem>
                    {habitos.map(habito =>
                        <Habito key={habito.id} >
                            {habito.currentSequence !== habito.highestSequence ? <Textos>
                                <h1>{habito.name}</h1> 
                                <h2>Sequência atual: {habito.currentSequence} dias</h2>
                                <h2>Seu recorde: {habito.highestSequence} dias</h2>
                            </Textos> : 
                            <SequenciaIgual>
                                <h1>{habito.name}</h1> 
                                <h2>Sequência atual: {habito.currentSequence} dias</h2>
                                <h2>Seu recorde: {habito.highestSequence} dias</h2>
                            </SequenciaIgual>
                            }
                            <Check concluido={() => { concluido(habito.id) }} desmarcar={() => desmarcar(habito.id)} id={habito.id} done={habito.done} />
                        </Habito>
                    )}
                    <Espaço />
                </Body>
                <Footer />
            </>
        )
    }
}

const TextoPorcentagem = styled.div`
    margin-top: 5px;
    margin-left: 20px;
    h1 {    
        font-family: 'Lexend Deca', sans-serif;
        color: #8FC549;
        font-size: 17.98px;
    }
`
const SequenciaIgual = styled.div`
        h1{
        color: #666666;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 19.98px;
        margin-bottom: 10px;
    }

    h2{
        color: #8FC549;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 12.98px;
        margin-top: 3px;
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

const Espaço = styled.div`
    height: 50px;
    margin-bottom: 70px;
`