import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    color: gray;
    font-size: 12px;
    text-align: center;
    margin-top: 3%;
    width: 100%;
`
const Span = styled.span`
    display: inline-block;
    margin: 0.5rem;
`

const P = styled.p`
    margin-top: 0.5rem;
    font-weight: light;
}

 a {
    margin-left: 0.2rem;
}

.footer-link {
    color: gray;
    border-bottom: 1px solid transparent;
}

.footer-link i {
    font-size: 1.2rem;
    margin-left: 1px;
}

.footer-link:hover {
    color: white;
}
`
const Footer = () => (
    <FooterContainer>
        <P>
            © Copyright 2020 -
            <a className="footer-link" href="https://github.com/anguyen0208" target="_blank" rel="noopener noreferrer">
                Anh Nguyen
            </a>
            <Span> | </Span>
            <Span>
                Repo Link: {'  '}
                <a className="footer-link" href="https://github.com/anguyen0208/25-5-timer" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" />
                </a>
            </Span>
        </P>
    </FooterContainer>
);

export default Footer;
