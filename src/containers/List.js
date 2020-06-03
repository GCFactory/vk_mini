import React from 'react'
import PropTypes from 'prop-types'

class List extends React.Component{
    constructor(props) {
        super(props);
    }

    render()
    {
        let listH = this.props.list.map((value, key) => (<li key={key}>{value}</li>));
        return <ul>{listH}</ul>;
    }
}

List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default List;