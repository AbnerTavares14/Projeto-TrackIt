import styled from "styled-components"
import Bob from "./Rectangle 14.png"

export default function Header(){
    return(
        <>
            <Topo>
                <h1>TrackIt</h1>
                <Imagem src={Bob} />
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
    position: fixed;
    width: 100%;
    top: 0;

    h1{
        font-family: 'Playball', cursive;
        color: #FFFFFF;
        font-size: 38.98px;
        margin-left: 10px;
    }
`