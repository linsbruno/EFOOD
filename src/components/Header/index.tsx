import { HeaderBar, LinkItem, Links } from './styles'

import logo from '../../assests/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <nav>
      <Links>
        <LinkItem>
          <a href="#">Restaurantes</a>
        </LinkItem>
        <LinkItem>
          <a href="#">
            <img src={logo} alt="EFOOD" />
          </a>
        </LinkItem>
        <LinkItem>
          <a href="#">0 produto(s) no carrinho</a>
        </LinkItem>
      </Links>
    </nav>
  </HeaderBar>
)

export default Header
