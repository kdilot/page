import { ListItem } from '@page/blog/ui'
import { useRouter } from 'next/router'
import { convertArticleName } from '../utils/article'
import { useAtom, useAtomValue } from 'jotai'
import { articleTypeAtom, filteredArticleAtom } from '../store/story.atom'
import { TArticleCategory } from '../articles/article.type'

export function Index() {
  const router = useRouter()

  const [type, setType] = useAtom(articleTypeAtom)
  const filteredArticle = useAtomValue(filteredArticleAtom)

  const handleType = (key: TArticleCategory) => {
    setType(key)
  }

  const onMove = (target: string) => {
    router.push(`/${convertArticleName(target)}`)
  }
  return (
    <div className="gap-6 w-full mt-6">
      <div className="flex gap-1 mb-2 text-[1.8rem] lg:text[2.2rem]">
        <div
          className="p-1 rounded-[0.5rem] cursor-pointer select-none font-bold"
          data-selected={type === 'all' ? true : false}
          onClick={() => handleType('all')}
        >
          ALL
        </div>
        <div
          className="p-1 rounded-[0.5rem] cursor-pointer select-none font-bold"
          data-selected={type === 'withJS' ? true : false}
          onClick={() => handleType('withJS')}
        >
          JS/TS
        </div>
        <div
          className="p-1 rounded-[0.5rem] cursor-pointer select-none font-bold"
          data-selected={type === 'issue' ? true : false}
          onClick={() => handleType('issue')}
        >
          ISSUE
        </div>
        <div
          className="p-1 rounded-[0.5rem] cursor-pointer select-none font-bold"
          data-selected={type === 'etc' ? true : false}
          onClick={() => handleType('etc')}
        >
          ETC
        </div>
      </div>
      {[...filteredArticle].reverse().map((file, index) => (
        <ListItem key={`${file}${index}`} onClick={() => onMove(file)}>
          {file}
        </ListItem>
      ))}
    </div>
  )
}

export default Index
