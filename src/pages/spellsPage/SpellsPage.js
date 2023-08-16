import axios from 'axios';
import { useEffect, useState } from 'react';
import { SpellCard } from '../../components/spellsCard/SpellCard';
import { SpellsPageContainer, Spells, Button } from './styles';
import { useRequestData } from '../../hooks/useRequestData';
import { useNavigate } from 'react-router-dom';
import { goToCharactersPage } from '../../routes/coordinator';


export const SpellsPage = () => {

    const [spells, setSpells] = useState([])
    const url = "https://hp-api.onrender.com/api/spells"
    const [data, isLoading, isError] = useRequestData(url)
    const navigate = useNavigate()

    useEffect(() => {
        setSpells(data)
    }, [data])

    return (
        <>
            <div>
                <Button onClick={() => goToCharactersPage(navigate)}>Voltar</Button>
            </div>
            <div>
                <Spells>
                    <h1>Spells</h1>
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
            </div>
        </>
    )
}