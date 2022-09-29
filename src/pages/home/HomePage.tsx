import React, { Component } from 'react';
import { Header, Footer, SideMenu, Carousel, ProductCollection, Companies } from '../../components';
import { Row, Col, Typography } from 'antd';
import { productList1, productList2, productList3 } from './mockups';
import styles from './HomePage.module.css'
import sideImage1 from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import { withRouter, RouteComponentProps } from '../../helpers/withRouter';
import { withTranslation, WithTranslation } from 'react-i18next';

class HomePageComponent extends Component<WithTranslation> {
    render(): React.ReactNode {
        const { t } = this.props; //t函数用于国际化
        return (
            <>
                <Header />
                <div className={styles['main-content']}>
                    <Row style={{marginTop: 20}}>
                    <Col span={6}>
                        <SideMenu />
                    </Col>
                    <Col span={18}>
                        <Carousel />
                    </Col>
                    </Row>
                    <ProductCollection 
                    title={<Typography.Title level={3} type="warning">{t("home_page.hot_recommended")}</Typography.Title>}
                    sideImage={sideImage1}
                    products={productList1}
                    />
                    <ProductCollection 
                    title={<Typography.Title level={3} type="danger">{t("home_page.new_arrival")}</Typography.Title>}
                    sideImage={sideImage2}
                    products={productList2}
                    />
                    <ProductCollection 
                    title={<Typography.Title level={3} type="success">{t("home_page.domestic_travel")}</Typography.Title>}
                    sideImage={sideImage3}
                    products={productList3}
                    />
                    <Companies />
                </div>
                <Footer />
            </>
            
        )
    }
}

//export const HomePage = withRouter(HomePageComponent)
//第一个括号代表语言所使用的的命名空间，第二个传入组件
//withTranslation是高阶组件，WithTranslation是类型定义
export const HomePage = withTranslation()(HomePageComponent)