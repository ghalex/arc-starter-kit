import React from 'react'
import PropTypes from 'prop-types'
import AutoLayout from 'autolayout'

class ConstraintLayout extends React.Component {
  state = { styles: {} }
  static displayName = 'ConstraintLayout'
  static defaultProps = {}

  static propTypes = {
    constraints: PropTypes.array,
    children: PropTypes.any,
    style: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.view = new AutoLayout.View()
    this.container = React.createRef()
    this.styles = {}
    this.createLayout()
  }

  createLayout() {
    let { constraints } = this.props
    let constraintsParsed = AutoLayout.VisualFormat.parse(constraints, {
      extended: true
    })

    this.view.addConstraints(constraintsParsed)
  }

  updateLayout() {
    let parent = this.container.current
    this.view.setSize(parent.clientWidth, parent.clientHeight)
  }

  updateStyles() {
    let styles = {}

    for (let key in this.view.subViews) {
      let subView = this.view.subViews[key]

      styles[key] = {
        position: 'absolute',
        padding: 0,
        margin: 0,
        width: subView.width,
        height: subView.height,
        transform: `translateX(${subView.left}px) translateY(${subView.top}px)`
      }
    }

    this.setState({ styles })
  }

  update() {
    this.updateLayout()
    this.updateStyles()
  }

  componentDidMount() {
    this.update()
    this.listner = () => {
      clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        this.update()
      }, 250)
    }

    window.addEventListener('resize', this.listner)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.listner)
  }

  render() {
    let { styles } = this.state
    let layoutStyle = {
      position: 'relative',
      margin: 0,
      padding: 0
    }

    let views = React.Children.map(this.props.children, child => {
      let { style, ...props } = child.props
      let computedStyle = { ...styles[props.id], ...style }

      return React.cloneElement(child, {
        style: computedStyle,
        ...props
      })
    })

    return (
      <div style={{ ...this.props.style, ...layoutStyle }} ref={this.container}>
        {views}
      </div>
    )
  }
}

export default ConstraintLayout
