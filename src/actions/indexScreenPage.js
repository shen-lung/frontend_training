import {push, replace} from 'react-router-redux';

export const goToSearch = () => (
    (dispatch) => {
        dispatch(push('/search'))
    }
);

export const goToStepperRedux = () => (
    (dispatch) => {
        dispatch(push('/stepper-redux'))
    }
);

export const goToStepperReact = () => (
    (dispatch) => {
        dispatch(push('/stepper-react'))
    }
);

export const goToHome = () => (
    (dispatch) => {
        dispatch(replace('/'))
    }
);
