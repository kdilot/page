import NextSvg from './next-svg.mdx'
import NxNextMdx from './nx-next-mdx.mdx'

export const agendas = {
  'Nx에서 생성된 NextJS 프로젝트에서 mdx 사용': NxNextMdx,
  'NextJS svg 적용': NextSvg,
}

export const legacies = {}

const files = { ...agendas, ...legacies }

export default files
