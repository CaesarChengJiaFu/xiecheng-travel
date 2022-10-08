import React, { Component } from 'react';
import { Header, Footer, SideMenu, Carousel, ProductCollection, Companies } from '../../components';
import { Row, Col, Typography, Spin } from 'antd';
import { productList1, productList2, productList3 } from './mockups';
import styles from './HomePage.module.css'
import sideImage1 from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import { withRouter, RouteComponentProps } from '../../helpers/withRouter';
import { withTranslation, WithTranslation } from 'react-i18next';
import axios from 'axios';

interface State {
    loading: boolean,
    error: string | null,
    productList: any[]
}

class HomePageComponent extends Component<WithTranslation, State> {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            productList: []
        }
    }

    async componentDidMount() {
        try {
            const { data } = await axios.get("http://123.56.149.216:8080/api/productCollections", {
                headers: {
                    "x-icode": "68B3BD1D7CD6C14C"
                }
            });
            this.setState({
                loading: false,
                error: null,
                productList: data
            })
        } catch (error) {
            if(error instanceof Error) {
                this.setState({
                    error: error.message,
                    loading: false
                })
            }
        }
    }

    render(): React.ReactNode {
        const { t } = this.props; //t函数用于国际化
        const { productList, loading, error } = this.state
        if(loading) {
            return (
                <Spin 
                    size="large"
                    style={{
                        marginTop: 200,
                        marginBottom: 200,
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "100%"
                    }}    
                />
            )
        }

        if(error) {
            return <div>网站出错：{error}</div>
        }
        return (
            <>
                <Header />
                <div className={styles['main-content']}>
                    <Row style={{ marginTop: 20 }}>
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
                        products={productList[0].touristRoutes}
                    />
                    <ProductCollection
                        title={<Typography.Title level={3} type="danger">{t("home_page.new_arrival")}</Typography.Title>}
                        sideImage={sideImage2}
                        products={productList[1].touristRoutes}
                    />
                    <ProductCollection
                        title={<Typography.Title level={3} type="success">{t("home_page.domestic_travel")}</Typography.Title>}
                        sideImage={sideImage3}
                        products={productList[2].touristRoutes}
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