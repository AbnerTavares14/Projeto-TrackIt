import styled from "styled-components"
import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import axios from "axios"

export default function TelaLogin() {
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    function fazerLogin(event){
        event.preventDefault();
        
        // const token = Buffer.from(`${email}:${senha}`, 'utf8').toString('base64')

        console.log(email)
        console.log(senha)
        const promessa = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
            email:email,
            password:senha
        })
        promessa.then(resposta => {
            console.log(resposta.status);
            navigate("/habitos");
        })
        promessa.catch(err => {
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
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                    <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="senha" />
                    <Botao>
                        <button type="submit"> <p>Entrar</p></button>
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