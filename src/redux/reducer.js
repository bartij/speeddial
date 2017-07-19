import {actions as actionTypes} from './actions';

const initialState = {
    tilesData: [
        {image: '1.jpg', text: 'Tile1', link: 'http://google.pl'},
        {image: '2.jpeg', text: 'Tile2', link: 'http://google.pl'},
        {image: '3.jpeg', text: 'Tile3', link: 'http://google.pl'},
        {image: '4.jpeg', text: 'Tile4', link: 'http://google.pl'},
        {image: '5.jpeg', text: 'Tile5', link: 'http://google.pl'},
        {image: '6.jpeg', text: 'Tile6', link: 'http://google.pl'},
        {image: '7.jpeg', text: 'Tile7', link: 'http://google.pl'},
        {image: '8.jpeg', text: 'Tile8', link: 'http://google.pl'}
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REMOVE_TILE:
            const tilesWithoutDeleted = state.tilesData.filter((tile, index) => !(index === action.id));
            return Object.assign({}, state, {tilesData: tilesWithoutDeleted});
        default:
            return state;
    }
};

export default reducer;