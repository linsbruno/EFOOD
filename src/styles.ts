import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  tablet: '1023px',
  phone: '580px'
}

export const cores = {
  branca: '#FFFFFF',
  laranja: '#E66767',
  laranjaClaro: '#FFF8F2',
  laranjaMedio: '#FFEBD9',
  cinzaClaro: '#A3A3A3',
  verde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
 }

 body {
  background-color: ${cores.laranjaClaro};
  color: ${cores.laranja};
 }
.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width:${breakpoints.tablet}) {
    max-width: 80%;
  }
}
 `
