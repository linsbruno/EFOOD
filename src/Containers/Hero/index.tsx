import * as S from './styles'

import logo from '../../assests/images/logo.svg'

const Hero = () => {
  return (
    <S.Hero>
      <div className="container">
        <img src={logo} alt="" />
        <S.Title>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Title>
      </div>
    </S.Hero>
  )
}

export default Hero