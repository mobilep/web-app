module.exports = (componentName) => `\
import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ${componentName} = () => {

	return (
		<div />
	);

};

${componentName}.propTypes = {};

${componentName}.defaultProps = {};

export default ${componentName};
`;
