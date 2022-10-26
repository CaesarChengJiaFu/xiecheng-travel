import React from "react";
import styles from './ShoppingCart.module.css';
import { MainLayout } from "../../layouts";
import { Row, Col, Typography, List, Affix, Button, Divider } from 'antd';
import { ProductCard } from '../../components/productList/ProductCard';
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSelector, useAppDispatch } from "../../redux/hooks";
import { clearShoppingCartItem, checkout } from "../../redux/shoppingCart/slice";
import { useNavigate } from "react-router-dom";

export const ShoppingCart: React.FC = () => {
    const shoppingCartItems = useSelector(s => s.shoppingCart.items);

    const jwt = useSelector(s => s.user.token) as string;

    const dispatch = useAppDispatch();

    const navigate = useNavigate()

    const originalPrice = shoppingCartItems && shoppingCartItems.length > 0 ? parseInt(
        shoppingCartItems.reduce((pre, cur) => {
            return pre + Number(cur.touristRoute.originalPrice)
        }, 0)
    ) : 0;

    const price = shoppingCartItems && shoppingCartItems.length > 0 ? parseInt(
        shoppingCartItems.reduce((pre, cur) => {
            return pre + Number(cur.touristRoute.price)
        }, 0)
    ) : 0;

    const handlerClearShoppingCarts = () => {
        dispatch(clearShoppingCartItem({ jwt, itemIds: shoppingCartItems.map(s => s.id) }))
    }

    const handlerPayShoppingCarts = () => {
        navigate('/placeorder')
    }

    return <>
        <MainLayout>
            <div className="">
                <Row>
                    <Col span={17}>
                        <div className={styles["i-page-shopping-cart"]}>
                            {
                                shoppingCartItems && shoppingCartItems.length > 0 ? shoppingCartItems.map(item =>
                                    <div key={item.id}>
                                        <ProductCard
                                            id={item.touristRoute.id}
                                            price={item.touristRoute.price}
                                            title={item.touristRoute.title}
                                            originalPrice={item.touristRoute.originalPrice}
                                            discountPresent={item.touristRoute.discountPresent}
                                            travelDays={item.touristRoute.travelDays}
                                            departureCity={item.touristRoute.departureCity}
                                            rating={item.touristRoute.rating}
                                            description={item.touristRoute.description}
                                            tripType={item.touristRoute.tripType}
                                            imgUrl={item.touristRoute.touristRoutePictures[0].url || ""}
                                        />
                                    </div>
                                ) : <h2>暂无数据</h2>
                            }
                        </div>
                    </Col>
                    <Col span={7}>
                        <Affix>
                            <div className={styles["i-page-shoping-payments"]}>
                                <Typography.Title level={2}>总计</Typography.Title>
                                <div className={styles["i-page-shoping-payments-item"]}>
                                    <div style={{ fontSize: 16 }}>
                                        <Typography.Text>原价</Typography.Text>
                                    </div>
                                    <div style={{ fontSize: 16 }}>
                                        <Typography.Text delete>{`￥ ${originalPrice}`}</Typography.Text>
                                    </div>
                                </div>
                                <Divider />
                                <div className={styles["i-page-shoping-payments-item"]}>
                                    <div style={{ fontSize: 16 }}>
                                        <Typography.Text>现价</Typography.Text>
                                    </div>
                                    <div>
                                        <Typography.Title level={3} type="danger">{`￥ ${price}`}</Typography.Title>
                                    </div>
                                </div>
                                <div className={styles["i-page-shoping-payments-btn"]}>
                                    <Button type="primary" danger disabled={shoppingCartItems.length <= 0}><CheckCircleOutlined />下单支付</Button>
                                    <Button disabled={shoppingCartItems.length <= 0} onClick={handlerClearShoppingCarts}><DeleteOutlined />清空</Button>
                                </div>
                            </div>
                        </Affix>
                    </Col>
                </Row>
            </div>
        </MainLayout>
    </>
}