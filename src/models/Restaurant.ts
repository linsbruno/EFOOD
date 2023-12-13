class Restaurant {
  image: string
  description: string
  infos: string[]
  note: number
  title: string
  id: number
  capa: string | undefined
  descricao: string | undefined
  avaliacao: number | undefined
  titulo: string | undefined

  constructor(
    image: string,
    description: string,
    infos: string[],
    note: number,
    title: string,
    id: number
  ) {
    this.image = image
    this.description = description
    this.infos = infos
    this.note = note
    this.title = title
    this.id = id
  }
}

export default Restaurant
