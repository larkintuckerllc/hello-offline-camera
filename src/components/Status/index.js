import { connect } from 'react-redux';
import StatusView from './StatusView';
import { onlineGet } from '../../ducks/online';

const mapStateToProps = state => ({
  online: onlineGet(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusView);
