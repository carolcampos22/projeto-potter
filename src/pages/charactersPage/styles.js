import styled from 'styled-components'

export const CharactersPageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    background-color: #BEBEBE;
    
`
export const Button = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;

    button{
        background-color: #222f5b;
        color: #bebebe;
        font-weight: bold;
        font-size: 1rem;
        margin: .5vw 6vw;
        padding: .8rem;
        border: 2px solid #bebebe;
        border-radius: 8px;
    }

    
`

export const PageContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const Characters = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    background-color: #BEBEBE;
    min-height: 70vh;
`