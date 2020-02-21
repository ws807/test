/*******************************************************************************
    Copyright (c) 2020, S-Core.
    All rights reserved.

    Use is subject to license terms.

    This distribution may include materials developed by third parties.
  ******************************************************************************/

// Test case for 'isRequired' prop

import React from 'react';
import PropTypes from 'prop-types';

export default class Person extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        address: PropTypes.shape({
            country: PropTypes.string.isRequired,
            city: PropTypes.string
        }),
        contact: PropTypes.shape({
            phone: PropTypes.string,
            email: PropTypes.string
        }).isRequired
    }
}

Person.defaultProps = {
    name: "Anonymous"
};
