import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: pink;
    gap: 5vw;

    .characters{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: lightblue;
        width: 20vw;
        height: 40vh;
    }

    .spells{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color:lightgreen;
        width: 20vw;
        height: 40vh;
    }

    button{
        :hover{
            cursor: pointer;
        }
    }
`