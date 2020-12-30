import {
    INC_TIMER, DEC_TIMER,
    INC_BREAK, DEC_BREAK,
    START_STOP, RESET_TIMER,
    COUNTDOWN
} from './actions';

import {playSoundElement, resetSoundElement} from '../utils/soundElement';

const INITIAL_STATE = {
    timerLabel: 'Work Time',
    timerLength: 25,
    breakTime: 5,
    current: 25*60,
    paused: true,
    isRunning: false,
    isSession: true,
}
// const MAX_SESSIONS = 8;
const BEEP = 'beep' ;

const timerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        // --------------------
        //      TIMER
        //----------------------
        case INC_TIMER:
            if (!state.isRunning && state.timerLength < 60) {
                return {
                    ...state,
                    timerLength: state.timerLength + 1,
                    current: (state.timerLength + 1) * 60
                }
            }
            return state;
        case DEC_TIMER:
            if (!state.isRunning && state.timerLength > 1) {
                return {
                    ...state,
                    timerLength: state.timerLength - 1,
                    current: (state.timerLength - 1) * 60
                }
            }
            return state;

        // --------------------
        //      BREAK
        //----------------------
        case INC_BREAK:
            if (!state.isRunning && state.breakTime < 60) {
                return {
                    ...state,
                    breakTime: state.breakTime + 1
                }
            }
            return state;

        //Decrement_Break
        case DEC_BREAK:
            if (!state.isRunning && state.breakTime > 1) {
                return {
                    ...state,
                    breakTime: state.breakTime - 1
                }
            }
            return state;

        case START_STOP:
            return {
                ...state,
                paused: !state.paused,
                isRunning: !state.isRunning
            };

        case RESET_TIMER:
            console.log('reset')
            resetSoundElement(BEEP);
            return INITIAL_STATE;

        case COUNTDOWN :
            if (state.isRunning) {
                if (state.current < 1 && state.isSession) {
                    playSoundElement(BEEP);
                    return {
                        ...state,
                        timerLabel: 'Break Time',
                        current: state.breakTime * 60,
                        isSession: false,
                    }
                }
                if (state.current < 1 && !state.isSession) {
                    playSoundElement(BEEP);
                    return {
                        ...state,
                        timerLabel: 'Work Time',
                        current: state.timerLength * 60,
                        isSession: true,
                    }
                }
                return {
                    ...state,
                    current: state.current - 1
                }
            } return state;
        default:
            return state;
    }
};

export default timerReducer;
