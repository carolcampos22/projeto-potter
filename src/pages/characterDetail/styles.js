import styled from "styled-components"

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: -1vh;
    margin-left: 17vw;
`

export const DetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
    flex-direction: column;
    background-color: #F0C75E;
    min-height: 76vh;
    

`

export const Details = styled.div`
    width: 45vw;
    height: 45vh;
    margin-bottom: 10vh;
    
`

export const Image = styled.img`
    background-color: purple;
    width: 25vw;
    height: 65vh;
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    margin-left: 20vw;
`

export const Button = styled.button`
    width: 10vw;
    height: 5vh;
    color: #FFF;
    background-color: #3C4E91;
    border: none;
    border-radius: 15px;
    font-size: 1.5rem;
    font-weight: bold;

    &:hover {
        cursor: pointer;
    }
`

export const PageHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40vw;

`