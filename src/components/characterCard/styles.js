import styled from 'styled-components'

export const CardContainer = styled.div`
    border: solid black 3px;
    border-radius: 17px;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contente: center;
    padding: 1vh;
    background-color: ${(props) => {
        return props.color
    }};
    margin: 2vw;
    

    img {
        width: 15vw;
        height: 40vh;
        
    }

    button {
        width: 80%;
        height: 5vh;
        border-radius: 15px;
        font-weight: bold;
        font-size: 1.5rem;
        background-color: black;
        color: #FFFFFF;
        border: none;

        &:hover{
            cursor: pointer;
            background-color: white;
            color: black;  
        }
    }
    
`