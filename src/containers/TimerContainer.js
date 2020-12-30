import { connect } from 'react-redux';
import { startStop, resetTimer } from '../redux/actions.js';
import CircleWrapper from '../components/CircleWrapper';
import timeFormat from '../components/TimeFormat';

const mapStateToProps = (state) => ({
    paused: state.paused,
    timerLabel: state.timerLabel,
    current: timeFormat(state.current),
});

const mapDispatchToProps = (dispatch) => ({
    startStop: () => dispatch(startStop()),
    resetTimer: () => dispatch(resetTimer()),
});

const TimerContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CircleWrapper);

export default TimerContainer;
