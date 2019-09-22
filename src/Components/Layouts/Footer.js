import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <h4>Footer</h4>
                            <ul className="list-unstyled">
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                                <li>Lorem ipsum</li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Footer</h4>
                            <ul className="list-unstyled">
                                <li><a href="#"> Lorem ipsum </a></li>
                                <li><a href="#"> Lorem ipsum </a></li>
                                <li><a href="#"> Lorem ipsum </a></li>
                                <li><a href="#"> Lorem ipsum </a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Footer</h4>
                            <ul className="list-unstyled">
                                <li><a href="#"> Lorem ipsum </a></li>
                                <li><a href="#"> Lorem ipsum </a></li>
                                <li><a href="#"> Lorem ipsum </a></li>
                                <li><a href="#"> Lorem ipsum </a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <h4>Footer</h4>
                            <ul className="list-unstyled">
                                <li><a href="#"> Lorem ipsum </a></li>
                                <li><a href="#"> Lorem ipsum </a></li>
                                <li><a href="#"> Lorem ipsum </a></li>
                                <li><a href="#"> Lorem ipsum </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Limit Guide App - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
.footer-middle {
    background: #343a40;
    padding-top: 3rem;
    color: #fff;
}

.footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a {
    color: rgba(109, 109, 109);
}

ul li a:hover {
    color: rgba(172, 172, 172);
}

`;
