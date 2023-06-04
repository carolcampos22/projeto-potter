import axios from 'axios';
import { useEffect, useState } from 'react';
import { SpellCard } from '../../components/spellsCard/SpellCard';
import { SpellsPageContainer, Spells } from './styles';

export const SpellsPage = () => {

    const [spells, setSpells] = useState([])

    const fetchSpells = () => {
        axios.get("https://hp-api.onrender.com/api/spells")
            .then((response) => {
                setSpells(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchSpells()
    }, [])


    return (
        <Spells>
            <h1>All Spells</h1>
            <SpellsPageContainer>
            
            {spells.map((spell) => {
                return <SpellCard key={spell.id} name={spell.name} description={spell.description} />
            })}
        </SpellsPageContainer>
        </Spells>
    )
}