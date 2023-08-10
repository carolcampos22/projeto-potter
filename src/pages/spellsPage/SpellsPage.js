import axios from 'axios';
import { useEffect, useState } from 'react';
import { SpellCard } from '../../components/spellsCard/SpellCard';
import { SpellsPageContainer, Spells } from './styles';
import { useRequestData } from '../../hooks/useRequestData';


export const SpellsPage = () => {

    const [spells, setSpells] = useState([])
    const url = "https://hp-api.onrender.com/api/spells"
    const [data, isLoading, isError] = useRequestData(url)

    useEffect(() => {
        setSpells(data)
    }, [])

    return (
        <Spells>
            <h1>All Spells</h1>
            <SpellsPageContainer>
                {isLoading ? (
                    <div>Carregando...</div>
                ) : isError ? (
                    <div>Ocorreu um erro</div>
                ) : (
                    spells.map((spell) => {
                        return <SpellCard key={spell.id} name={spell.name} description={spell.description} />
                    })
                )}

            </SpellsPageContainer>
        </Spells>
    )
}