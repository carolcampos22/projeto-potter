import logo from '../../assets/logo.png'
import { HeaderContainer, Title } from './styles'

export const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <img className='logo' src={logo} />
            </div>
            <div>
                <Title>Potterpedia</Title>
            </div>

        </HeaderContainer>
    )
}