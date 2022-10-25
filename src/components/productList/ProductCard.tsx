import React from "react";
import styles from "./ProductCard.module.css";
import { Link, NavLink } from "react-router-dom";
import { Rate, Space, Image, Tag, Typography, Row, Col, Divider } from "antd";
import { LikeOutlined, StarOutlined } from "@ant-design/icons";

interface PropsType {
    id: string | number,
    price: string | number,
    title: string,
    originalPrice: string | number,
    discountPresent: string | number | null,
    travelDays: string,
    departureCity: string,
    rating: string | number
    description: string,
    tripType: string,
    imgUrl: string
}

export const ProductCard: React.FC<PropsType> = ({ id, price, title, originalPrice, discountPresent, travelDays, departureCity, rating, description, tripType, imgUrl }) => {
    return (
        <div className={styles["page-content"]}>
            <Row>
                <Col span={18}>
                    <Row>
                        <div className="">
                            <Typography.Text delete={true} style={{fontSize: 20, fontWeight: 400}}>￥ {originalPrice}</Typography.Text>
                            <Typography.Text type="danger" style={{fontSize: 20, fontWeight: 400}}>￥ {price}</Typography.Text>
                            <Typography.Text className={styles["page-content-title-text"]}>
                                <Link to={`detail/${id}`} title={title}>
                                    {title.length > 50 ? title.slice(0, 50) + "..." : title}
                                </Link>
                            </Typography.Text>
                        </div>
                    </Row>
                    <Row>
                        <div className={styles["page-content-tags"]}>
                            <Tag color="#f50">{`${departureCity}出发`}</Tag>
                            <Tag color="#2db7f5">{`${travelDays}days`}</Tag>
                            {discountPresent === 0.1 ? <Tag color="#87d068">超低折扣</Tag> : <></>}
                            {tripType ? <Tag color="#108ee9">{tripType}</Tag> : <></>}
                        </div>
                    </Row>
                    <Row>
                        <div className={styles["page-content-description"]}>
                            <Typography.Text>{description}</Typography.Text>
                        </div>
                    </Row>
                    <Row>
                        <div className={styles["page-content-estimate"]}>
                            <Typography.Text type="secondary" style={{ marginRight: 10 }}>
                                <StarOutlined />
                                <span style={{ marginLeft: 10 }}>156</span>
                            </Typography.Text>
                            <Divider type="vertical" />
                            <Typography.Text type="secondary" style={{ marginLeft: 10 }}>
                                <LikeOutlined />
                                <span style={{ marginLeft: 10 }}>156</span>
                            </Typography.Text>
                            <Divider type="vertical" />
                            <div style={{ marginLeft: 10 }}>
                                <Rate disabled defaultValue={Number(rating)} />
                            </div>
                        </div>
                    </Row>
                </Col>
                <Col span={6}>
                    <Image src={imgUrl} />
                </Col>
            </Row>
            <Divider />
        </div>
    )
}