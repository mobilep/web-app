import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import './styles.css';
import { LanguageContext, timeUtils } from '../../../utils';
import { CalendarIcon } from '../../../icons';

const { Consumer: LanguageConsumer } = LanguageContext;

export default class DueDate extends Component {

	static propTypes = {
		locale: PropTypes.object,
		onClick: PropTypes.func,
		value: PropTypes.string,
	}

	getDaysFromNowMessage (date, { fromNow, pastDue }) {
		const locale = this.props.locale;
		const { daysLeftText } = timeUtils.getDaysLeft({ date, locale, suffix: fromNow, pastDueText: pastDue });
		return daysLeftText;
	}

	getDateText (date, prefix) {
		return `${prefix} ${format(date, 'MMM do')}`; // Oct 3rd
	}

	render () {
		const { value, onClick } = this.props;
		const transformedValue = new Date(value);

		return (
			<LanguageConsumer>
				{
					({ scenarios }) => {
						const daysLeftMessage = this.getDaysFromNowMessage(transformedValue, scenarios);
						const dateString = this.getDateText(transformedValue, scenarios.due);

						return (
							<div className='DueDate-wrapper' onClick={onClick}>
								<span className='DueDate-icon'>
									<CalendarIcon />
								</span>

								<span>
									{dateString}, {daysLeftMessage}
								</span>
							</div>
						);
					}
				}
			</LanguageConsumer>
		);
	}
}
