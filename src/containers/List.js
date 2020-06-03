import React from 'react'
import PropTypes from 'prop-types'

class List extends React.Component{
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render()
    {
        let listH = this.props.items.map((value, key) => (<li key={key}>{value}</li>));
        return <ul onClick={this.onClick.bind(this)}>{listH}</ul>;
    }

    onClick(e)
    {
        alert('Hello');
    }
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default List;