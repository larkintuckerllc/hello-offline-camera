import { connect } from 'react-redux';
import { onlineFetch, onlineOff, onlineOn } from '../../../ducks/online';
import AppImagesState from './AppImagesState';

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  onlineFetch,
  onlineOff,
  onlineOn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppImagesState);
