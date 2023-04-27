import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { MessageBubble, VideoTile, InputError, Button, ViewDetailsLink } from '../..';
import { ImageMessage, AudioMessage, FileMessage } from '../../atoms';
import constants from '../../../constants';
import { EvaluationIcon } from '../../../icons';
import POP_UP_POSITION from '../../molecules/InputError/constants';

import './styles.css';
import { replaceUrlWithLink } from '../../../helpers/messageHelpers';
import { TILE_TYPES } from '../../atoms/VideoTile/constants';

const { routes: { SCENARIOS }, common: { messageTypes, longPressTime } } = constants;
const {
	TOP_LEFT_POP_UP,
	TOP_RIGHT_POP_UP,
	BOTTOM_RIGHT_POP_UP,
	BOTTOM_LEFT_POP_UP,
} = POP_UP_POSITION;

class Message extends Component {

	static propTypes = {
		className: PropTypes.string,
		evaluateText: PropTypes.string,
		incoming: PropTypes.bool,
		message: PropTypes.object,
		onContextMenu: PropTypes.func,
		onEvaluateClick: PropTypes.func,
		onVideoMessageCancelUpload: PropTypes.func,
		onVideoMessagePlay: PropTypes.func,
		onViewDetailsClick: PropTypes.func,
		scenarioId: PropTypes.string,
		scenarioOwner: PropTypes.bool,
		singleOrLast: PropTypes.bool,
		viewDetailsText: PropTypes.string,
		viewScenarioDetailsText: PropTypes.string,
	}

	static defaultProps = {
		onContextMenu: () => {},
		onVideoMessageCancelUpload: () => {},
		onVideoMessagePlay: () => {},
		viewDetailsText: 'View details',
	}

	state = {
		errorTooltipPosition: TOP_RIGHT_POP_UP,
	}

	canOpenContextMenu ({ content, type }) {
		return !(type === messageTypes.VIDEO && (content.videoTileType === TILE_TYPES.UPLOADING || !content.thumb));
	}

	getClassName () {
		const { className, incoming } = this.props;

		return classNames({ incoming }, 'Message', className);
	}

	handleErrorIconMouseEnter = (errorRef) => {
		this.setErrorTooltipPosition(errorRef);
	}

	handleTouchStart = () => {
		this.touchStartTime = Date.now();
	}

	handleTouchEnd = (e, message) => {
		const diff = Date.now() - this.touchStartTime;

		if (diff > longPressTime) {
			document.activeElement.blur();
			this.props.onContextMenu(e, message);
		} else return null;
	}

	handleViewClick = () => {
		this.props.onViewDetailsClick(this.props.incoming);
	}

	parseContent (content) {
		if (!content || typeof content !== 'string') return null;

		return content.split('\n').map((item, index) => (
			// eslint-disable-next-line react/no-array-index-key
			<Fragment key={index}>
				{replaceUrlWithLink(item)}
				<br />
			</Fragment>)
		);
	}

	setErrorTooltipPosition (errorRef) {
		if (!errorRef.current) return;

		const { top, right } = errorRef.current.getBoundingClientRect();
		const fitOnTop = top > 80;
		const fitAtRight = (window.innerWidth - right) > 250;

		let errorTooltipPosition;
		if (fitOnTop) {
			errorTooltipPosition = fitAtRight ? TOP_LEFT_POP_UP : TOP_RIGHT_POP_UP;
		} else {
			errorTooltipPosition = fitAtRight ? BOTTOM_LEFT_POP_UP : BOTTOM_RIGHT_POP_UP;
		}

		this.setState(() => ({ errorTooltipPosition }));
	}

