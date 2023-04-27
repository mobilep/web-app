import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { AppendableList, SearchSelect } from '../..';

const CREATE_CRITERIA_ID = Symbol();
const NOT_FOUND_CRITERIA_ID = Symbol();

const compareTwoStrings = (firstString = '', secondString = '') =>
	firstString.toLowerCase() === secondString.toLowerCase();

export default class AppendableCriteriaList extends Component {
	static propTypes = {
		availableCriteriaItems: PropTypes.array,
		content: PropTypes.object,
		criteriaItems: PropTypes.array,
		editable: PropTypes.bool,
		onCriteriaAdd: PropTypes.func,
		onCriteriaCreate: PropTypes.func,
		onCriteriaRemove: PropTypes.func,
		onCriteriaSearch: PropTypes.func,
		onCriteriaSelect: PropTypes.func,
		placeholder: PropTypes.string,
		searchCriteriaItems: PropTypes.array,
	}

	state = {
		searchQuery: '',
	}

	handleCriteriaRemove = (criteriaId) =>
		() => this.props.onCriteriaRemove(criteriaId)

	handleCriteriaSearch = (query) =>
		this.setState({ searchQuery: query });

	handleCriteriaAdd = (newName) => {
		const criteriaInList = this.getSelectCriteriaItemsList()
			.find(({ name }) => compareTwoStrings(name, newName));
		if (criteriaInList) {
			if (criteriaInList._id === NOT_FOUND_CRITERIA_ID) return;
			if (criteriaInList._id === CREATE_CRITERIA_ID) return this.handleCriteriaCreate(newName);
			return this.handleCriteriaSelect(criteriaInList);
		}
		this.setState({ searchQuery: '' });
	}

	handleCriteriaSelect = (criteria, { onCriteriaSelect } = this.props) => {
		this.setState({ searchQuery: '' });
		onCriteriaSelect(criteria);
	}

	handleCriteriaCreate = (name, { onCriteriaCreate } = this.props) => {
		this.setState({ searchQuery: '' });
		onCriteriaCreate(name);
	}

	checkIfSearchCriteriaInList ({ searchQuery } = this.state, { availableCriteriaItems } = this.props) {
		return availableCriteriaItems.find(({ name }) => compareTwoStrings(name, searchQuery));
	}
	checkIfSearchCriteriaExist ({ searchQuery } = this.state, { availableCriteriaItems } = this.props) {
		return availableCriteriaItems.find(({ name }) => compareTwoStrings(name, searchQuery));
	}

	getCriteriaItemsBySearch ({ availableCriteriaItems, criteriaItems } = this.props) {
		const { searchQuery = '' } = this.state;
		return availableCriteriaItems
			.filter(({ _id, name }) => !criteriaItems
				.some((criteria) => criteria._id === _id) &&
					name.toLowerCase().includes(searchQuery.toLowerCase()));
	}

	getCustomCiteriaItem (
		searhCriteriaExist,
		availableCriteriaItems,
		{ searchQuery } = this.state,
		{ criteriaItems, content } = this.props
	) {
		if (!searchQuery) return;
		const isSearhCriteriaAdded = criteriaItems.find(({ name }) => compareTwoStrings(name, searchQuery));
		if (isSearhCriteriaAdded) {
			if (!availableCriteriaItems.length) {
				return {
					_id: NOT_FOUND_CRITERIA_ID,
					name: content.notFound,
					isCustom: true,
				};
			}
		} else if (!searhCriteriaExist) {
			return {
				_id: CREATE_CRITERIA_ID,
				name: searchQuery,
				description: content.addCriteria,
				isCustom: true,
			};
		}
	}

	getSelectCriteriaItemsList () {
		const availableCriteriaItems = this.getCriteriaItemsBySearch();
		const isCriteriaExist = this.checkIfSearchCriteriaExist();
		const customCriteriaItem = this.getCustomCiteriaItem(isCriteriaExist, availableCriteriaItems);
		if (customCriteriaItem) {
			return [...availableCriteriaItems, customCriteriaItem];
		}
		return availableCriteriaItems;
	}

	render () {
		const {
			content,
			criteriaItems = [],
			editable,
			onCriteriaRemove,
		} = this.props;
		const items = criteriaItems.map(({ name }) => name);
		const selectCriteriaItemsList = this.getSelectCriteriaItemsList();
		return (
			<Fragment>
				<AppendableList
					withInput={false}
					editable={editable}
					items={items}
					type={'check'}
					onRemoveItem={onCriteriaRemove}
				/>
				{editable && <SearchSelect
					createItemId={CREATE_CRITERIA_ID}
					notFoundItemId={NOT_FOUND_CRITERIA_ID}
					onCreateItem={this.handleCriteriaCreate}
					itemIdKey={'_id'}
					itemValueKey={'name'}
					className='AppendableCriteriaList-SearchSelect'
					items={selectCriteriaItemsList}
					onAdd={this.handleCriteriaAdd}
					onSelect={this.handleCriteriaSelect}
					onSearch={this.handleCriteriaSearch}
					placeholder={content.selectCriteria}
				/>}
			</Fragment>
		);
	}

}
