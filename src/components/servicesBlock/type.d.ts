export type LinkGroupType = {
  id: string | number
  title: string
  slug: string
}

export type ListItem = {
  id: number | string
  title: string
  description: string
}

export type TableItem = {
  id: number | string
  comp_1: string
  comp_2: string
  name: string
}

export type CaseItem = {
  id: string
  title: string
  list: ListItem[] | null
}

export type ContentFirstType = {
  title: string
  list: ListItem[]
}

export type ContentSecondType = {
  title: string
  description: string
  list: ListItem[]
}

export type CompareType = {
  header: TableItem[]
  body: TableItem[]
}

export type CaseType = {
  title: string
  list: CaseItem[]
}

export type ServiceData = {
  title: string
  imgUrl: string
  subtitle: string
  description: string | null
  id: number | string
  topLevel: {
    title: string
    amount: string
  }
  recommendations: boolean
  slug: string
  casePath: string
  caseType: CaseType | null
  linkGroup: LinkGroupType[] | null
  feature: string[]
  content_1: ContentFirstType | null
  content_2: ContentSecondType | null
  content_3: ContentSecondType
  content_4: ListItem[] | null
  compare_table: CompareType | null
}

type ServiceCoverBlockProps = {
  title: ServiceData['title']
  feature: ServiceData['feature']
  linkGroup: ServiceData['linkGroup']
  casePath: ServiceData['casePath']
  imgUrl: ServiceData['imgUrl']
}

export type ServiceCoverBlockElement = (
  props: ServiceCoverBlockProps
) => JSX.Element

export type ServiceSuitableElement = (props: ContentFirstType) => JSX.Element
export type ServiceKnowledgeElement = (props: ContentSecondType) => JSX.Element
export type ServiceTableElement = (props: CompareType) => JSX.Element
export type ServiceProcessElement = (props: ContentSecondType) => JSX.Element
