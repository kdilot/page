import { List, ListItem } from '@page/blog/ui'
import { useRouter } from 'next/router'
import { convertArticleName } from '../utils/article'
import { agendas, legacies } from '../articles'

export function Index() {
  const router = useRouter()

  const onMove = (target: string) => {
    router.push(`/${convertArticleName(target)}`)
  }
  return (
    <div className="gap-6 w-full text-white mt-4">
      <List title="AGENDA">
        {Object.keys(agendas)
          .reverse()
          .map((file, index) => (
            <ListItem key={`${file}${index}`} onClick={() => onMove(file)}>
              {file}
            </ListItem>
          ))}
      </List>
      <List title="LEGACY">
        {Object.keys(legacies)
          .reverse()
          .map((file, index) => (
            <ListItem key={`${file}${index}`} onClick={() => onMove(file)}>
              {file}
            </ListItem>
          ))}
      </List>
    </div>
  )
}

export default Index
