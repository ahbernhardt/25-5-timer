import React,{Component} from 'react';
import styled from "styled-components";
import LengthContainer from "./containers/LengthContainer";
import TimerContainer from "./containers/TimerContainer";
import TimerController from "./containers/TimerController";
import BeepAudio from "./containers/BeepAudio";
import {connect} from "react-redux";
import Footer from "./components/Footer";

export const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #E5E5E5;
    font-family: "Arial Black", Gadget, sans-serif;
`
export const Bottom = styled.div`
    display: flex;
    margin-top: 2%;
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
`
class App extends Component {
    render() {
        return (
            <AppContainer>
                <Container>
                    <TimerController/>
                    <BeepAudio/>
                    <TimerContainer/>
                    <Bottom>
                        <LengthContainer title='Timer'/>
                        <LengthContainer title='Break'/>
                    </Bottom>
                    <Footer />
                </Container>
            </AppContainer>
        )
    }
}
const mapStateToProps = (state) => ({
    paused: state.paused,
});

App = connect(
    mapStateToProps,
    null,
)(App);

export default App;
