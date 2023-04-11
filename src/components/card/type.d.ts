export type LoancaseCardProps = {
  title: string
  imgUrl: string
  id: number
  slug?: string
  cases: {
    title: string
    id: number
    description: string
    imgUrl: string
    slug?: string
  }[]
  index?: number
}
