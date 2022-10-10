import React, { Component } from 'react';
import { Header, Footer, SideMenu, Carousel, ProductCollection, Companies } from '../../components';
import { Row, Col, Typography, Spin } from 'antd';
import styles from './HomePage.module.css'
import sideImage1 from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import { withTranslation, WithTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { RootState } from '../../redux/store';
import { giveMeDataActionCreator } from "../../redux/recommendProducts/recommendProductsActions"

const mapStateToProps = (state: RootState) => {
    return {
        loading: state.recommendProductsReducer.loading,
        error: state.recommendProductsReducer.error,
        productList: state.recommendProductsReducer.productList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        giveMeData: () => {
            dispatch(giveMeDataActionCreator())
        }
    }
}

type PropsType = WithTranslation &
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>

class HomePageComponent extends Component<PropsType> {

    async componentDidMount() {
        this.props.giveMeData();
    }

    render(): React.ReactNode {
        const { t, productList, loading, error } = this.props; //t函数用于国际化
        if (loading) {
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

        if (error) {
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
export const HomePage = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(HomePageComponent))