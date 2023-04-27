import { Component } from 'react';
import PropTypes from 'prop-types';
import { withFireBaseContext } from '../../utils';
import constants from '../../constants';
const { common } = constants;
const { mediaLoadingStates: { COMPLETED, CHECKING } } = common;

class MediaStatesManager extends Component {
	static propTypes = {
		fireBaseDB: PropTypes.object,
		mediaInfo: PropTypes.object,
		onMediaStateUpdate: PropTypes.func,
	}

	componentWillUnmount () {
		const { mediaInfo } = this.props;
		const mediaList = Object.keys(mediaInfo);
		mediaList.forEach((id) => this.unSubscribeToMediaStateById(id));
	}

	componentDidMount () {
		const { mediaInfo } = this.props;
		this.subscribeToMediaState(mediaInfo);
	}

	componentDidUpdate ({ mediaInfo }) {
		try {
			const prevMediaKeys = JSON.stringify(Object.keys(mediaInfo));
			const mediaKeys = JSON.stringify(Object.keys(this.props.mediaInfo));

			if (prevMediaKeys !== mediaKeys) {
				this.subscribeToMediaState(this.props.mediaInfo);
			}
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error);
		}
	}

	subscribeToMediaState (mediaInfo = {}) {
		const mediaList = Object.keys(mediaInfo);
		mediaList.forEach((id) => {
			if (!mediaInfo[id].state) {
				this.subscribeToMediaStateById(id);
			}
		});
	}

	subscribeToMediaStateById (id) {
		const { fireBaseDB, onMediaStateUpdate } = this.props;

		onMediaStateUpdate({ id, state: CHECKING });
		fireBaseDB.ref(`audios/${id}`).on('value', (snapshot) => {
			const value = snapshot.val();

			if (!value) return;

			if (value.state === COMPLETED) {
				onMediaStateUpdate({ id, ...value });
				this.unSubscribeToMediaStateById(id);
			}
		});
	}

	unSubscribeToMediaStateById (id) {
		const { fireBaseDB } = this.props;
		fireBaseDB.ref(`audios/${id}`).off();
	}

	render () {
		return null;
	}
}

export default withFireBaseContext(MediaStatesManager);
