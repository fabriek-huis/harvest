/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
/* ------------------------ Initialize Dependencies ------------------------- */
import { fromApollo } from 'store/departments/selectors'
import { apolloQueryRequest } from 'store/departments/actions'
/* ---------------------------- Module Package ------------------------------ */
/*---*--- Recompose ---*---*/
const defaultState = withState({
  list: null
})
const defaultProps = withProps({

})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {
      switch(this.props.queryStatus) {
        case('initialize'):
          this.props.apolloQueryRequest(this.props.query) // Initialize Apollo Query in Redux Apollo Sagas
          break;
        case('requestReturned'):
          this.setState({
            ...this.props.queryData // Listen for Apollo Query Response in Redux Apollo Sagas
          })
          break;
        case('failure'):
          this.setState({
            status: false
          })
          break;
      }
  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(prevProps.queryStatus !== this.props.queryStatus ) {
      switch(this.props.queryStatus) {
        case('initialize'):
          this.props.apolloQueryRequest(this.props.query) // Initialize Apollo Query in Redux Apollo Sagas
          break;
        case('requestReturned'):
          this.setState({
            ...this.props.queryData // Listen for Apollo Query Response in Redux Apollo Sagas
          })
          break;
        case('failure'):
          this.setState({
            data: null,
            status: 'Failure: Unable to retreive the requested data',
          })
          break;
      }
    }
  }
})


/*---*--- Redux ---*---*/
function mapStateToProps(state, props) {
  const { query }  = props
  return {
    queryStatus: (fromApollo.getQueryStatus(state, props.query)),
    queryData: (fromApollo.getQueryData(state, props.query))
  };
}
const mapDispatchToProps = (dispatch, props) => ({
  apolloQueryRequest: (query) => dispatch(apolloQueryRequest({
    payload:{
      id: props.query,
      gql: props.gql,
      variables: props.variables,
  }
})),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
  defaultState,
  defaultProps,
)(Render);