	renderMessageContent () {
		const {
			TEXT,
			VIDEO,
			EVALUATE,
			EVALUATION,
			WELCOME,
			SYSTEM,
			IMAGE,
			AUDIO,
			FILE,
			SYSTEM_TEXT_WITH_LINK,
		} = messageTypes;
		const {
			incoming,
			message,
			singleOrLast,
			viewDetailsText,
			viewScenarioDetailsText,
			evaluateText,
			onEvaluateClick,
			scenarioId,
			scenarioOwner,
		} = this.props;
		const { content, type } = message;

		const messageBubbleProps = {
			className: 'Message-content',
			timeString: message.timeString,
			incoming,
			timeStamp: +message.time,
			showSendAgo: message.showSendAgo,
			singleOrLast,
		};

		switch (type) {
			case WELCOME:
			case SYSTEM_TEXT_WITH_LINK:
				return (
					<MessageBubble {...messageBubbleProps}>
						{content}
						<ViewDetailsLink className='Message-ViewScenarioLink' to={`${SCENARIOS}/${scenarioId}`}>
							{viewScenarioDetailsText}
						</ViewDetailsLink>
					</MessageBubble>
				);
			case TEXT:
			case SYSTEM:
				return (
					<MessageBubble {...messageBubbleProps}>
						{this.parseContent(content)}
					</MessageBubble>
				);
			case EVALUATE:
				return (
					<MessageBubble {...messageBubbleProps}>
						{this.parseContent(content)}
						{!scenarioOwner && <Button className='Message-evaluation-details' onClick={onEvaluateClick}>
							{evaluateText} &#62;
						</Button>}
					</MessageBubble>
				);
			case EVALUATION:
				return (
					<MessageBubble {...messageBubbleProps}>
						{this.parseContent(content.text)}
						<div className='Message-evaluationMessage'>
							<EvaluationIcon className='Message-evaluationIcon' />
							<Button className='Message-evaluation-details' onClick={this.handleViewClick}>
								{content.avgMark} &#183; {viewDetailsText}
							</Button>
						</div>
					</MessageBubble>
				);
			case VIDEO:
				return (
					<Fragment>
						<MessageBubble { ...messageBubbleProps } partial={true}>
							{this.parseContent(content.text)}
						</MessageBubble>
						<VideoTile
							className='Message-content Message-partial-content'
							thumbnailUrl={content.thumb}
							videoUrl={content.dashList}
							fallBackVideoUrl={content.playList}
							type={content.videoTileType}
						/>
					</Fragment>
				);
			case IMAGE:
				return (
					<Fragment>
						<MessageBubble {...messageBubbleProps} partial={true}>
							{this.parseContent(content.text)}
						</MessageBubble>
						<ImageMessage
							className='Message-content Message-partial-content'
							imgSrc={content.link}
							loadingState={message.loadingState}
						/>
					</Fragment>
				);
			case AUDIO:
				return (
					<Fragment>
						<MessageBubble {...messageBubbleProps} partial={true}>
							{this.parseContent(content.text)}
						</MessageBubble>
						<MessageBubble
							{...messageBubbleProps}
							partialEnd={true}
							className='Message-content Message-partial-content'
						>
							<AudioMessage	audioSrc={content.link} loadingState={message.loadingState} />
						</MessageBubble>
					</Fragment>
				);
			case FILE:
				return (
					<Fragment>
						<MessageBubble {...messageBubbleProps} partial={true}>
							{this.parseContent(content.text)}
						</MessageBubble>
						<MessageBubble
							{...messageBubbleProps}
							partialEnd={true}
							className='Message-content Message-partial-content'
						>
							<FileMessage fileName={content.originalName} fileLink={content.link} />
						</MessageBubble>
					</Fragment>
				);
			default:
				return null;
		}
	}

	render () {
		const { message, onContextMenu } = this.props;
		const { error } = message;

		return (
			<div
				className={this.getClassName()}
			>
				{error &&
					<InputError
						className='Message-error'
						messageText={error}
						popUpPosition={this.state.errorTooltipPosition}
						onShowPopup={this.handleErrorIconMouseEnter}
					/>
				}
				<div
					onContextMenu={(e) =>
						this.canOpenContextMenu(message) && onContextMenu(e, message)}
					// Events for iOS devices support
					onTouchStart={this.handleTouchStart}
					onTouchEnd={(e) => this.handleTouchEnd(e, message)}
				>
					{this.renderMessageContent()}
				</div>
			</div>
		);
	}
}

export default Message;
