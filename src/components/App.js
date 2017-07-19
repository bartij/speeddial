import React, {Component} from 'react';
import {connect} from 'react-redux';
import Tile from './Tile';
import './App.css';

class App extends Component {
    renderTiles() {
        return this.props.tilesData.map((tileData, index) =>
            <Tile key={index} id={index} image={tileData.image} text={tileData.text} link={tileData.link}/>
        );
    }

    render() {
        return (
            <div className="App">
                {this.renderTiles()}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({tilesData: state.tilesData});

export default connect(mapStateToProps)(App);
