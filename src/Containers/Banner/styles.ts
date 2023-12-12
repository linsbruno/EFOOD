import styled from 'styled-components'
import img from '../../assests/images/banner.png'

export const BannerContainer = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  padding-top: 24px;
  padding-bottom: 34px;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    position: relative;
    z-index: 1;

    h3 {
      font-weight: 100;
      font-size: 32px;
      line-height: 38px;
      color: #fff;
    }
  }
`
export const Title = styled.h2`
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  color: #fff;
`
