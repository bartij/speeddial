import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Tile.css';
import PropTypes from 'prop-types';
import {removeTile} from '../redux/actions';

class Tile extends Component {
    render() {
        return (
            <div className="responsive">
                <div className="tile">
                    <a href={this.props.link}>
                        <img className="tile-img" src={this.props.image} alt={this.props.text} />
                    </a>
                    <img className="remove-tile" src="can.png"onClick={() => this.props.handleRemove(this.props.id)} alt="remove" />
                    <div className="text">
                        <a href={this.props.link}>{this.props.text}</a>
                    </div>
                </div>
            </div>
        );
    }
}

Tile.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    handleRemove: PropTypes.func
};

const mapDispatchToProps = dispatch => {
    return {
        handleRemove: id => {
            dispatch(removeTile(id));
        }
    }
};

export default connect(null, mapDispatchToProps)(Tile);