import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Tile.css';
import PropTypes from 'prop-types';
import {removeTile} from '../redux/actions';

class Tile extends Component {
    render() {
        return (
            <div className="responsive">
                <a href={this.props.link}>
                    <div className="tile">
                        <img className="tile-img" src={this.props.image} alt={this.props.text}/>
                        <div className="text">
                            {this.props.text}
                            <span className="remove-tile"
                                  onClick={() => this.props.handleRemove(this.props.id)}>x
                            </span>
                        </div>
                    </div>
                </a>
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