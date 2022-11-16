import NextSvg from './next-svg.mdx'
import NxNextMdx from './nx-next-mdx.mdx'
import ReactImageIssue from './react-image-issue.mdx'
import ReactLoadableComponent from './react-loadable-component.mdx'
import ReactIE11Issue from './react-ie11-issue.mdx'
import ReactWYSIWYG from './react-wysiwyg.mdx'
import ReactQuery from './react-query.mdx'
import ReduxToolkit from './redux-toolkit.mdx'
import ReactPortal from './react-portal.mdx'
import ReactStorybookUpdateIssue from './react-storybook-update-issue.mdx'

export const agendas = {
  'React Query 샘플 테스트': ReactQuery,
  'Redux Toolkit 샘플 테스트': ReduxToolkit,
  'React Portal로 모달을 만들어보자': ReactPortal,
  'React CRA 프로젝트 storybook 버전 업데이트시 이슈':
    ReactStorybookUpdateIssue,
  'Nx에서 생성된 NextJS 프로젝트에서 mdx 사용': NxNextMdx,
  'NextJS svg 파일을 적용하기 위한 설정': NextSvg,
}

export const legacies = {
  'IE11에서 React 프로젝트 실행 이슈': ReactIE11Issue,
  'React 업로드 된 이미지 사용시 발생하는 이슈': ReactImageIssue,
  'React CRA 프로젝트에서 eject 없이 code spliting 시도하기':
    ReactLoadableComponent,
  'React에서 eject 없이 사용할 수 있는 WYSIWYG 에디터': ReactWYSIWYG,
}

const files = { ...agendas, ...legacies }

export default files
