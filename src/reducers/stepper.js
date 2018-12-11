import {
    ADD_NUMBER,
    SUBTRACT_NUMBER,
    RESET_NUMBER,
} from '../actions/stepper';

const calculation = (state = 0, {type}) => {
    let newState = state;

    if (type === ADD_NUMBER) {
        newState = newState + 1;
    }

    if (type === SUBTRACT_NUMBER) {
        newState = newState - 1;
    }

    if (type === RESET_NUMBER) {
        newState = 0;
    }

    return newState;
};

export default calculation;
