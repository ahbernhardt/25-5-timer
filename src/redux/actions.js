export const INC_TIMER = 'INC_TIMER';
export const DEC_TIMER  = 'DEC_TIMER';

export const INC_BREAK = 'INC_BREAK';
export const DEC_BREAK = 'DEC_BREAK';

export const INC_SESSION = 'INC_SESSION';
export const DEC_SESSION = 'DEC_SESSION';
export const INC_LONG_BREAK = 'INC_LONG_BREAK';
export const DEC_LONG_BREAK = 'DEC_LONG_BREAK';
export const START_STOP = 'START_STOP';
export const RESET_TIMER = 'RESET_TIMER';

// export const BREAK_TIMER = 'BREAK_TIMER';
export const COUNTDOWN = 'COUNTDOWN ';

// --------------------
//      TIMER
//----------------------
export const incrementTimer = (data) => ({
    type: INC_TIMER,
    payload: data
});

export const decrementTimer = (data) => ({
    type: DEC_TIMER,
    payload:data
});
// --------------------
//      BREAK
//----------------------
export const incrementBreak = (data) => ({
        type: INC_BREAK,
        payload: data
    });

export const decrementBreak = (data) => ({
        type: DEC_BREAK,
        payload:data
    });

// --------------------
//      SESSION
//----------------------
export const incrementSession = (data) => ({
        type: INC_SESSION,
        payload:data
    });

export const decrementSession = (data) => ({
        type: DEC_SESSION,
        payload:data
    });
// --------------------
//      LONG_BREAK
//----------------------
export const incrementLongBreak = (data) => ({
    type: INC_LONG_BREAK,
    payload: data
});

export const decrementLongBreak = (data) => ({
    type: DEC_LONG_BREAK,
    payload:data
});
export const startStop = () => ({
        type: START_STOP
    });

export const resetTimer = () => ({
        type: RESET_TIMER
    });


// export const breakTimer = () => ({
//     type: BREAK_TIMER
// });

export const countdownSeconds = () => ({
    type: COUNTDOWN
});

