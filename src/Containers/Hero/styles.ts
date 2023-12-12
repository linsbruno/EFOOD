import styled from 'styled-components'
import background from '../../assests/images/background.png'
import { cores } from '../../styles'

export const Hero = styled.header`
  background-image: url(${background});
  padding-top: 44px;
  padding-bottom: 40px;
  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    gap: 138px;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 124px;
  }
`

export const Title = styled.h2`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: ${cores.laranja};
  width: 540px;
`
