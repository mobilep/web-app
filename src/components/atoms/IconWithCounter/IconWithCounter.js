import React, { createRef, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

class IconWithCounter extends PureComponent {

	static propTypes = {
		counter: PropTypes.number,
		icon: PropTypes.element.isRequired,
	};

	state = {
		isChanging: true,
	};

	counterRef = createRef();

	genClassName = (state) => classNames('IconWithCounter-counter', {
		'IconWithCounter-counter-animation': state.isChanging,
	});

	handleAnimationEnd = () => {
		this.setState({ isChanging: false });
	}

	componentDidUpdate (prevProps) {
		/* eslint-disable-next-line react/no-did-update-set-state */
		if (prevProps.counter !== this.props.counter) this.setState({ isChanging: true });
	}

	render () {
		const { counter, icon } = this.props;
		const unreadCount = counter > 9 ? '9+' : counter;

		return (
			<div className='IconWithCounter'>
				{unreadCount
					? <div
						className={this.genClassName(this.state)}
						onAnimationEnd={this.handleAnimationEnd}
					>
						{unreadCount}
					</div>
					: null
				}
				{icon}
			</div>
		);
	}
}

export default IconWithCounter;
