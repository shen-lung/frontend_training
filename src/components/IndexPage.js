import React, {Component} from 'react';
import PropTypes from 'prop-types';

class IndexPage extends Component {
    static propTypes = {
        children: PropTypes.node
    }

    render() {
        let {children} = this.props;

        return (
            <div>
                {children}
            </div>
        );
    }
}

export default IndexPage;
