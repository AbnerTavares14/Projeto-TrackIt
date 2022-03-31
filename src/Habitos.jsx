import { useState, useEffect, useContext } from "react"
import axios from "axios"
import styled from "styled-components"
import Header from "./Header"


export default function Habitos({ token }) {
    const [habitos, setHabitos] = useState([]);
    const [nome, setNome] = useState("");
    const [add, setAdd] = useState(false);
    const [selecionado, setSelecionado] = useState("");

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const promise = axios.get(URL, config);
        promise.then(resposta => {
            console.log(resposta);
            setHabitos(resposta.data);
        })
    }, []);

    return !add ? (
        <>
            <Header />
            <Body>
                <MeusHabitos>
                    <p>Meus hábitos</p>
                    <ion-icon onClick={() => { setAdd(true) }} name="add-outline"></ion-icon>
                </MeusHabitos>
            </Body>
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
                        <form>
                            <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="nome do hábito" />
                            <ContainerDivs cor={selecionado}>
                                <div onClick={() => setSelecionado()}><p>D</p></div>
                                <div><p>S</p></div>
                                <div><p>T</p></div>
                                <div><p>Q</p></div>
                                <div><p>Q</p></div>
                                <div><p>S</p></div>
                                <div><p>S</p></div>
                            </ContainerDivs>

                        </form>
                    </Container>
                </Body>
            </>
        )
}

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

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            width: 30px;
            height: 30px;
            color: #FFFFFF;
            border: 1px solid #D4D4D4;
            margin-right: 3px;
        }
        p{
            font-family: 'Lexend Deca', sans-serif;
            color: #DBDBDB;
            font-size: 19.98px;
        }
    `
const Body = styled.div`
    background-color: #E5E5E5;
    height: 100vh;
`
