import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "./Header";
import TokenContext from "../Contexts/TokenContext";
import Dia from "./Dia";
import {ThreeDots} from "react-loader-spinner";
import Footer from "./Footer";
import PorcentagemContext from "../Contexts/Porcentagem";


export default function Habitos() {
    const [habitos, setHabitos] = useState([]);
    const [nome, setNome] = useState("");
    const [add, setAdd] = useState(false);
    const { token } = useContext(TokenContext);
    const semana = ["D", "S", "T", "Q", "Q", "S", "S"];
    const [dias, setDias] = useState([]);
    const [loading, setLoading] = useState(false);


    function armazenaDias(indice) {
        if (!dias.includes(indice)) {
            setDias([...dias, indice]);
        } else {
            const newArray = dias.filter(dia => dia !== indice);
            setDias(newArray);
        }
    }

    function criarHabito(event) {
        event.preventDefault();
        setLoading(true);
        const config1 = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const promessa = axios.post(URL, {
            name: nome,
            days: dias
        }, config1);
        promessa.then(resposta => {
            setHabitos([...habitos,resposta.data]);
            setNome("");
            setAdd(false);
            setLoading(false);
        });
        promessa.catch(err => {
            setNome("");
            console.log(err.statusText);
            alert("Preencha os campos corretamente!");
            setLoading(false);
        })
    }

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const promise = axios.get(URL, config);
        promise.then(resposta => {
            setHabitos(resposta.data);
        })
    }, [token,habitos.length]);

    function excluirHabito(id){
        const atualizaHabitos = habitos.filter(habito => {
            if(habito.id !== id){
                return habito;
            }
        })
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const exclui = axios.delete(URL, config);
        exclui.then(resposta => {
            setHabitos([...atualizaHabitos]);
        })
    }


    if (habitos.length === 0) {
        return !add ? (
            <>
                <Header />
                <Body>
                    <MeusHabitos>
                        <p>Meus hábitos</p>
                        <ion-icon onClick={() => { setAdd(true) }} name="add-outline"></ion-icon>
                    </MeusHabitos>
                    <Aviso><p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p></Aviso>
                    <Espaço />
                </Body>
                    <Footer />
            </>
        )
            :
            (
                <>
                    <Header />
                    <Body>
                        <MeusHabitos>
                            <p>Meus hábitos</p>
                            <ion-icon name="add-outline"></ion-icon>
                        </MeusHabitos>
                        <Container>
                            <form onSubmit={criarHabito}>
                                {!loading ? <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="nome do hábito" /> : <input value={nome} disabled onChange={(e) => setNome(e.target.value)} type="text" placeholder="nome do hábito" /> }
                                <ContainerDivs>
                                    {semana.map((dia, indice) =>
                                        { return !loading ? <Dia key={indice} i={indice} armazenaDia={(i) => armazenaDias(i)} dia={dia} /> : <Dia disabled key={indice} i={indice} armazenaDia={(i) => armazenaDias(i)} dia={dia} />}
                                    )}
                                </ContainerDivs>
                                {!loading ? <Cancelar onClick={() => setAdd(false)}><p>Cancelar</p></Cancelar> : <Cancelar disabled><p>Cancelar</p></Cancelar>}
                                {!loading ? <Salvar type="submit"><p>Salvar</p></Salvar> : <Salvar disabled><ThreeDots color="#FFFFFF" height={30} width={100} /></Salvar>}
                            </form>
                        </Container>
                        <Aviso><p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p></Aviso>
                        <Espaço />
                    </Body>
                        <Footer />
                </>
            )
    } else {
        return !add ? (
            <>
                <Header />
                <Body>
                    <MeusHabitos>
                        <p>Meus hábitos</p>
                        <ion-icon onClick={() => { setAdd(true) }} name="add-outline"></ion-icon>
                    </MeusHabitos>
                    {habitos.map(habito =>
                        <Habito key={habito.name}>
                            <>
                                <div className="texto">
                                    <p>{habito.name}</p>
                                    <ion-icon onClick={() => excluirHabito(habito.id)} name="trash-outline"></ion-icon>
                                </div>
                                <ContainerDias>
                                    {semana.map((dia, indice) => {
                                        if (habito.days.includes(indice)) {
                                            return (
                                                <Cinza key={indice + dia}><p>{dia}</p></Cinza>
                                            )
                                        } else {
                                            return (
                                                <Branco key={indice + dia}><p>{dia}</p></Branco>
                                            )
                                        }
                                    }
                                    )}
                                </ContainerDias>
                            </>
                        </Habito>
                    )}
                    <Espaço />
                </Body>
                    <Footer />
            </>
        )
            :
            (
                <>
                    <Header />
                    <Body>
                        <MeusHabitos>
                            <p>Meus hábitos</p>
                            <ion-icon name="add-outline"></ion-icon>
                        </MeusHabitos>
                        <Container>
                            <form onSubmit={criarHabito}>
                                {!loading ? <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="nome do hábito" /> : <input value={nome} disabled onChange={(e) => setNome(e.target.value)} type="text" placeholder="nome do hábito" /> }
                                <ContainerDivs>
                                    {semana.map((dia, indice) =>
                                        <Dia key={indice} i={indice} armazenaDia={(i) => armazenaDias(i)} dia={dia} />
                                    )}
                                </ContainerDivs>
                                {!loading ? <Cancelar onClick={() => setAdd(false)}><p>Cancelar</p></Cancelar> : <Cancelar disabled><p>Cancelar</p></Cancelar>}
                                {!loading ? <Salvar type="submit"><p>Salvar</p></Salvar> : <Salvar disabled><ThreeDots color="#FFFFFF" height={30} width={100} /></Salvar>}
                            </form>
                        </Container>
                        {habitos.map(habito =>
                            <Habito>
                                <>
                                    <div className="texto">
                                        <p>{habito.name}</p>
                                        <ion-icon name="trash-outline"></ion-icon>
                                    </div>
                                    <ContainerDias>
                                        {semana.map((dia, indice) => {
                                            if (habito.days.includes(indice)) {
                                                return (
                                                    <Cinza><p>{dia}</p></Cinza>
                                                )
                                            } else {
                                                return (
                                                    <Branco><p>{dia}</p></Branco>
                                                )
                                            }
                                        }
                                        )}
                                    </ContainerDias>
                                </>
                            </Habito>
                        )}
                        <Espaço />
                    </Body>
                        <Footer />
                </>
            )
    }
}

