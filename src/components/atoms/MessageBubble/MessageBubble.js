import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import './styles.css';
import SendAgo from '../SendAgo/SendAgo';

class MessageBubble extends Component {
	getClassName ({ className, incoming, singleOrLast, partial }) {
		return classNames({
			MessageBubble: true,
			[className]: true,
			'MessageBubble-single': !incoming && singleOrLast,
			'MessageBubble-incoming-single': incoming && singleOrLast,
			'MessageBubble-middle': !incoming && !singleOrLast,
			'MessageBubble-incoming-middle': incoming && !singleOrLast,
			'MessageBubble-partial': partial,
		});
	}

	render () {
		const {
			className, children, incoming, singleOrLast, timeString, partial, partialEnd,
			showSendAgo, timeStamp,
		} = this.props;

		return (
			<div className={this.getClassName({ className, incoming, singleOrLast, partial })}>
				{!partialEnd &&
					<Fragment>
						{ showSendAgo && <SendAgo date={timeStamp} /> }
						<div className='MessageBubble-time'>{timeString}</div>
					</Fragment>
				}
				{children && <div>{children}</div>}
			</div>
		);
	}
}

MessageBubble.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	incoming: PropTypes.bool,
	partial: PropTypes.bool,
	partialEnd: PropTypes.bool,
	showSendAgo: PropTypes.bool,
	singleOrLast: PropTypes.bool,
	timeStamp: PropTypes.number,
	timeString: PropTypes.string,
};

MessageBubble.defaultProps = {
	singleOrLast: true,
	incoming: false,
};

export default MessageBubble;
