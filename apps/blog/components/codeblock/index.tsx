import React, { useEffect, useState } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/okaidia'

const CodeBlock = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return null
  }

  if (typeof window === 'undefined') {
    return <></>
  }

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language="typescript"
      theme={theme}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <code className="table-caption">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  )
}

export default CodeBlock
