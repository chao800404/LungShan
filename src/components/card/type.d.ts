export type CasesType = {
  title: string
  id: number | string
  description: string
  imgUrl: string
}

export type LoancaseCardProps = {
  title: string
  imgUrl: string
  id: number | string
  casePath?: string
  cases: CasesType[]
  index?: number
}