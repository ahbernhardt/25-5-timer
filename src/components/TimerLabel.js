import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


export const Label = styled.div`
  font-size: 16px;
  text-align: center;
  text-transform: capitalize;
  color: gray;
`

export const TimeLeft = styled.div`
    font-size: 42px;
    color: gray;
`
export const Check = styled.div`
    font-size: 24px;
    color: gray;
`

const TimerLabel = ({ timerLabel, current }) => {
    return (
        <section id='timer'>
            <TimeLeft id='time-left'>{current}</TimeLeft>
            <Label id='timer-label'>{timerLabel}</Label>
        </section>
    );
};

TimerLabel.propTypes = {
    current: PropTypes.string,
    timerLabel: PropTypes.string,
};

export default TimerLabel;


