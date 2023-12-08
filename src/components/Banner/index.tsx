import { Imagem, Titulo } from './styles'

import bannerImg from '../../assests/images/banner.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </div>
  </Imagem>
)

export default Banner
