import { LoancaseCardProps } from '../card/type'

export type LoanCasesSwiperProps<P> = {
  list: P[]
}

export type BlockComponent = <P extends LoancaseCardProps>(
  props: LoanCasesSwiperProps<P>
) => JSX.Element
