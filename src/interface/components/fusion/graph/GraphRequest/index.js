/* ------------------------- External Dependencies -------------------------- */
import { gql, graphql } from 'react-apollo';
/* ------------------------- Internal Dependencies -------------------------- */

/* ------------------------ Initialize Dependencies ------------------------- */
const MyQuery = gql`
query {
  users {
    uid
  }
}
`;
/* ---------------------------- Module Package ------------------------------ */
const GraphRequest = props => props.children
/* ---------------------------- Module Package ------------------------------ */

export default graphql(MyQuery)(GraphRequest);
