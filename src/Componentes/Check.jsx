import styled from "styled-components"
import axios from "axios"

export default function Check(props){
    const {id, done, atualizaHabitos, config } = props;
    function mudaCheck(id,tipo){
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${tipo}`;
        const promise = axios.post(URL,{}, config);
        promise.then(() => {
            atualizaHabitos();
        })
    }

    return !done ? (
        <CheckOff onClick={() => { 
            mudaCheck(id,'check');
            }}>
            <ion-icon name="checkmark-outline"></ion-icon>
        </CheckOff>
    )
    :
    (
        <Checked onClick={() => { 
            mudaCheck(id,'uncheck');
            }}>
            <ion-icon name="checkmark-outline"></ion-icon>
        </Checked>
    )
}

const CheckOff = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #EBEBEB;
    width: 69px;
    height: 69px;
    border-radius: 5px;
    border: 1px solid #E7E7E7;

    ion-icon{
        color: #FFFFFF;
        font-size: 60px;
    }
`

const Checked = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8FC549;
    width: 69px;
    height: 69px;
    border-radius: 5px;

    ion-icon{
        color: #FFFFFF;
        font-size: 60px;
    }
`