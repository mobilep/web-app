import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker, { registerLocale } from 'react-datepicker';
import fr from 'date-fns/locale/fr';
import classNames from 'classnames';

import './styles.css';

import TIME from '../../../constants/time';
import { DueDate } from '../../atoms';
import { endOfDay } from 'date-fns';

registerLocale('fr', fr);

export default class ScenarioDueDatePicker extends Component {
	state = {
		minDate: +new Date() + TIME.MS_IN_DAY,
	};

	static propTypes = {
		editable: PropTypes.bool,
		locale: PropTypes.object,
		onDateChange: PropTypes.func,
		selectedDate: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.instanceOf(Date)]),
	}

	getClassName () {
		return classNames('ScenarioDueDatePicker', {
			'ScenarioDueDatePicker-editable': this.props.editable,
		});
	}

	handleDateChange = (date) => {
		this.props.onDateChange(+endOfDay(new Date(date)));
	}

	render () {
		const { minDate } = this.state;
		const { selectedDate, editable, locale } = this.props;

		return (
			<div className={this.getClassName()}>
				<DatePicker
					selected={selectedDate}
					minDate={minDate}
					disabled={!editable}
					onChange={this.handleDateChange}
					locale={locale}
					customInput={<DueDate locale={locale} />}
				/>
			</div>
		);
	}

}
