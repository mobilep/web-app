module.exports = (componentName) => `\
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class ${componentName} extends Component {

	static propTypes = {}

	static defaultProps = {}

	render () {
		return null;
	}

}
`;
