import { convertArticleName, revertArticleName } from './article'

describe('article.ts', () => {
  it('convertArticleName', () => {
    const str = 'convert 테스트용 문구'

    expect(convertArticleName(str)).toBe('convert-테스트용-문구')
  })

  it('convertArticleName with Null', () => {
    const str = ''

    expect(convertArticleName(str)).toBe('')
  })

  it('revertArticleName', () => {
    const str = 'revert-테스트용-문구'

    expect(revertArticleName(str)).toBe('revert 테스트용 문구')
  })

  it('revertArticleName with Null', () => {
    const str = ''

    expect(revertArticleName(str)).toBe('')
  })
})
