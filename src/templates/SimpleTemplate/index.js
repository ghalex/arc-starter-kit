import React from 'react'
import PropTypes from 'prop-types'
import { version } from '/../package.json'

const SimpleTemplate = ({ children, ...props }) => {
  return (
    <div {...props}>
      <section>{children}</section>
      <footer>
        © 2018 StarterKit, <a href="#">v{version}</a>
      </footer>
    </div>
  )
}

SimpleTemplate.propTypes = {
  children: PropTypes.node
}

export default SimpleTemplate
