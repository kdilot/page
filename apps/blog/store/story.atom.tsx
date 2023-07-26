import { atom } from 'jotai'
import { articles } from '../articles'
import { TArticleCategory } from '../articles/article.type'

export const articleAtom = atom(articles)

export const articleTypeAtom = atom<TArticleCategory>('all')

export const filteredArticleAtom = atom((get) => {
  const articles = get(articleAtom)
  const type = get(articleTypeAtom)

  if (type === 'all')
    return articles.map((article) => Object.keys(article.code)[0])

  return articles
    .filter((article) => article.category === type)
    .map((article) => Object.keys(article.code)[0])
})
