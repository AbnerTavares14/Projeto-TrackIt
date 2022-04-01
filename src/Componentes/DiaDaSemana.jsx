import styled from "styled-components"

export default function DiaDaSemana(props) {
    const { dia, data, Mes } = props;
    const mes = Mes + 1;
    if (dia < 10) {
        if (mes < 10) {
            if (dia === 0) {
                return (
                    <Texto>
                        <h1>Domingo, {`0${data}/0${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 1) {
                return (
                    <Texto>
                        <h1>Segunda, {`0${data}/0${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 2) {
                return (
                    <Texto>
                        <h1>Terça, {`0${data}/0${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 3) {
                return (
                    <Texto>
                        <h1>Quarta, {`0${data}/0${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 4) {
                return (
                    <Texto>
                        <h1>Quinta, {`0${data}/0${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 5) {
                return (
                    <Texto>
                        <h1>Sexta, {`0${data}/0${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 6) {
                return (
                    <Texto>
                        <h1>Sábado, {`0${data}/0${mes}`}</h1>
                    </Texto>
                )
            }
        } else {
            if (dia === 0) {
                return (
                    <Texto>
                        <h1>Domingo, {`0${data}/${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 1) {
                return (
                    <Texto>
                        <h1>Segunda, {`0${data}/${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 2) {
                return (
                    <Texto>
                        <h1>Terça, {`0${data}/${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 3) {
                return (
                    <Texto>
                        <h1>Quarta, {`0${data}/${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 4) {
                return (
                    <Texto>
                        <h1>Quinta, {`0${data}/${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 5) {
                return (
                    <Texto>
                        <h1>Sexta, {`0${data}/${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 6) {
                return (
                    <Texto>
                        <h1>Sábado, {`0${data}/${mes}`}</h1>
                    </Texto>
                )
            }
        }
    } else {
        if (mes < 10) {
            if (dia === 0) {
                return (
                    <Texto>
                        <h1>Domingo, {`${data}/0${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 1) {
                return (
                    <Texto>
                        <h1>Segunda, {`${data}/0${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 2) {
                return (
                    <Texto>
                        <h1>Terça, {`${data}/0${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 3) {
                return (
                    <Texto>
                        <h1>Quarta, {`${data}/0${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 4) {
                return (
                    <Texto>
                        <h1>Quinta, {`${data}/0${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 5) {
                return (
                    <Texto>
                        <h1>Sexta, {`${data}/0${mes}`}</h1>
                    </Texto>
                )
            } else if (dia === 6) {
                return (
                    <Texto>
                        <h1>Sábado, {`${data}/0${mes}`}</h1>
                    </Texto>
                )
            }
        } else {
            if(dia === 0){
                return(
                    <Texto>
                        <h1>Domingo, {`${data}/${mes}`}</h1>
                    </Texto>
                )
            }else if(dia === 1){
                return(
                    <Texto>
                        <h1>Segunda, {`${data}/${mes}`}</h1>
                    </Texto>  
                )
            }else if(dia === 2){
                return(
                    <Texto>
                        <h1>Terça, {`${data}/${mes}`}</h1>
                    </Texto>
                )
            }else if(dia === 3){
                return(
                    <Texto>
                        <h1>Quarta, {`${data}/${mes}`}</h1>
                    </Texto>
                )
            }else if(dia === 4){
                return (
                    <Texto>
                        <h1>Quinta, {`${data}/${mes}`}</h1>
                    </Texto>
                )
            }else if(dia === 5){
                return(
                    <Texto>
                        <h1>Sexta, {`${data}/${mes}`}</h1>
                    </Texto>
                )
            }else if(dia === 6){
                return(
                    <Texto>
                        <h1>Sábado, {`${data}/${mes}`}</h1>
                    </Texto>
                )
            }
        }
    }
}

const Texto = styled.div`
    margin-top: 100px;

    h1 {
        font-family: 'Lexend Deca', sans-serif;
        color: #126BA5;
        font-size: 22.98px;
        margin-left: 20px;
    }
`