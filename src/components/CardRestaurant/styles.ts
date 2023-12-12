import styled from 'styled-components'

import { cores } from '../../styles'
import { Tag } from '../Tag/styles'

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 6px;
  color: ${cores.laranja};
`

export const Img = styled.img`
  width: 100%;
  height: 216px;
  object-fit: cover;
  display: block;
`
export const AreaDestaque = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;

  ${Tag} {
    margin-right: 8px;
  }
`

export const AreaInfos = styled.div`
  padding: 8px;
  border: 1px solid ${cores.laranja};
  border-top: transparent;
  background-color: ${cores.branco};
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 18px;
  line-height: 22px;
`
export const AreaNote = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-weight: bold;
  }

  svg {
    margin-bottom: 3px;
    path {
      color: orange;
    }
  }
`

export const AreaTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`
export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
  text-overflow: ellipsis;
  line-height: 22px;
  overflow: hidden;
  height: 66px;
`
