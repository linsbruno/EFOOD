import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.amarelo};
  height: 180px;
`

export const Links = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  padding: 45px;
  align-items: center;
`

export const LinkItem = styled.li`
  font-weight: bold;
  a {
    color: ${cores.laranja};
    text-decoration: none;
  }
`
