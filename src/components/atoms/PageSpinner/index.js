import React from 'react'
import cx from 'classnames'
import { Loader } from 'zebbra/components'
import { Container } from './styles'

const PageSpinner = ({ label, ...props }) => {
  let className = cx('page-spinner', props.className)

  return (
    <Container {...props} className={className}>
      <Loader color="primary" className="loader" vertical>
        {label}
        ...
      </Loader>
    </Container>
  )
}

PageSpinner.displayName = 'PageSpinner'
PageSpinner.defaultProps = {
  label: 'Loading'
}

export default PageSpinner
