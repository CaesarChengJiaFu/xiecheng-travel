import React from "react";
import styles from './Companies.module.css';
import { Row, Col, Divider, Typography } from 'antd';

import image1 from './../../assets/images/microsoft-80658_640.png';
import image2 from './../../assets/images/facebook-807588_640.png';
import image3 from './../../assets/images/follow-826033_640.png';
import image4 from './../../assets/images/icon-720944_640.png'

export const Companies : React.FC = () => {
    return <div className={styles['main-content']}>
        <Divider orientation="left">
            <Typography.Title level={3} >合作企业</Typography.Title>
        </Divider>
        <Row>
            <Col span={6}>
                <img src={image1} className={styles.image}/>
            </Col>
            <Col span={6}>
                <img src={image2} className={styles.image}/>
            </Col>
            <Col span={6}>
                <img src={image3} className={styles.image}/>
            </Col>
            <Col span={6}>
                <img src={image4} className={styles.image}/>
            </Col>
        </Row>
    </div>
}