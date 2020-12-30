import PropTypes from "prop-types";
import React from "react";
import TimerLabel from "./TimerLabel";
import styled from "styled-components";
import StartReset from "./StartReset";

export const OutsideCircle = styled.div`
    width: 350px;
    height: 350px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color: #E5E5E5;
    box-shadow: 28px 28px 50px 15px rgba(13, 39, 80, .2),
            -23px -23px 45px 15px rgba(245, 245, 245, 1),
            inset -31px -31px 43px rgba(245, 245, 245, .64),
            inset 26px 26px 48px 15px  rgba(13, 39, 80, .2);
    `

export const TimerContainer = styled.section`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    display: flex; 
    flex-direction: column; 
    align-items: center;
    justify-content: center;
    background-color: #E9E9E9;
        box-shadow: 28px 28px 50px 15px rgba(13, 39, 80, .2),
            -23px -23px 45px rgba(250, 250, 250, 1)
`

const CircleWrapper = ({
  paused,
  timerLabel,
  current,
  startStop,
  resetTimer,
}) => {
    return (
        <OutsideCircle>
            <TimerContainer id="timer-wrapper">
                <TimerLabel
                    current={current}
                    timerLabel={timerLabel}
                />
                <StartReset
                    paused={paused}
                    startStop={startStop}
                    resetTimer={resetTimer}
                />
            </TimerContainer>
        </OutsideCircle>
    );
};

CircleWrapper.propTypes = {
    paused: PropTypes.bool,
    timerLabel: PropTypes.string,
    current: PropTypes.string,
    startStop: PropTypes.func,
    resetTimer: PropTypes.func,
};

export default CircleWrapper;