const Espaço = styled.div`
    height: 50px;
    margin-bottom: 50px;
`

const ContainerDias = styled.div`
    display: flex;
`

const Habito = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding: 20px;
    width: 340px;
    height: 91px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;

    .texto{
       display: flex ;
       justify-content: space-between;
    }

    ion-icon{
        margin-left: 30px;
        color: #666666;
    }

    p{
        font-family: 'Lexend Deca', sans-serif;
        color: #666666;
        font-size: 19.98px;
        margin-bottom: 10px;
    }


`

const Salvar = styled.button`
    background-color: #52B6FF;
    width: 84px;
    height: 35px;
    border-radius: 4.64px;
    outline: none;
    border: 0 none;
    position: absolute;
    right: 10px;
    bottom: 20px;

    p{
        font-family: 'Lexend Deca', sans-serif;
        color: #FFFFFF;
        font-size: 19.97px;
    }
`

const Cancelar = styled.button`
    background-color: #FFFFFF;
    width: 69px;
    height: 20px;
    border: 0 none;
    outline: none;
    position: absolute;
    right: 110px;
    bottom: 30px;

    p{
        font-family: 'Lexend Deca', sans-serif;
        color: #52B6FF;
        font-size: 15.98px;
    }
`

const Aviso = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    p{
        font-family: 'Lexend Deca', sans-serif;
        color: #666666;
        font-size: 17.98px;
    }
`

const MeusHabitos = styled.div`
    margin-top: 70px;
    display: flex;
    justify-content: space-between;
    

    p{
        margin-top: 28px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 22.98px;
        color: #126BA5;
        margin-left: 15px;
    }

    ion-icon{
        margin-top: 28px;
        font-family: 'Lexend Deca', sans-serif;
        margin-right: 15px;
        background-color: #52B6FF;
        border-radius: 4.63px;
        color: #FFFFFF;
        font-size: 26px;
    }
`

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 340px;
    height: 180px;
    border-radius: 5px;
    background-color: #FFFFFF;
    /* position: absolute;
    right: 20px; */
    padding-top: 20px ;
    margin: 0 auto;
    box-sizing: border-box;
    margin-top: 22px;

    input{
        width: 303px;
        height: 45px;
        background-color: #FFFFFF;
        border-radius: 5px;
        outline: none;
        border: 1px solid #D4D4D4;
        margin-bottom: 10px;
    }

    input::placeholder{
        color: #DBDBDB;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 19.98px;

    }
`

const ContainerDivs = styled.section`
        display: flex;
    `
const Body = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
    overflow-y: scroll;
`
const Branco = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    margin-right: 5px;
    background-color: #FFFFFF;

    p {
        font-family: 'Lexend Deca', sans-serif;
        color: #DBDBDB;
        font-size: 19.98px;
        margin-top: 10px;
    }
`

const Cinza = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    margin-right: 5px;
    background-color: #CFCFCF;

    p {
        font-family: 'Lexend Deca', sans-serif;
        color: #FFFFFF;
        font-size: 19.98px;
        margin-top: 10px;
    }
`