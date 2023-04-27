import React from 'react';
import { connect } from 'react-redux';
import DialogWithPlayer from './DialogWithPlayer';
import { mapDispatchToProps } from './DialogWithPlayer.maps';

export default connect(null, mapDispatchToProps)((props) => <DialogWithPlayer {...props} />);
