export type TArticleCategory = 'withJS' | 'issue' | 'etc'
export interface IArticleCode {
  [key: string]: React.ElementType
}
export interface IArticle {
  code: IArticleCode
  category: TArticleCategory
}
