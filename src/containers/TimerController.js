import { Component } from 'react';
import { countdownSeconds } from '../redux/actions';
import { connect } from 'react-redux';

class TimerController extends Component {

    constructor(props) {
        super(props);
        this.state = {
            interval: null,
        };

        this.startTimer = this.startTimer.bind(this);
    }

    componentDidMount() {
        if (!this.props.paused) {
            this.startTimer();
        }
    }

    componentDidUpdate(prevProps, prevState, s) {
        if (this.props.paused) {
            clearInterval(this.state.interval);
        }
        if (!this.props.paused && prevProps.paused) {
            this.startTimer();
        }
    }

    startTimer() {
        const interval = setInterval(this.props.countdownSeconds, 1000);
        this.setState({
            interval,
        });
    }

    render() {
        return null;
    }
}


const mapStateToProps = (state) => ({
    paused: state.paused,
    current: state.current,
});

const mapDispatchToProps = (dispatch) => ({
    countdownSeconds : () => dispatch(countdownSeconds ())
});

TimerController = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TimerController);

export default TimerController;
