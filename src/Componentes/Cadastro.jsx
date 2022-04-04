import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { ThreeDots } from "react-loader-spinner"
import Logo from "../Assets/logo-trackit.png"

export default function Cadastro() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function fazerCadastro(event) {
        event.preventDefault();
        setLoading(true)
        const promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            email: email,
            name: nome,
            image: foto,
            password: senha
        });
        promessa.then((resposta) => {
            console.log(resposta);
            navigate("/");
        });
        promessa.catch((err) => {
            console.log(err);
            alert("Digite os campos corretamente!");
            setEmail("");
            setSenha("");
            setNome("");
            setFoto("");
            setLoading(false);
        })
    }

    return (
        <>
            <Logotipo>
                <img src={Logo} alt="" />
                <h1>TrackIt</h1>
            </Logotipo>
            <Credenciais>
                <Formulario onSubmit={fazerCadastro}>
                    {!loading ? <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" /> : <InputCarregando type="email" value={email} disabled onChange={(e) => setEmail(e.target.value)} placeholder="email" />}
                    {!loading ? <input type="password" required value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="senha" /> : <InputCarregando type="password" disabled value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="senha" />}
                    {!loading ? <input type="text" required value={nome} onChange={(e) => setNome(e.target.value)} placeholder="nome" /> : <InputCarregando type="text" disabled value={nome} onChange={(e) => setNome(e.target.value)} placeholder="nome" />}
                    {!loading ? <input type="text" required value={foto} onChange={(e) => setFoto(e.target.value)} placeholder="foto" /> : <InputCarregando type="text" value={foto} onChange={(e) => setFoto(e.target.value)} placeholder="foto" />}
                    <Botao>
                        {!loading ? <button type="submit"> <p>Cadastrar</p></button> : <BotaoCarregando disabled><ThreeDots color="#FFFFFF" height={30} width={100} /></BotaoCarregando>}
                    </Botao>
                </Formulario>
            </Credenciais>
            <Cadastrar>
                <Link to="/">
                    <p>Já tem uma conta? Faça login!</p>
                </Link>
            </Cadastrar>
        </>
    )
}

const Logotipo = styled.div`

    display: flex;
    margin-top: 50px;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    img{
        width: 181px;
        height: 100px;
    }
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