import { MDXProvider } from '@mdx-js/react'
import { GetStaticPaths, NextPage } from 'next'
import { useRouter } from 'next/router'
import { CodeBlock } from '../components'
import useArticle from '../hooks/useArticle'
import files from '../articles'
import { convertArticleName } from '../utils/article'

const comp = {
  p: (_props) => <p className="leading-9" {..._props} />,
  pre: (_props) => (
    <pre
      className="bg-[#141d29] p-[21px] pb-[0] text-[1.4rem] overflow-x-auto"
      {..._props}
    />
  ),
  h1: (_props) => <h1 className="font-bold text-[3.5rem]" {..._props} />,
  h2: (_props) => <h2 className="font-bold text-[2.5rem] mt-1" {..._props} />,
  h3: (_props) => <h3 className="font-bold text-[1.8rem]" {..._props} />,
  h4: (_props) => <h4 className="font-bold text-[1.6rem]" {..._props} />,
  blockquote: (_props) => (
    <blockquote
      className="flex flex-col p-3 border-l-[0.5rem] bg-[#141d29] border-primary gap-[0.4rem]"
      {..._props}
    />
  ),
  code: CodeBlock,
}

const Detail: NextPage = () => {
  const router = useRouter()
  const { query } = router
  const File = useArticle(query.id as string)

  if (!File) return null

  return (
    <article className="flex flex-col prose prose-2xl w-full gap-y-2 pt-4">
      <MDXProvider components={comp}>
        <File />
      </MDXProvider>
    </article>
  )
}

export default Detail

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: Object.keys(files).map((file) => {
      return {
        params: {
          id: convertArticleName(file),
        },
      }
    }),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: { id: params.id },
  }
}
