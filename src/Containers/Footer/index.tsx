import logo from '../../assests/images/logo.svg'
import insta from '../../assests/images/gadgets/instagram.png'
import face from '../../assests/images/gadgets/facebook.png'
import twitter from '../../assests/images/gadgets/twitter.png'

import * as S from './styles'
import { Link } from 'react-router-dom'

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <S.ListRedeSocial>
        <img src={insta} alt="" />
        <img src={face} alt="" />
        <img src={twitter} alt="" />
      </S.ListRedeSocial>
      <S.InfoFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.InfoFooter>
    </div>
  </S.FooterContainer>
)

export default Footer
