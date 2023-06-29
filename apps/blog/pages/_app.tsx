import { Header } from '@page/blog/ui'
import { AppProps } from 'next/app'
import Head from 'next/head'
import './styles.css'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col w-screen h-screen bg-slate-800">
      <Head>
        <title>Blog</title>
      </Head>
      <Header />
      <div className="flex justify-start items-center flex-col p-4 pt-[0px] pb-6 overflow-auto">
        <div className="flex justify-start items-center flex-col w-full md:w-1/2 lg:w-[55%]">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  )
}

export default CustomApp
