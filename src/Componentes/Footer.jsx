import styled from "styled-components"

export default function Footer(){
    return (
        <>
            <Rodape>
                <p>Hábitos</p>
            </Rodape>
        </>
    )
}

const Rodape = styled.footer`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    left: 0;

    p{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 17.98px;
        color: #52B6FF;
    }
`