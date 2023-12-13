import styled from 'styled-components'
import { cores } from '../../styles'

export const CardMenuContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${cores.branco};
  background-color: ${cores.laranja};

  img {
    width: 100%;
    height: 166px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
  }
`
