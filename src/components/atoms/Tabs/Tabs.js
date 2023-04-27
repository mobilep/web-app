import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable';
import classNames from 'classnames';

import './styles.css';

export default class Tabs extends Component {
	state = {
		currentIndex: this.props.currentTabIndex || 0,
		isTransitioning: false,
	};

	getTabButtonClassName (index, currentIndex) {
		return classNames({
			'Tabs-button': true,
			'Tabs-button-active': index === currentIndex,
		});
	}

	getTabButtons ({ tabNames, currentIndex }) {
		return tabNames.map((tabName, index) => (
			<button
				key={tabName}
				className={this.getTabButtonClassName(index, currentIndex)}
				onClick={this.handleTabButtonClick}
			>
				{tabName}
			</button>
		));
	}

	getTabs ({ tabs, isTransitioning, currentIndex }) {
		return tabs.map((tab, index) => {
			const isActive = index === currentIndex;
			const key = `tb-${index}`;
			const isVisible = isActive || isTransitioning;
			const className = isVisible
				? 'Tabs-item'
				: 'Tabs-item hidden';
			return (
				<div key={key} className={className}>
					{tab}
				</div>
			);
		});
	}

	handleTabButtonClick = ({ currentTarget }) => {
		const tabs = currentTarget.parentElement.children;
		const selectedIndex = [...tabs].findIndex((element) => element === currentTarget);
		this.setCurrentIndex(selectedIndex);
	}

	getActiveBarStyles ({ tabsCount = 1, currentIndex }) {
		return {
			transform: `translateX(${100 * currentIndex}%)`,
			width: `${100 / tabsCount}%`,
		};
	}

	getTabsListStyles ({ currentIndex, tabsCount }) {
		return {
			width: `${100 * tabsCount}%`,
			transform: `translateX(-${(100 / tabsCount) * currentIndex}%)`,
		};
	}

	handleSwipedLeft = () => {
		this.setCurrentIndex(this.state.currentIndex + 1);
	}

	handleSwipedRight = () => {
		this.setCurrentIndex(this.state.currentIndex - 1);
	}

	setCurrentIndex (newIndex) {
		const { tabs } = this.props;

		if (newIndex >= 0 && newIndex < tabs.length) {
			this.setState(({ currentIndex }) => ({
				currentIndex: newIndex,
				isTransitioning: currentIndex !== newIndex,
			}));
		}
	}

	handleTransitionEnd = ({ currentTarget, target }) => {
		if (target !== currentTarget) return;
		this.setState({ isTransitioning: false });
	}

	render () {
		const { tabNames, tabs } = this.props;
		const { currentIndex, isTransitioning } = this.state;
		const tabsCount = tabNames.length;

		return (
			<Swipeable
				onSwipedLeft={this.handleSwipedLeft}
				onSwipedRight={this.handleSwipedRight}
				className='Tabs'
				ref={this.tabRef}
			>
				<div className='Tabs-header'>
					<div className='Tabs-buttonsWrapper'>
						{ this.getTabButtons({ tabNames, currentIndex }) }
					</div>
					<div className='Tabs-activeBarWrapper'>
						<div
							className='Tabs-activeBar'
							style={this.getActiveBarStyles({ tabsCount, currentIndex })}
						>
							<div className='Tabs-activeBarInner' />
						</div>
					</div>
				</div>
				<div className='Tabs-body'>
					<div
						className='Tabs-list'
						style={this.getTabsListStyles({ currentIndex, tabsCount })}
						onTransitionEnd={this.handleTransitionEnd}
					>
						{this.getTabs({ tabs, isTransitioning, currentIndex })}
					</div>
				</div>
			</Swipeable>
		);
	}
}

Tabs.propTypes = {
	currentTabIndex: PropTypes.number,
	tabNames: PropTypes.arrayOf(PropTypes.string).isRequired,
	tabs: PropTypes.array.isRequired,
};
