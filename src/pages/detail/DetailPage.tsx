import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Spin, Row, Col, DatePicker, Divider, Typography, Menu, Anchor, Button } from 'antd';
import styles from './DetailPage.module.css';
import { Header, Footer, ProductIntro, ProductComments } from "../../components";
import { commentMockData } from './mockup';
import { productDetailSlice, getProductDetail } from "../../redux/productDetail/slice";
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { useDispatch } from 'react-redux';
import { MainLayout } from "../../layouts";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { addShoppingCart } from "../../redux/shoppingCart/slice"

type MatchParams = {
    touristRouteId: string,
    other: string
}

export const DetailPage: React.FC = () => {
    const { touristRouteId } = useParams<MatchParams>();
    // const [loading, setLoading] = useState<boolean>(true);
    // const [product, setProduct] = useState<any>(null);
    // const [error, setError] = useState<string | null>(null);

    const loading = useSelector(state => state.productDetailReducer.loading);
    const error = useSelector(state => state.productDetailReducer.error);
    const product = useSelector(state => state.productDetailReducer.data);

    const { RangePicker } = DatePicker;

    const dispatch = useAppDispatch();

    const jwt = useSelector(s => s.user.token) as string;
    const shoppingCartLoading = useSelector(s => s.shoppingCart.loading);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         // setLoading(true)
    //         dispatch(productDetailSlice.actions.fetchStart())
    //         try {
    //             const { data } = await axios.get(
    //                 `http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`, {
    //                 headers: {
    //                     "x-icode": "68B3BD1D7CD6C14C"
    //                 }
    //             });
    //             // setProduct(data)
    //             // setLoading(false)
    //             dispatch(productDetailSlice.actions.fetchSuccess(data))
    //         } catch (error) {
    //             // setError(error instanceof Error ? error.message : "error");
    //             // setLoading(false)
    //             dispatch(productDetailSlice.actions.fetchFail(
    //                 error instanceof Error ? error.message : "error"
    //             ))
    //         }
    //     }
    //     fetchData()
    // }, [])

    //使用createAsyncThunk方式异步处理
    useEffect(() => {
        if (touristRouteId) {
            //报错说明：类型“AsyncThunkAction<void, string, {}>”的参数不能赋给类型“AnyAction”的参数
            //所以要给thunkAction创建一个自定义的钩子方法useAppDispatch来替代react-redux的useDispatch
            //dispatch(getProductDetail(touristRouteId))

            dispatch(getProductDetail(touristRouteId))
        }
    }, [])

    const menuItems = [
        {
            label: "产品特色",
            key: "#feature"
        },
        {
            label: "费用",
            key: "#fees"
        },
        {
            label: "预定须知",
            key: "#notes"
        },
        {
            label: "用户评价",
            key: "#comments"
        }
    ]

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

    return <>
        <MainLayout>
            <div className={styles["product-intro-container"]}>
                <Row>
                    <Col span={13}>
                        <ProductIntro
                            title={product.title}
                            shortDescription={product.description}
                            price={product.originalPrice}
                            coupons={product.coupons}
                            points={product.points}
                            discount={product.price}
                            rating={product.rating}
                            pictures={product.touristRoutePictures}
                        />
                    </Col>
                    <Col span={11}>
                        <div className={styles["product-detail-container-btn"]}>
                            <Button
                                type="primary"
                                danger
                                loading={shoppingCartLoading}
                                onClick={() => {
                                    dispatch(
                                        addShoppingCart({ jwt, touristRouteId: product.id })
                                    )
                                }}
                            >
                                <ShoppingCartOutlined />加入购物车
                            </Button>
                        </div>
                        <RangePicker open style={{ marginTop: 20 }} />
                    </Col>
                </Row>
            </div>

            <Anchor className={styles["product-detail-anchor"]}>
                <Menu mode="horizontal">
                    <Menu.Item key="1">
                        <Anchor.Link href="#feature" title="产品特色"></Anchor.Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Anchor.Link href="#fees" title="费用"></Anchor.Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Anchor.Link href="#notes" title="预定须知"></Anchor.Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Anchor.Link href="#comments" title="用户评价"></Anchor.Link>
                    </Menu.Item>
                </Menu>
            </Anchor>
            <div id="feature" className={styles["product-detail-container"]}>
                <Divider orientation={'center'}>
                    <Typography.Title level={3}>产品特色</Typography.Title>
                </Divider>
                <div dangerouslySetInnerHTML={{ __html: product.features }} style={{ margin: 50 }}></div>
            </div>
            <div id="fees" className={styles["product-detail-container"]}>
                <Divider orientation={'center'}>
                    <Typography.Title level={3}>费用</Typography.Title>
                </Divider>
                <div dangerouslySetInnerHTML={{ __html: product.fees }} style={{ margin: 50 }}></div>
            </div>
            <div id="notes" className={styles["product-detail-container"]}>
                <Divider orientation={'center'}>
                    <Typography.Title level={3}>预订须知</Typography.Title>
                </Divider>
                <div dangerouslySetInnerHTML={{ __html: product.notes }} style={{ margin: 50 }}></div>
            </div>
            <div id="comments" className={styles["product-detail-container"]}>
                <Divider orientation={'center'}>
                    <Typography.Title level={3}>用户评价</Typography.Title>
                </Divider>
                <div style={{ margin: 40 }}>
                    <ProductComments data={commentMockData} />
                </div>
            </div>
        </MainLayout>
    </>
}