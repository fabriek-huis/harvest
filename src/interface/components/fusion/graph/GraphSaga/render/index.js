/* ------------------------- External Dependencies -------------------------- */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
/* ------------------------- Internal Dependencies -------------------------- */
/* ------------------------ Initialize Dependencies ------------------------- */
/* ---------------------------- Module Package ------------------------------ */
class GraphSaga extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  /*--- Property Types ---*/
  static propTypes = {

  }

  /*--- Default Properties ---*/
  static defaultProps = {

  }

  /*--- Component Mount ---*/
  componentDidMount() {
      switch(this.props.status) {
        case('initialize'):
          this.props.apolloQueryRequest()
          break;
        case('requestReturned'):
          this.setState({
            data: {...this.props.data.loading}
          })
          break;
        case('failure'):
          this.setState({
            data: null
          })
          break;
      }
  }

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(prevProps.status !== this.props.status ) {
      switch(this.props.status) {
        case('requestReturned'):
          this.setState({
            data: {...this.props.data}
          })
          break;
        case('failure'):
          this.setState({
            data: null
          })
          break;
      }
    }
  }

  /*--- Render ---*/
  render() {
    const { data } = this.state
    return (
      <div>
        {!data ? null : <div>Graph Saga</div> }
      </div>
    )
  }
}
/* ---------------------------- Export Package ------------------------------ */
export default GraphSaga
