import React, {Component} from 'react';
import {connect} from 'react-redux';
import Tile from './Tile';
import './App.css';

class App extends Component {
    renderTiles() {
        console.log('app storage', localStorage.tilesData);
        console.log('this.props.tilesData', this.props.tilesData);
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
