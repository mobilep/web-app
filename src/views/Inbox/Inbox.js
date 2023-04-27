import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withLanguageContext } from '../../utils/LanguageContext';
import {
	ChatForm,
	Button,
	EmptyInboxArea,
	SecondaryNavigation,
	ClosablePanel,
} from '../../components';
import { Conversation, InboxList } from '../../containers';

import './styles.css';
import { chatSubType, inboxPanelViewMode } from '../../constants/common';
import { inboxInfo } from '../../redux/reducers';

class Inbox extends Component {
	static propTypes = {
		content: PropTypes.object,
		history: PropTypes.object,
		inboxList: PropTypes.array,
		location: PropTypes.object,
		match: PropTypes.object,
		nextUrl: PropTypes.string,
		reFetchInboxes: PropTypes.func,
	}

	chatUserPickerRef = React.createRef();

	state = {
		panelViewMode: null,
		groupChatFormValid: false,
	}

	componentDidMount () {
		if (this.props.inboxList.length) {
			this.props.reFetchInboxes();
		}
	}

	componentDidUpdate (prevProps) {
		const { match, history, nextUrl } = this.props;

		if (nextUrl && nextUrl !== prevProps.nextUrl) {
			history.push(nextUrl);
		}
		if (match && match.url !== prevProps.match.url) {
			this.onRouteChanged();
		}
	}

	onRouteChanged () {
		this.handlePanelClose();
	}

	getSecondaryNavigationButton () {
		return (
			<Button
				onClick={this.handleNewChatPanelOpen}
				className='Button-text Inbox-buttons'
			>
				{this.props.content.common.new}
			</Button>
		);
	}

	getClosablePanelActionButtons (panelViewMode) {
		const { common } = this.props.content;
		const actionText = panelViewMode === inboxPanelViewMode.NEW ? common.create : common.save;
		const isDisabled = !this.state.groupChatFormValid;

		return {
			closablePanelActionButton: (<Button
				onClick={this.handleSaveInboxUsers}
				disabled={isDisabled}
				className='Button-text p-h-0'
			>{actionText}</Button>),
			closablePanelMobileButtons: [
				{ label: actionText, onClick: this.handleSaveInboxUsers, disabled: isDisabled	},
			],
		};
	}

	getSecondaryNavigationClassName (params, matches) {
		return classNames({
			'Inbox-secondaryNavigation': true,
			'Inbox-secondaryNavigation-hidden': matches && params.inboxId,
		});
	}

	getConversationClassName = ({ pathname }, matches) => {
		return classNames({
			'Inbox-conversation-hidden': matches && pathname === '/inbox/chat',
		});
	}

	getChatFormTitle (panelViewMode) {
		const { content: { inbox } } = this.props;
		return panelViewMode === inboxPanelViewMode.NEW ? inbox.newChat : inbox.editChat;
	}

	handleNewChatPanelOpen = () => {
		this.setState({ panelViewMode: inboxPanelViewMode.NEW });
	}

	handlePanelClose = () => {
		this.setState({ panelViewMode: null });
	}

	handleSaveInboxUsers = () => {
		const chatUserPickerComponent = this.chatUserPickerRef.current.getWrappedInstance();
		chatUserPickerComponent.handleSaveInboxUsers();
	}

	handleManageParticipantsPanelOpen = () => {
		this.setState({ panelViewMode: inboxPanelViewMode.EDIT_ACTIVE_CHAT });
	}

	handleGroupChatValidationChange = (groupChatFormValid) => {
		this.setState({ groupChatFormValid });
	}

	render () {
		const {
			match: { params },
			content: { inbox },
			location,
		} = this.props;
		const { panelViewMode } = this.state;
		const { matches } = window.matchMedia('(max-width: 768px)');
		const chatType = params.view === 'group-chat' ? chatSubType.GROUP_CHAT : chatSubType.CHAT;
		const {
			closablePanelActionButton,
			closablePanelMobileButtons,
		} = this.getClosablePanelActionButtons(panelViewMode);

		return (
			<div className='Inbox'>
				<SecondaryNavigation
					className={this.getSecondaryNavigationClassName(params, matches)}
					headerText={inbox.inboxMessages}
					actionButton={this.getSecondaryNavigationButton()}
					headerClassName='Inbox-header'
				>
					<InboxList activeCard={params.inboxId} />
				</SecondaryNavigation>

				{panelViewMode &&
					<ClosablePanel
						title={this.getChatFormTitle(panelViewMode)}
						onClose={this.handlePanelClose}
						mobileHeaderButtonProps={closablePanelMobileButtons}
						actionButton={closablePanelActionButton}
					>
						<ChatForm
							ref={this.chatUserPickerRef}
							viewMode={panelViewMode}
							onClose={this.handlePanelClose}
							history={this.props.history}
							onValidationChange={this.handleGroupChatValidationChange}
						/>
					</ClosablePanel>
				}

				{!params.inboxId
					? <EmptyInboxArea text={inbox.emptyChatArea} />
					: <Conversation
						chatType={chatType}
						className={this.getConversationClassName(location, matches)}
						onManageParticipantsOpen={this.handleManageParticipantsPanelOpen}
					/>
				}
			</div>
		);
	}
}

const mapStateToProps = ({ inboxInfo }) => {
	return {
		nextUrl: inboxInfo.nextUrl,
		inboxList: inboxInfo.inboxList,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		reFetchInboxes: () => dispatch(inboxInfo.getInboxList({ refetch: true })),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withLanguageContext(Inbox));
