import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Main = styled.section`
  display: flex;
  margin-top: 10px;
`
const StyledButton = ({disable}) => `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 40px;
  background-color: #E9E9E9;
  box-shadow: 8px 8px 15px 2px rgba(13, 39, 80, .3),
            -3px -3px 10px 2px rgba(255, 255, 255, 1);
  color: gray;
  font-size: 12px;
  cursor: ${disable ? 'not-allowed' : 'pointer'};
  span {
    height: 15px;
  }
`

const StartButton = styled.div`
  ${StyledButton}
  border-radius: 60px;
  margin-right: 15px;
`

const ResetButton = styled.div`
  ${StyledButton}
  border-radius: 60px;
  margin-left: 15px;
`

const StartReset = ({ paused, startStop, resetTimer }) => {
    const reset = () => {
      resetTimer();
      const audio = document.getElementById('beep');
      audio.pause();
      audio.currentTime = 0;
    };

    const playPause = paused ? (
        <span>Start</span>
    ) : (
        <span>Stop</span>
    );

    return(
        <Main id='timer-controls'>
            <StartButton id="start_stop" onClick={startStop} >
                <span>{playPause}</span>
            </StartButton>

            <ResetButton id="reset" onClick={reset}>
                <span>Reset</span>
            </ResetButton>
        </Main>
    )
}


StartReset.propTypes = {
    paused: PropTypes.bool,
    startStop: PropTypes.func,
    resetTimer: PropTypes.func,
};
export default StartReset;
