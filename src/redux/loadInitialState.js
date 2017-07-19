export const loadInitialState = () => {
    try {
        const initialState = localStorage.getItem('tilesData');
        if (initialState === null) {
            return undefined;
        }
        return JSON.parse(initialState)
    } catch (error) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const stateToSave = JSON.stringify(state);
        localStorage.setItem('tilesData', stateToSave);
    } catch (error) {
        console.log('Saving state to local storage error:', error);
    }
};