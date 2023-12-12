import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  padding: 4px 6px;
  color: ${cores.laranja};
  background-color: ${cores.branco};
  display: inline-block;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  width: 100%;
`

export const ButtonLink = styled(Link)`
  padding: 4px 6px;
  background-color: ${cores.laranja};
  color: ${cores.branco};
  display: inline-block;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
`
