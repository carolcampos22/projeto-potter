import styles, { styled } from "styled-components"

export const NavbarContainer = styled.div`
    background-color: #7F0909;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: .5vw;
    
`

export const NavButton = styled.button`
    background-color: #1A472A;
    color: white;
    margin-left: 3vw;
    border-radius: 5px;
    width: 10vw;
    height: 5vh;
    font-weight: bold;
    border: 1px solid white;
    margin: 1.5vh;

    &:hover{
        cursor: pointer;
        opacity: .8;
    }

    
    
`