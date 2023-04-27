import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import './styles.css';

const ELIPSIS = '...';
const REDUCTION = 3;

export default class MultilineEllipsis extends Component {

	static propTypes = {
		className: PropTypes.string,
		textContent: PropTypes.string,
	}

	static defaultProps = {
		textContent: '',
	}

	el = React.createRef();

	state = {
		textContent: '',
	};

	getClassName (className) {
		return classNames('MultilineEllipsis', className);
	}

	componentDidUpdate ({ textContent }) {
		if (this.props.textContent !== textContent) {
			this.updateTextContent(this.props.textContent, () => this.computeEllipsis());
		}
	}

	componentDidMount () {
		this.setupObserver();
	}

	componentWillUnmount () {
		this.observer.unobserve(this.el.current);
	}

	computeEllipsis () {
		const el = this.el.current;

		if (!el) return;
		const parentHeight = el.parentElement.clientHeight;
		// Keep replacing the last word with `...` until the span no longer exceeds its parent.
		while ((el.offsetHeight - parentHeight) > 6) this.setEllipsis(el);
	}

	handleIntersectionChange = ([{ isIntersecting }]) => {
		if (isIntersecting) {
			this.updateTextContent(this.props.textContent, () => this.computeEllipsis());
			this.observer.unobserve(this.el.current);
		}
	}

	setEllipsis (el) {
		/* Remove 3 characters at a time (remove 6, add 3 with ELIPSIS).
		   This is just to improve performance. */
		const lengthToShortenBy = REDUCTION + ELIPSIS.length;
		const shortenedString = el.textContent.slice(0, -lengthToShortenBy).trim();
		el.textContent = `${shortenedString}${ELIPSIS}`;
	}

	setupObserver = async () => {
		if (typeof IntersectionObserver === 'undefined') {
			await import('intersection-observer');
		}

		this.observer = new IntersectionObserver(this.handleIntersectionChange, { threshold: 1 });
		this.observer.observe(this.el.current);
	}

	updateTextContent (textContent, onComplete) {
		this.setState({ textContent }, onComplete);
	}

	render () {
		const { className, textContent } = this.props;
		return (
			<span
				className={this.getClassName(className)}
				ref={this.el}
				title={textContent}
			>
				{this.state.textContent}
			</span>
		);
	}

}
