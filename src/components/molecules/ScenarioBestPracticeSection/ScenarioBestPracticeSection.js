import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable';
import { LanguageContext } from '../../../utils';
import { ScenarioSection } from '../../molecules';
import { BestPracticeCard } from '..';

export default class ScenarioBestPracticeSection extends Component {
	static contextType = LanguageContext;

	static propTypes = {
		cards: PropTypes.array,
		className: PropTypes.string,
		createMode: PropTypes.bool,
		editMode: PropTypes.bool,
		onVideoAdd: PropTypes.func,
		onVideoRemove: PropTypes.func,
		thumbnailUrl: PropTypes.string,
	}

	static defaultProps = {
		cards: [],
	}

	state = {
		currentIndex: 1,
		isTransitioning: false,
	};

	handleSwipedLeft = () => {
		this.setCurrentIndex(this.state.currentIndex + 1);
	}

	handleSwipedRight = () => {
		this.setCurrentIndex(this.state.currentIndex - 1);
	}

	setCurrentIndex (newIndex) {
		const { cards } = this.props;

		const maxLength = cards.length;

		if (newIndex > 0 && newIndex <= maxLength) {
			this.setState(({ currentIndex }) => ({
				currentIndex: newIndex,
				isTransitioning: currentIndex !== newIndex,
			}));
		} else if (newIndex === 0) {
			this.setState({ currentIndex: maxLength });
		} else if (newIndex === maxLength + 1) {
			this.setState({ currentIndex: 1 });
		}
	}

	getCurrentCard ({ cards, currentIndex }) {
		const index = currentIndex - 1;
		return cards[index] || {};
	}

	handleVideoAdd = (videoId, name, duration) => {
		this.props.onVideoAdd({
			videoId,
			name,
			duration,
		});
	}

	handleVideoRemove = (videoId) => {
		const { cards = [], onVideoRemove } = this.props;
		const index = cards.findIndex((card) => card.videoId === videoId);
		onVideoRemove(index);
	}

	componentDidUpdate () {
		const { currentIndex } = this.state;
		const { cards } = this.props;
		const cardsLength = cards.length;
		if (currentIndex > cardsLength && cardsLength) {
			// eslint-disable-next-line react/no-did-update-set-state
			this.setState({ currentIndex: cardsLength });
		}
	}

	render () {
		const {
			cards,
			className = '',
			createMode,
			editMode,
		} = this.props;
		const { currentIndex } = this.state;
		const cardsLength = cards.length;
		const currentCard = this.getCurrentCard({ cards, currentIndex });
		const { video = {}, duration: bestPracticeVideoDuration } = currentCard;
		const { scenarios } = this.context;

		return (
			<div className={className}>
				<Swipeable
					onSwipedLeft={this.handleSwipedLeft}
					onSwipedRight={this.handleSwipedRight}
				>
					<ScenarioSection header={scenarios.bestPractice}>
						<BestPracticeCard
							videoDuration={bestPracticeVideoDuration}
							videoId={video.id}
							videoState={video.state}
							thumbnailUrl={video.thumbnailUrl}
							videoUrl={video.url}
							fallBackVideoUrl={video.fallBackUrl}
							onVideoAdd={this.handleVideoAdd}
							onVideoRemove={this.handleVideoRemove}
							createOrEditMode={createMode || editMode}
							header={currentCard.name}
							count={cardsLength}
							index={currentIndex}
							onLeftArrowClick={this.handleSwipedRight}
							onRightArrowClick={this.handleSwipedLeft}
						/>
						{!cardsLength &&
							<div className='Scenarios-sectionExample'>
								{scenarios.bestPracticeExample}
							</div>
						}
					</ScenarioSection>
				</Swipeable>
			</div>
		);
	}
}
