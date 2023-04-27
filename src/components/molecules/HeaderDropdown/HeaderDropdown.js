import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button, DotsButton } from '../../atoms';
import './styles.css';
import { AttachIcon } from '../../../icons';

export default class HeaderDropdown extends Component {

	static propTypes = {
		attachMenu: PropTypes.bool,
		buttonsProps: PropTypes.arrayOf(PropTypes.shape({
			label: PropTypes.string.isRequired,
			onClick: PropTypes.func.isRequired,
		})).isRequired,
	}

	state = {
		show: false,
	}

	ref = createRef();

	componentDidMount () {
		document.addEventListener('click', this.handleDocumentClick);
	}

	componentWillUnmount () {
		document.removeEventListener('click', this.handleDocumentClick);
	}

	handleDocumentClick = (event) => {
		const { target } = event;
		const { show } = this.state;
		if (!this.ref.current) return;
		const isDropDownAreaClick = this.ref.current.contains(target);
		if (!show || isDropDownAreaClick) return;
		this.setState({ show: false });
	}

	handleClick = () => {
		const { show } = this.state;
		this.setState({ show: !show });
	}

	getClassName ({ show } = this.state) {
		return classNames({
			'HeaderDropdown-dropDownVisible': show,
		}, 'HeaderDropdown');
	}

	getDropDownButtonsFromProps ({ buttonsProps } = this.props) {
		return buttonsProps
			.map(({ label, onClick }) =>
				(<Button
					key={label}
					className='HeaderDropdown-button'
					color='white'
					onClick={onClick}
				>
					{label}
				</Button>));
	}

	getDropdownWrappperClassName (attachMenu) {
		return classNames({
			'HeaderDropdown-dropDownWrapper': true,
			'HeaderDropdown-wrapper-upside-down': attachMenu,
		});
	}

	getTriangleClassName (attachMenu) {
		return classNames({
			'HeaderDropdown-triangle': true,
			'HeaderDropdown-triangle-down': attachMenu,
		});
	}

	render () {
		const className = this.getClassName();
		return (
			<div ref={this.ref} className={className}>
				{this.props.attachMenu
					? <Button className='HeaderDropdown-attach' onClick={this.handleClick}><AttachIcon /></Button>
					: <DotsButton onClick={this.handleClick} className='HeaderDropdown-dotsButton' />}
				<div className={this.getDropdownWrappperClassName(this.props.attachMenu)}>
					<div className='HeaderDropdown-dropDown'>
						{this.getDropDownButtonsFromProps()}
					</div>
					<div className={this.getTriangleClassName(this.props.attachMenu)} />
				</div>
			</div>
		);
	}

}
