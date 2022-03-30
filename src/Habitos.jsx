// import {useState} from "react"
// import axios from "axios"
import add from "./add.png"
import styled from "styled-components"

export default function Habitos(){
    return(
        <>
            <MeusHabitos>
                <p>Meus hábitos</p>
                <img src={add} alt="" />
            </MeusHabitos>
        </>
    )
}

const MeusHabitos = styled.div`
    display: flex;
    
`

// const AdicionarTarefa = styled.img`
    
// `
