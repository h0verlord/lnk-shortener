import React from "react";
import PropTypes from 'prop-types'

export default class LinksListItem extends React.Component{
    render(){
        return(
            <div>
                <h3>{this.props.url}</h3>
                <h4>{this.props.shortUrl}</h4>
            </div>
        )
    }
}

LinksListItem.propTypes = {
    _id: PropTypes.string,
    shortUrl: PropTypes.string,
    url: PropTypes.string,
    userId: PropTypes.string,
}