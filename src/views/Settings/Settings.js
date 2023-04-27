import React, { createRef, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { userInfo } from '../../redux/reducers';
import { withLanguageContext } from '../../utils/LanguageContext';
import { /* Button, */ SettingsPanel } from '../../components/atoms';
import { /* DialogWithButtonGroup, */ MobileHeader, Tutorials } from '../../components/molecules';
import { FolderIcon, GlobeIcon, QuestionIcon /* , TrashIcon2 */} from '../../icons';

import './styles.css';
import routes from '../../constants/routes';

class Settings extends Component {

	static propTypes = {
		content: PropTypes.object,
		contextSettings: PropTypes.object,
		history: PropTypes.object,
		// onDeleteUserClick: PropTypes.func,
	};

	dialogRef = createRef();

	handleCancelClick = () =>
		this.dialogRef.current.close();

	// handleDeleteClick = () =>
	// 	this.dialogRef.current.showModal();

	backClick = () =>
		this.props.history.push(routes.LEARNER_REPORT);

	handleLanguageChange = ({ currentTarget: { value } }) =>
		this.props.contextSettings.setLanguage(value);

	mapLanguageOptions = ({ availableLanguages }, { language }) =>
		availableLanguages.map((value) =>
			<option value={value} key={value}>{language.languages[value]}</option>
		);

	renderLink = (url, text) =>
		<a href={url} target='_blank' rel='noopener noreferrer'>{text}</a>;

	helpLink = this.renderLink('mailto:help@mobilepractice.io', 'help@mobilepractice.io');
	resourcesLink = this.renderLink('https://resources.mobilepractice.io/', 'resources.mobilepractice.io');

	render () {
		const { contextSettings, content: { /* common, */ settings } } = this.props;

		const { matches } = window.matchMedia('(max-width: 768px)');

		return (
			<div className='Settings'>
				{matches && <MobileHeader
					className='SettingsHeader'
					arrowClassName='SettingsHeader-button'
					crossIconType={false}
					title={settings.settings}
					closeButtonHandler={this.backClick}
					hasNoMenu={true}
				/>}
				<div className='Settings-grid'>
					<SettingsPanel
						title={settings.help.title}
						description={settings.help.description}
						icon={<QuestionIcon />}
						action={this.helpLink}
					/>
					<SettingsPanel
						title={settings.resources.title}
						description={matches ? settings.resources.descriptionTutorials : settings.resources.description}
						icon={<FolderIcon />}
						action={matches ? <Tutorials /> : this.resourcesLink}
					/>
					{/* TODO: Remove or uncomment when we will know more about this functionality */}
					{/* <SettingsPanel
						title={settings.deleteAccount.title}
						description={settings.deleteAccount.description}
						icon={<TrashIcon2 />}
						action={
							<Button onClick={this.handleDeleteClick}>
								{settings.deleteAccount.button}
							</Button>}
					/> */}
					<SettingsPanel
						title={settings.language.title}
						description={settings.language.description}
						icon={<GlobeIcon />}
						action={
							<select onChange={this.handleLanguageChange} value={contextSettings.currentLanguage}>
								{this.mapLanguageOptions(contextSettings, settings)}
							</select>
						}
					/>
				</div>
				{/* <DialogWithButtonGroup
					actionButtonLabel={common.delete}
					cancelButtonLabel={common.cancel}
					onActionButtonClick={this.props.onDeleteUserClick}
					onCancelButtonClick={this.handleCancelButtonClick}
					ref={this.dialogRef}
				>
					{settings.deleteAccount.dialog}
				</DialogWithButtonGroup> */}
			</div>
		);
	}

}

/* TODO: Remove or leave when we will know more about this functionality */
const mapDispatchToProps = (dispatch) => ({
	onDeleteUserClick: () => dispatch(userInfo.deleteUser()),
});

export default withLanguageContext(connect(null, mapDispatchToProps)(Settings));
