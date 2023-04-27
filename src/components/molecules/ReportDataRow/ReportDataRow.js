import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { NavLink } from 'react-router-dom';
import { ArrowForwardIcon } from '../../../icons';

const withRowWrapper = (child, size) => (
	<section className='ReportDataRow' data-size={size}>{child}</section>
);

export default function ReportDataRow (
	{ link, title, description, children, size, mobileDataDirection, compareValues }
) {

	const getAccent = (val, compareWith) => {
		if (!val || !compareWith) return;

		if (compareValues === 'moreBetter') {
			if (val > compareWith) return 'success';
			if (val < compareWith) return 'danger';
		}

		if (val < compareWith) return 'success';
		if (val > compareWith) return 'danger';
	};

	const renderChildren = () => {
		if (!compareValues) return children;

		const [el1, el2] = React.Children.toArray(children);

		return [
			React.cloneElement(el1, { accent: getAccent(el1.props.value, el2.props.value) }),
			React.cloneElement(el2, { accent: getAccent(el2.props.value, el1.props.value) }),
		];
	};

	const content = (
		<Fragment>
			{link &&	<div className='ReportDataRow-linkIndicator'><ArrowForwardIcon /></div>}
			<div className='ReportDataRow-wrapper'>
				<div className='ReportDataRow-title'>{title}</div>
				{description && <div className='ReportDataRow-description'>{description}</div>}
			</div>

			<div className='ReportDataRow-values' data-mobile-dir={mobileDataDirection} >
				{renderChildren()}
			</div>
		</Fragment>
	);

	if (link) {
		return (
			withRowWrapper(<NavLink className='ReportDataRow-linkWrapper' to={link}>{content}</NavLink>, size)
		);
	}

	return withRowWrapper(content, size);
}

ReportDataRow.propTypes = {
	children: PropTypes.any,
	compareValues: PropTypes.oneOf(['moreBetter', 'lessBetter']),
	description: PropTypes.string,
	link: PropTypes.string,
	mobileDataDirection: PropTypes.oneOf(['row', 'column']),
	size: PropTypes.oneOf(['sm', 'md']),
	title: PropTypes.string,
};
