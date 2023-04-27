import React, { Component, Fragment } from 'react';
import { DragAndDropDialog } from '../components';

const getDisplayName = (comp = {}) =>
	comp.displayName || comp.name || 'Component';

const WithUpload = (WrappedComponent) => {
	class WithUpload extends Component {

		dialogUploadRef = React.createRef();

		handleShowDialog = () =>
			this.dialogUploadRef.current.showModal();

		render () {
			return (
				<Fragment>
					<DragAndDropDialog
						ref={this.dialogUploadRef}
						{...this.props}
					/>
					<WrappedComponent
						{...this.props}
						onClick={this.handleShowDialog}
					/>
				</Fragment>
			);
		}
	}
	WithUpload.displayName = `WithUpload(${getDisplayName(WrappedComponent)})`;
	return WithUpload;
};

export default WithUpload;
