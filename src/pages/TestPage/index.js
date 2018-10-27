import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { ConstraintLayout } from 'components'

const Box = ({ name, color, style, children }) => {
  let customStyle = {
    background: color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  return <div style={{ ...style, ...customStyle }}>{children}</div>
}

const TestPage = props => {
  // let constraints = [
  //   'H:|-50-[b1]-50-|',
  //   'V:|[b1(100)]',
  //   'V:[b1][b2(100)]',
  //   'H:[b1][b2(100)]'
  // ]
  let constraints = [
    'HV:[b1(b2*2+8,b3*2+8)]',
    'HV:[b1(200)]',
    'H:|~[b1]~|',
    'V:|-50-[b1]',
    'H:[b1]-(b1*-1)-[b2]-[b3]',
    'V:[b1]-[b2,b3]'
  ]

  let style = {
    width: '100%',
    height: 400,
    margin: 0,
    padding: 0
  }

  return (
    <ConstraintLayout style={style} constraints={constraints}>
      <Box id='b1' color='yellow'>Box 1</Box>
      <Box id='b2' color='blue'>Box 2</Box>
      <Box id='b3' color='blue'>Box 3</Box>
    </ConstraintLayout>
  )
}

const withStoreProps = connect(
  state => {
    return {}
  },
  (dispatch, { history }) => {
    return {}
  }
)

export default compose(withStoreProps)(TestPage)
