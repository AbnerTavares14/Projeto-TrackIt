import styled from "styled-components"
import {Link} from "react-router-dom"
import {useState} from "react"
import axios from "axios"

export default function Cadastro(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");

    function fazerCadastro(event){
        event.preventDefault();
        const promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", {
            email:email,
            name:nome,
            image:foto,
            password:senha
        });
        promessa.then((resposta) => {
            console.log(resposta);
        });
        promessa.catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <Logotipo>
                <h1>TrackIt</h1>
            </Logotipo>
            <Credenciais>
                <Formulario onSubmit={fazerCadastro}>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                    <input type="password" onChange={(e) => setSenha(e.target.value)} placeholder="senha" />
                    <input type="text" onChange={(e) => setNome(e.target.value)} placeholder="nome" />
                    <input type="text" onChange={(e) => setFoto(e.target.value)} placeholder="foto" />
                    <Botao>
                        <button type="submit"> <p>Cadastrar</p></button>
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