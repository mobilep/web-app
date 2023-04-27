import React, { Component, Fragment } from 'react';
import { VideoRecorderDialog } from '../components';
import PropTypes from 'prop-types';

const getDisplayName = (comp = {}) =>
	comp.displayName || comp.name || 'Component';

const WithRecord = (WrappedComponent) => {
	class WithRecord extends Component {

		static propTypes = {
			onClose: PropTypes.func,
		}

		state = {
			allowMount: false,
		}

		dialogRecordRef = React.createRef();

		currentDialog () {
			return this.dialogRecordRef.current;
		}

		handleCloseDialog = () => {
			this.setState({ allowMount: false }, () => {
				const { onClose = () => {} } = this.props;
				onClose();
			});
		}

		handleShowDialog = () => {
			this.setState({ allowMount: true });

			// Give time to render VideoRecorderDialog so it's possible to use ref
			setTimeout(() => this.currentDialog().showModal());
		}

		render () {
			return (
				<Fragment>
					{this.state.allowMount &&
						<VideoRecorderDialog
							ref={this.dialogRecordRef}
							{...this.props}
							onClose={this.handleCloseDialog}
						/>
					}
					<WrappedComponent
						{...this.props}
						onClick={this.handleShowDialog}
					/>
				</Fragment>
			);
		}
	}
	WithRecord.displayName = `WithRecord(${getDisplayName(WrappedComponent)})`;
	return WithRecord;
};

export default WithRecord;
