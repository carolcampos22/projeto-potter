import { useEffect } from "react"
import { CharacterCard } from "../../components/characterCard/CharacterCard"
import { CharactersPageContainer } from "./styles"
import axios from 'axios'
import { useState } from "react"

export const CharactersPage = () => {
    const [characters, setCharacters] = useState([])

    const fetchCharacter = () => {
        axios.get("https://hp-api.onrender.com/api/characters")
            .then((response) => {
                setCharacters(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchCharacter()
    }, [])

    return (
        <CharactersPageContainer>
            {characters.slice(0, 25).map((char, index) => {
                return <CharacterCard name={char.name} image={char.image} actor={char.actor} key={index}/>
                 
            })}
            
            
            
            
        </CharactersPageContainer>
    )
}