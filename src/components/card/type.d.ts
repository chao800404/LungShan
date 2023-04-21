export type CasesType = {
  title: string
  id: number | string
  description: string
  imgUrl: string
  date?: string
  author?: string
}

export type LoancaseCardProps = {
  title: string
  imgUrl: string
  id: number | string
  casePath?: string
  cases: CasesType[]
  index?: number
  description: string
}
