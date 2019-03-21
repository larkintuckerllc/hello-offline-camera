import { connect } from 'react-redux';
import AppCConnected from './AppCConnected';
import { dirtyGet, dirtyOn } from '../../../ducks/dirty';
import { onlineGet } from '../../../ducks/online';

const mapStateToProps = state => ({
  dirty: dirtyGet(state),
  online: onlineGet(state),
});

const mapDispatchToProps = {
  dirtyOn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppCConnected);
