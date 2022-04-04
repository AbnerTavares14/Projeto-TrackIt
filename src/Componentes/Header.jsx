import styled from "styled-components"
// import Bob from "../Assets/Rectangle 14.png"
import { useContext } from "react"
import UserContext from "../Contexts/UserContext"

export default function Header(){
    const {foto} = useContext(UserContext);

    return(
        <>
            <Topo>
                <h1>TrackIt</h1>
                <Imagem src={foto} />
            </Topo>
        </>
    )
}

const Imagem = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    margin-right: 10px;
`

const Topo = styled.header`
    height: 70px;
    background-color: #126BA5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;

    h1{
        font-family: 'Playball', cursive;
        color: #FFFFFF;
        font-size: 38.98px;
        margin-left: 10px;
    }
`