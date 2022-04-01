import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import PorcentagemContext from "../Contexts/Porcentagem";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Footer() {

    const { numeroHabitos } = useContext(PorcentagemContext);
    console.log(numeroHabitos)
    const porcentagem = numeroHabitos / 200;
    console.log(porcentagem)

    return (
        <>
            <Rodape>
                <Link to='/habitos'>
                    <p>Hábitos</p>
                </Link>
                <Link to='/hoje'>
                    <div>
                        <CircularProgressbar
                            strokeWidth={7}
                            background={true}
                            backgroundPadding={7}
                            value={0}
                            text={`Hoje`}
                            styles={{
                                // Customize the root svg element
                                root: {},
                                // Customize the path, i.e. the "completed progress"
                                path: {
                                    // Path color
                                    stroke: `rgba(62, 152, 199, ${porcentagem / 100})`,
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',
                                    // Customize transition animation
                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                    // Rotate the path
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center ',
                                },
                                // Customize the circle behind the path, i.e. the "total progress"
                                trail: {
                                    // Trail color
                                    stroke: '#FFFFFF',
                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'round',
                                    // Rotate the trail
                                    transform: 'rotate(0.25turn)',
                                    transformOrigin: 'center',
                                },
                                // Customize the text
                                text: {
                                    // Text color
                                    fill: '#FFFFFF',
                                    // Text size
                                    fontSize: '17.98px',
                                    fontFamily: 'Lexend Deca, sans-serif',
                                    padding: '40',
                                },
                                // Customize background - only used when the `background` prop is true
                                background: {
                                    fill: '#52B6FF',
                                },
                            }}
                        />
                    </div>
                </Link>
                <Link to='/historico'>
                    <p>Histórico</p>
                </Link>
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;

    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 17.98px;
        color: #52B6FF;
    }

    a{
        text-decoration: none;
    }

    div {
        width: 90px;
        height: 130px;
        margin: 0 auto;
        /* background-color: #52B6FF; */
    }
`