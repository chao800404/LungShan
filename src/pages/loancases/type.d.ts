export type CaseType = {
  title: string
  content: string
  case_image: {
    caseimage: { altText: string; sourceUrl: string }
  }
  date: string
  author: {
    node: {
      name: string
    }
  }
}

export type CaseData = {
  label: string
  connectedNode: {
    node: {
      slug: string
      allLoancase: {
        nodes: CaseType[]
      }
    }
  }
}
