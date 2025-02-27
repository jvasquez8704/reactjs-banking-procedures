import React from 'react';
import { Col, Row } from 'antd';
import { FacebookFilled, InstagramFilled, TwitterCircleFilled, YoutubeFilled } from '@ant-design/icons';
import logo from '../../res/img/white-logo.svg';


const CustomFooter = () => {
    return (
        <div className="stc-footer">
            <Row className="stc-main-footer-content">
                <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                    {/*Nothing*/}
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                    <img alt="Logo Banco Atlantida" className="stc-landing-logo-header" src={logo} />
                </Col>
                <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                    <Row type="flex" justify="center" className="icons-list">
                        <Col xs={3} sm={3} md={4} lg={3} xl={3} xxl={2}>
                            <a href="https://www.facebook.com/bancatlan" target="_blank" rel="noopener noreferrer" className="stc-link">
                                <FacebookFilled className="stc-footer-icon" />
                            </a>
                        </Col>
                        <Col xs={3} sm={3} md={4} lg={3} xl={3} xxl={2}>
                            <a href="https://www.instagram.com/bancatlan" target="_blank" rel="noopener noreferrer" className="stc-link">
                                <InstagramFilled className="stc-footer-icon" />
                            </a>
                        </Col>
                        <Col xs={3} sm={3} md={4} lg={3} xl={3} xxl={2}>
                            <a href="https://twitter.com/bancatlan" target="_blank" rel="noopener noreferrer" className="stc-link">
                                <TwitterCircleFilled className="stc-footer-icon" />
                            </a>
                        </Col>
                        <Col xs={3} sm={3} md={4} lg={3} xl={3} xxl={2}>
                            <a href="https://www.youtube.com/user/bancatlan" target="_blank" rel="noopener noreferrer" className="stc-link">
                                <YoutubeFilled className="stc-footer-icon" />
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <div className="stc-footer-site">
                            <a href="https://www.bancatlan.hn" target="_blank" rel="noopener noreferrer" className="stc-address-site">www.bancatlan.hn</a>
                        </div>
                    </Row>
                </Col>
            </Row>
            {/* <Row type="flex" justify="center" className="stc-footer-base">
                <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
                    <div className="stc-footer-site">
                        <a href="https://www.bancatlan.hn" target="_blank" rel="noopener noreferrer" className="stc-address-site">www.bancatlan.hn</a>
                    </div>
                </Col>
            </Row> */}
        </div>
    );
};

export default CustomFooter;