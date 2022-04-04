import {useState} from "react";
import styled from "styled-components"

export default function Check(props){
    const {concluido, id, done, desmarcar } = props;
    // const [check, setCheck] = useState(false);
    // setCheck(done);

    return !done ? (
        <CheckOff onClick={() => { 
            concluido(id);
            }}>
            <ion-icon name="checkmark-outline"></ion-icon>
        </CheckOff>
    )
    :
    (
        <Checked onClick={() => { 
            desmarcar(id);
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