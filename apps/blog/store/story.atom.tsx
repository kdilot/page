import { atom } from 'jotai'
import { articles } from '../articles'
import { TArticleCategory } from '../articles/article.type'

export const articleAtom = atom(articles)

export const articleCategoryAtom = atom<TArticleCategory | ''>('')

export const selectedCategoryArticleAtom = atom((get) => {
  const articles = get(articleAtom)
  const selectedCategory = get(articleCategoryAtom)
  if (!selectedCategory)
    return articles.map((article) => Object.keys(article.code)[0])
  return articles
    .filter((article) => article.category === selectedCategory)
    .map((article) => Object.keys(article.code)[0])
})
