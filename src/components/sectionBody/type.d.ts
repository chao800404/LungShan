export type TableItem = {
  title: string
  description: string
}

export type TableContents<T> = {
  title: string
  contents: T[]
}

export type ImageContent = {
  title: string
  url: string
  id: number
}

export type TableProps = TableContents<TableItem>
