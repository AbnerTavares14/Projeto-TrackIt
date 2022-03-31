import styled from "styled-components";
import { useState } from "react";

export default function Dia(props) {
    const [cor, setCor] = useState("#FFFFFF");

    const { dia, armazenaDia, i } = props;
    return cor === "#FFFFFF" ?
        <Branco onClick={() => {
            setCor("#CFCFCF");
            armazenaDia(i);
    }}><p>{dia}</p> </Branco>
        :
        <Cinza onClick={() => {
            setCor("#FFFFFF");
            armazenaDia(i);
    }}><p>{dia}</p></Cinza>
}

const Branco = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    margin-right: 3px;
    background-color: #FFFFFF;

    p {
        font-family: 'Lexend Deca', sans-serif;
        color: #DBDBDB;
        font-size: 19.98px;
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
    margin-right: 3px;
    background-color: #CFCFCF;

    p {
        font-family: 'Lexend Deca', sans-serif;
        color: #FFFFFF;
        font-size: 19.98px;
    }
`