/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';

/* ------------------------- Internal Dependencies -------------------------- */
import Render from './render';

/* ------------------------ Initialize Dependencies ------------------------- */

/* ---------------------------- Module Package ------------------------------ */
import { focusChange } from 'store/departments/actions'

function mapStateToProps(state) {
  const { data } = state
  return {};
}

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Render);
