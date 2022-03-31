import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import {ThreeDots} from "react-loader-spinner"
import TokenContext from "./TokenContext"
import { useContext } from "react"

export default function Login() {
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {setToken} = useContext(TokenContext);

    function fazerLogin(event) {
        event.preventDefault();
        setLoading(true);
        const promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
            email: email,
            password: senha
        })
        promessa.then(resposta => {
            console.log(resposta.status);
            setToken(resposta.data.token);
            navigate("/habitos");
        })
        promessa.catch(err => {
            alert("Credenciais incorretas! Por favor, digite novamente!")
            setLoading(false);
            setSenha("");
            setEmail("");
            console.log(err);
        })
    }

    return (
        <>
            <Logotipo>
                <h1>TrackIt</h1>
            </Logotipo>
            <Credenciais>
                <Formulario onSubmit={fazerLogin}>
                    {!loading ? <input type="email" value={email} required onChange={(e) => setEmail(e.target.value)} placeholder="email" /> : <InputCarregando type="email" value={email} disabled onChange={(e) => setEmail(e.target.value)} placeholder="email" /> }
                    {!loading ? <input type="password" value={senha} required onChange={(e) => setSenha(e.target.value)} placeholder="senha" /> : <InputCarregando type="password" value={senha} disabled onChange={(e) => setSenha(e.target.value)} placeholder="senha" />}
                    <Botao>
                        {!loading ? <button type="submit"> <p>Entrar</p></button> : <BotaoCarregando disabled><ThreeDots color="#FFFFFF" height={30} width={100} /></BotaoCarregando>}
                    </Botao>
                </Formulario>
            </Credenciais>
            <Cadastrar>
                <Link to="/cadastro">
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </Cadastrar>

        </>
    )
}

const Logotipo = styled.div`
    h1 {
        font-family: 'Playball', cursive;
        font-size: 68.98px;
        text-align: center;
        color:#126BA5;
    }
`

const Credenciais = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        width: 303px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        background-color: #FFFFFF;
        margin-top: 6px;
        outline: none;
    }

    input::placeholder{
        font-family: 'Lexend Deca', sans-serif;
        color: #DBDBDB;
        font-size: 19.98px;
    }
`

const Botao = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6px;

    button{
        width: 308px;
        height: 45px;
        background-color: #52B6FF;
        border-radius: 4.64px;
        border: 0 none;
    }

    button p{
        font-family: 'Lexend Deca', sans-serif;
        color: #FFFFFF;
        font-size: 20.98px;
    }

`

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
`

const Cadastrar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 13.98px;
        color: #52B6FF;
        text-decoration-line: underline;
    }
`

const BotaoCarregando = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6px;
    width: 308px;
    height: 45px;
    background-color: #52B6FF;
    border-radius: 4.64px;
    border: 0 none;
    outline: none;
    opacity: 0.7;

`

const InputCarregando = styled.input`
    background-color: #F2F2F2;
    box-sizing: border-box;
    border-radius: 5px;
    outline: none;
    border: 1px solid #D4D4D4;
    width: 303px;
    height: 45px;
`