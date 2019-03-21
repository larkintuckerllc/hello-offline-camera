import { connect } from 'react-redux';
import AppCConnected from './AppCConnected';
import { onlineGet } from '../../../ducks/online';

const mapStateToProps = state => ({
  online: onlineGet(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppCConnected);
