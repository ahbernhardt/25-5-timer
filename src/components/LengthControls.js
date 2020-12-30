import styled from "styled-components";
import React from 'react';
import PropTypes from 'prop-types';

const Main = styled.section`
  width: 175px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Label = styled.div`
  margin-top: 5px;
  margin-bottom: 15px;
  font-size: 14px;
  text-align: center;
  text-transform: capitalize;
  color: gray;
`

const StyledButton = ({disable}) => `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  background-color: #E9E9E9;
  box-shadow: 8px 8px 15px 2px rgba(13, 39, 80, .3),
            -3px -3px 10px 2px rgba(255, 255, 255, 1);
  color: white;
  font-size: 36px;
  cursor: ${disable ? 'not-allowed' : 'pointer'};
  span {
    height: 42px;
    margin-top: -2px;
  }
`
const ButtonContainer = styled.div`
    display: flex;
`
const PlusButton = styled.div`
  ${StyledButton}
  border-radius: 21px;
  margin-right: 15px;
  span {
    height: 42px;
    margin-top: -10px;
  }
`

const MinusButton = styled.div`
  ${StyledButton}
  border-radius: 60px;
  margin-left: 15px;
  span {
    height: 55px;
    margin-top: -5px;
  }
`

const Time = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: gray;
`
const LengthControls = ({title, value, id, increment, decrement}) => {
    return (

        <Main>
            <Label id={`${id}-label`}>{`${title}`}</Label>
            <ButtonContainer>
                <PlusButton id={`${id}-increment`} onClick={increment}>
                    <span>+</span>
                </PlusButton>

                <Time id={`${id}-length`}>{value}</Time>

                <MinusButton id={`${id}-decrement`} onClick={decrement}>
                    <span>-</span>
                </MinusButton>
            </ButtonContainer>
        </Main>
    )
}

LengthControls.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number,
    id: PropTypes.string,
    increment: PropTypes.func,
    decrement: PropTypes.func,
};

export default LengthControls;
