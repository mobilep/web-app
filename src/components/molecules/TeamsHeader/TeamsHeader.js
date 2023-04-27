import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextInput from '../TextInput';
import { MultilineEllipsis, Button, TextInputWithIcon } from '../../atoms';
import { GroupChatIcon } from '../../../icons';
import { LanguageContext } from '../../../utils';

import './styles.css';

export default class TeamsHeader extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		buttonCancelText: PropTypes.string,
		buttonCancelUrl: PropTypes.string,
		buttonPrimaryText: PropTypes.string,
		buttonPrimaryUrl: PropTypes.string,
		createMode: PropTypes.bool,
		editMode: PropTypes.bool,
		header: PropTypes.string,
		onCancelClick: PropTypes.func,
		onDeleteClick: PropTypes.func,
		onInputChange: PropTypes.func,
		onPrimaryClick: PropTypes.func,
	};

	handleTextInputChange = (event) => {
		this.props.onInputChange(event.target.value);
	}

	getTeamNameRow () {
		const { editMode, createMode, onInputChange, header } = this.props;
		const { matches } = window.matchMedia('(max-width: 768px)');
		const viewMode = !createMode && !editMode;
		const { teams } = this.context;

		if (viewMode) return <MultilineEllipsis textContent={header} />;

		const textInputProps = { placeholder: teams.placeholder, maxLength: 128, name: 'teamName' };
		if (!matches) {
			return (
				<TextInput
					type='text'
					value={header}
					inputClassName='TeamsHeader-input'
					className='TeamsHeader-input-wrapper'
					onChange={this.handleTextInputChange}
					popUpPosition='bottomLeftPopUp'
					errorClassName='TeamsHeader-error'
					pattern='^\S.*'
					{...textInputProps}
				/>
			);
		}

		return (<TextInputWithIcon
			textInputProps={textInputProps}
			icon={<GroupChatIcon />}
			onChange={onInputChange}
			value={header}
		/>);
	}

	render () {
		const {
			buttonCancelText,
			buttonPrimaryText,
			createMode,
			editMode,
			onCancelClick,
			onPrimaryClick,
		} = this.props;

		const { matches } = window.matchMedia('(max-width: 768px)');

		return (
			<div className='TeamsHeader'>
				<div className='TeamsHeader-name'>
					{ this.getTeamNameRow() }
				</div>
				{!matches &&
					<div className='TeamsHeader-buttons'>
						<Button
							color='grey'
							className='Button-text TeamsHeader-cancel'
							onClick={onCancelClick}
						>
							{buttonCancelText}
						</Button>
						<Button
							className='Button-text'
							onClick={onPrimaryClick}
							type={editMode || createMode ? 'submit' : 'button'}
						>
							{buttonPrimaryText}
						</Button>
					</div>
				}
			</div>
		);
	}
}
