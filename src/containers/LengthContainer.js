import { connect } from 'react-redux';
import LengthControls from '../components/LengthControls';
import {
    incrementTimer, decrementTimer,
    incrementBreak, decrementBreak,
} from '../redux/actions';

const mapStateToProps = (state, ownProps) => {
    if (ownProps.title === 'Timer') {
        return {
            value: state.timerLength,
            id: 'timer',
        };
    }

    if (ownProps.title === 'Break') {
        return {
            value: state.breakTime,
            id: 'break',
        };
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    if (ownProps.title === 'Timer') {
        return {
            increment: () => dispatch(incrementTimer()),
            decrement: () => dispatch(decrementTimer()),
        };
    }

    if (ownProps.title === 'Break') {
        return {
            increment: () => dispatch(incrementBreak()),
            decrement: () => dispatch(decrementBreak()),
        };
    }

};

const LengthContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LengthControls);

export default LengthContainer;
