import { ListItem } from '@page/blog/ui'
import { useRouter } from 'next/router'
import { convertArticleName } from '../utils/article'
import { useAtom, useAtomValue } from 'jotai'
import {
  articleCategoryAtom,
  selectedCategoryArticleAtom,
} from '../store/story.atom'

export function Index() {
  const [category, setCategory] = useAtom(articleCategoryAtom)
  const selected = useAtomValue(selectedCategoryArticleAtom)
  const router = useRouter()

  const onMove = (target: string) => {
    router.push(`/${convertArticleName(target)}`)
  }
  return (
    <div className="gap-6 w-full text-white mt-6">
      <div className="block whitespace-pre overflow-auto min-h-[5rem] select-none mb-2 font-bold text-[1.8rem] md:text-[2rem] lg:text-[2rem]">
        <span
          data-selected={category === ''}
          className="px-2 pb-2 mb-1 border-b-4 border-white cursor-pointer hover:border-primary hover:text-primary"
          onClick={() => setCategory('')}
        >
          전체
        </span>
        <span
          data-selected={category === 'withJS'}
          className="px-2 pb-2 mb-1 border-b-4 border-white cursor-pointer hover:border-primary hover:text-primary"
          onClick={() => setCategory('withJS')}
        >
          JS / TS 활용 및 테스트
        </span>
        <span
          data-selected={category === 'etc'}
          className="px-2 pb-2 mb-1 border-b-4 border-white cursor-pointer hover:border-primary hover:text-primary"
          onClick={() => setCategory('etc')}
        >
          기타
        </span>
        <span
          data-selected={category === 'issue'}
          className="px-2 pb-2 mb-1 border-b-4 border-white cursor-pointer hover:border-primary hover:text-primary"
          onClick={() => setCategory('issue')}
        >
          이슈 정리
        </span>
      </div>
      {[...selected].reverse().map((file, index) => (
        <ListItem key={`${file}${index}`} onClick={() => onMove(file)}>
          {file}
        </ListItem>
      ))}
    </div>
  )
}

export default Index
