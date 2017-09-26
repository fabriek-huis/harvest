/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import gql from 'graphql-tag';
/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';
/* ------------------------ Initialize Dependencies ------------------------- */
import { apolloQueryRequest } from 'store/departments/actions'
import { fromApollo } from 'store/departments/selectors'

const MyQuery = gql`
query {
  users {
    projects {
      id
    }
  }
}
`;
/* ---------------------------- Module Package ------------------------------ */
function mapStateToProps(state) {
  const status = (fromApollo.getQueryStatus(state, 'test'))
  const data = (fromApollo.getQueryData(state, 'test'))
  return {
    data,
    status,
    query: MyQuery
  };
}

const mapDispatchToProps = dispatch => ({
  apolloQueryRequest: () => dispatch(apolloQueryRequest({payload:{id: 'test', gql: MyQuery }})),
})

export default connect(mapStateToProps, mapDispatchToProps)(Render);
