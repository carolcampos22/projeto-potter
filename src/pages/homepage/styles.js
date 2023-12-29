import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    gap: 5vw;
    min-height: 80vh;

    .characters{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20vw;

        &:hover{
            cursor: pointer;
        }
        
    }

    .spells{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20vw;

        &:hover{
            cursor: pointer;
        }
        
        
    }

`

