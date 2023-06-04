import logo from '../../assets/logo.png'
import { HeaderContainer } from './styles'

export const Header = () => {
    return (
        <HeaderContainer>
            <img className='logo' src={logo} />
            
        </HeaderContainer>
    )
}