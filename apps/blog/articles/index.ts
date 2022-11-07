import NextSvg from './next-svg.mdx'
import NxNextMdx from './nx-next-mdx.mdx'
import ReactImageIssue from './react-image-issue.mdx'
import ReactLoadableComponent from './react-loadable-component.mdx'
import ReactIE11Issue from './react-ie11-issue.mdx'

export const agendas = {
  'Nx에서 생성된 NextJS 프로젝트에서 mdx 사용': NxNextMdx,
  'NextJS svg 적용': NextSvg,
}

export const legacies = {
  'IE11에서 React 프로젝트 실행 이슈': ReactIE11Issue,
  'React 업로드 된 이미지 사용시 발생하는 이슈': ReactImageIssue,
  'React CRA 프로젝트에서 eject 없이 code spliting 시도하기':
    ReactLoadableComponent,
}

const files = { ...agendas, ...legacies }

export default files
