import React from "react";
import styles from './ShoppingCart.module.css';
import { MainLayout } from "../../layouts";
import { Row, Col, Typography, List, Divider, Button, } from 'antd';
import { ProductCard } from '../../components/productList/ProductCard';
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';

export const ShoppingCart: React.FC = () => {
    const dataList = [
        {
            "id": "2430bf64-fd56-460c-8b75-da0a1d1cd74c",
            "title": "法国+德国+意大利+瑞士12日跟团游(4钻)",
            "description": "【匠心定做】 庄园酒店 少女峰+卢浮宫+凡尔赛宫+新天鹅堡+塞纳河游船+贡多拉+巴黎蒙帕纳思56层观光廊+吕德斯海姆+科隆+4人1台WIFI",
            "price": 1455.180,
            "originalPrice": 14551.80,
            "discountPresent": 0.1,
            "rating": 5.0,
            "travelDays": "Five",
            "tripType": "BackPackTour",
            "departureCity": "Shenzhen",
            "createTime": "0001-01-01T00:00:00",
            "updateTime": null,
            "departureTime": null,
            "touristRoutePictures": [
                {
                    "id": 19,
                    "url": "https://z3.ax1x.com/2020/12/15/rMlFde.jpg",
                    "touristRouteId": "2430bf64-fd56-460c-8b75-da0a1d1cd74c"
                },
                {
                    "id": 20,
                    "url": "https://z3.ax1x.com/2020/12/15/rMlVJA.jpg",
                    "touristRouteId": "2430bf64-fd56-460c-8b75-da0a1d1cd74c"
                },
                {
                    "id": 21,
                    "url": "https://z3.ax1x.com/2020/12/15/rMlZRI.jpg",
                    "touristRouteId": "2430bf64-fd56-460c-8b75-da0a1d1cd74c"
                },
                {
                    "id": 22,
                    "url": "https://z3.ax1x.com/2020/12/15/rMlezt.jpg",
                    "touristRouteId": "2430bf64-fd56-460c-8b75-da0a1d1cd74c"
                }
            ]
        },
        {
            "id": "39996f34-013c-4fc6-b1b3-0c1036c47110",
            "title": "摩洛哥撒哈拉沙漠+卡萨布兰卡+马拉喀什+舍夫沙万12日跟团游(4钻)",
            "description": "【世界加油】明星一价全包|免签|25人封顶|特色沙漠酒店夜观繁星+卡萨升国5喜来登|赠骆驼骑行换装秀+撒哈拉四驱车+YSL花园下午茶+表演秀|网红餐厅",
            "price": 15490.00,
            "originalPrice": 15490.00,
            "discountPresent": null,
            "rating": 3.2,
            "travelDays": "Three",
            "tripType": "BackPackTour",
            "departureCity": "Shenzhen",
            "createTime": "0001-01-01T00:00:00",
            "updateTime": null,
            "departureTime": null,
            "touristRoutePictures": [
                {
                    "id": 28,
                    "url": "https://z3.ax1x.com/2020/12/15/rMQ52q.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47110"
                },
                {
                    "id": 29,
                    "url": "https://z3.ax1x.com/2020/12/15/rMlQeS.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47110"
                },
                {
                    "id": 30,
                    "url": "https://z3.ax1x.com/2020/12/15/rMGXgs.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47110"
                },
                {
                    "id": 31,
                    "url": "https://z3.ax1x.com/2020/12/15/rMGzD0.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47110"
                }
            ]
        },
        {
            "id": "39996f34-013c-4fc6-b1b3-0c1036c47111",
            "title": "越南胡志明市+美奈+芽庄+河内7日6晚跟团游(4钻)",
            "description": "【携程专享团：无购物&无自费】西贡小巴黎+美奈红白沙丘+首都市区游览，莲花自助餐&斗笠&滴壶咖啡&芽庄海鲜餐『A+B线：芽庄段Up2晚5钻酒店，+1元换泥浆浴』",
            "price": 4544.00,
            "originalPrice": 4544.00,
            "discountPresent": null,
            "rating": 4.5,
            "travelDays": "Five",
            "tripType": "BackPackTour",
            "departureCity": "Shenzhen",
            "createTime": "0001-01-01T00:00:00",
            "updateTime": null,
            "departureTime": null,
            "touristRoutePictures": [
                {
                    "id": 32,
                    "url": "https://z3.ax1x.com/2020/12/15/rMGxuq.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47111"
                },
                {
                    "id": 33,
                    "url": "https://z3.ax1x.com/2020/12/15/rMGjvn.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47111"
                },
                {
                    "id": 34,
                    "url": "https://z3.ax1x.com/2020/12/15/rMGO3j.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47111"
                },
                {
                    "id": 35,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJ9ET.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47111"
                }
            ]
        },
        {
            "id": "39996f34-013c-4fc6-b1b3-0c1036c47112",
            "title": "三亚5日自由行(5钻)·王炸！劲爆热销5钻酒店·详见产品特色内各链接！！！4-6月早计划！性价比完胜往年同期！错过不再有的骨折价！",
            "description": "【携程自营人气爆品 | 累计万人出游 | 自由活动、行程全含随心选】品蟹料理 神户牛 温泉餐 A线:纯玩网红线 观富士山 赠岚山深度 可选镰仓游 B线:赠镰仓深度游 可选神户游",
            "price": 5999.80,
            "originalPrice": 5999.80,
            "discountPresent": null,
            "rating": 5.0,
            "travelDays": "Five",
            "tripType": "BackPackTour",
            "departureCity": "Shenzhen",
            "createTime": "0001-01-01T00:00:00",
            "updateTime": null,
            "departureTime": null,
            "touristRoutePictures": [
                {
                    "id": 36,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJSbV.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47112"
                },
                {
                    "id": 37,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJP5F.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47112"
                },
                {
                    "id": 38,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJFC4.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47112"
                },
                {
                    "id": 39,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJCUU.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47112"
                }
            ]
        },
        {
            "id": "39996f34-013c-4fc6-b1b3-0c1036c47113",
            "title": "浙江普陀山2日1晚跟团游",
            "description": "『登佛顶山』祈福 宿“海边”客栈(含早)#海岛全景游#，人民广场/松江郊区，上车点自由选择",
            "price": 5999.80,
            "originalPrice": 5999.80,
            "discountPresent": null,
            "rating": 4.5,
            "travelDays": "Five",
            "tripType": "BackPackTour",
            "departureCity": "Shenzhen",
            "createTime": "0001-01-01T00:00:00",
            "updateTime": null,
            "departureTime": null,
            "touristRoutePictures": [
                {
                    "id": 40,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJk8J.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47113"
                },
                {
                    "id": 41,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJA29.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47113"
                },
                {
                    "id": 42,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJEvR.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47113"
                }
            ]
        },
        {
            "id": "39996f34-013c-4fc6-b1b3-0c1036c47114",
            "title": "苏州+乌镇+杭州3日2晚跟团游(5钻)",
            "description": "往年同期不会有的性价比 2020该补上的旅行 详见产品特色内链接！！！经典线路 资源丰富 燃爆全江南，错过不再会有的骨折价！",
            "price": 5999.80,
            "originalPrice": 5999.80,
            "discountPresent": null,
            "rating": 4.5,
            "travelDays": "Five",
            "tripType": "BackPackTour",
            "departureCity": "Shenzhen",
            "createTime": "0001-01-01T00:00:00",
            "updateTime": null,
            "departureTime": null,
            "touristRoutePictures": [
                {
                    "id": 43,
                    "url": "https://z3.ax1x.com/2020/12/15/rMQ2Vg.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47114"
                },
                {
                    "id": 44,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJZK1.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47114"
                },
                {
                    "id": 45,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJeDx.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47114"
                },
                {
                    "id": 46,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJmb6.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47114"
                },
                {
                    "id": 47,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJKUO.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47114"
                }
            ]
        },
        {
            "id": "39996f34-013c-4fc6-b1b3-0c1036c47115",
            "title": "日本东京富士山+忍野八海+河口湖+御殿场奥特莱斯包车一日游【东京/箱根/镰仓/横滨/伊豆】",
            "description": "【携程自营人气爆品 | 累计万人出游 | 自由活动、行程全含随心选】品蟹料理 神户牛 温泉餐 A线:纯玩网红线 观富士山 赠岚山深度 可选镰仓游 B线:赠镰仓深度游 可选神户游",
            "price": 1466.00,
            "originalPrice": 1466.00,
            "discountPresent": null,
            "rating": 4.5,
            "travelDays": "Five",
            "tripType": "BackPackTour",
            "departureCity": "Shenzhen",
            "createTime": "0001-01-01T00:00:00",
            "updateTime": null,
            "departureTime": null,
            "touristRoutePictures": [
                {
                    "id": 48,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJuVK.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47115"
                },
                {
                    "id": 49,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJM5D.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47115"
                },
                {
                    "id": 50,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJ32d.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47115"
                },
                {
                    "id": 51,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJlPe.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47115"
                },
                {
                    "id": 52,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJ18H.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47115"
                }
            ]
        },
        {
            "id": "39996f34-013c-4fc6-b1b3-0c1036c47116",
            "title": "日本冲绳座间味观鲸纯玩一日游【无鲸全退|那霸|本部町|北谷美国村观鲸】",
            "description": "【携程自营人气爆品 | 累计万人出游 | 自由活动、行程全含随心选】品蟹料理 神户牛 温泉餐 A线:纯玩网红线 观富士山 赠岚山深度 可选镰仓游 B线:赠镰仓深度游 可选神户游",
            "price": 5999.80,
            "originalPrice": 5999.80,
            "discountPresent": null,
            "rating": 4.5,
            "travelDays": "Five",
            "tripType": "BackPackTour",
            "departureCity": "Shenzhen",
            "createTime": "0001-01-01T00:00:00",
            "updateTime": null,
            "departureTime": null,
            "touristRoutePictures": [
                {
                    "id": 53,
                    "url": "https://z3.ax1x.com/2020/12/15/rMGjvn.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47116"
                },
                {
                    "id": 54,
                    "url": "https://z3.ax1x.com/2020/12/15/rMQRaQ.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47116"
                },
                {
                    "id": 55,
                    "url": "https://z3.ax1x.com/2020/12/15/rMlVJA.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47116"
                },
                {
                    "id": 56,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJEvR.jp",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47116"
                }
            ]
        },
        {
            "id": "39996f34-013c-4fc6-b1b3-0c1036c47117",
            "title": "印度尼西亚巴厘岛7日5晚私家团(5钻)",
            "description": "A线独栋泳池别墅·可选网红漂浮早餐·3晚海边『希尔顿/美利亚/安瓦雅』·B线3晚海景房『康莱德/尤露/喜来登』·C线明星款『阿雅娜度假村·无边泳池·悬崖酒吧』·DE线酒店自选",
            "price": 5023.00,
            "originalPrice": 5023.00,
            "discountPresent": null,
            "rating": 4.5,
            "travelDays": "Five",
            "tripType": "BackPackTour",
            "departureCity": "Shenzhen",
            "createTime": "0001-01-01T00:00:00",
            "updateTime": null,
            "departureTime": null,
            "touristRoutePictures": [
                {
                    "id": 57,
                    "url": "https://z3.ax1x.com/2020/12/15/rMliZD.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47117"
                },
                {
                    "id": 58,
                    "url": "https://z3.ax1x.com/2020/12/15/rMQ7rT.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47117"
                },
                {
                    "id": 59,
                    "url": "https://z3.ax1x.com/2020/12/15/rMQOIJ.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47117"
                },
                {
                    "id": 60,
                    "url": "https://z3.ax1x.com/2020/12/15/rMlezt.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47117"
                }
            ]
        },
        {
            "id": "39996f34-013c-4fc6-b1b3-0c1036c47118",
            "title": "南京3日2晚跟团游(4钻)",
            "description": "观中山陵+游总统府+览博物院『游六朝古都 听漫长历史』&逛秦淮河风光带+老门东『品美食 唤醒您的舌尖』&牛首山+报恩寺『诚心祈福 放空心灵』& 2晚连住4钻酒店",
            "price": 599.00,
            "originalPrice": 599.00,
            "discountPresent": null,
            "rating": 4.5,
            "travelDays": "Five",
            "tripType": "BackPackTour",
            "departureCity": "Shenzhen",
            "createTime": "0001-01-01T00:00:00",
            "updateTime": null,
            "departureTime": null,
            "touristRoutePictures": [
                {
                    "id": 61,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJk8J.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47118"
                },
                {
                    "id": 62,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJk8J.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47118"
                },
                {
                    "id": 63,
                    "url": "https://z3.ax1x.com/2020/12/15/rMJ9ET.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47118"
                },
                {
                    "id": 64,
                    "url": "https://z3.ax1x.com/2020/12/15/rMlFde.jpg",
                    "touristRouteId": "39996f34-013c-4fc6-b1b3-0c1036c47118"
                }
            ]
        }
    ]

    const data = [
        {
            key: 0,
            value: 5198,
            description: (
                <>
                    <Row className={styles["i-page-shoping-payments-ori"]}>
                        <Col span={8}>
                            <Typography.Text>原价</Typography.Text>
                        </Col>
                        <Col span={16}>
                            <Typography.Text delete>￥ 5198</Typography.Text>
                        </Col>
                    </Row>
                </>
            )
        },
        {
            key: 1,
            value: 1058.99,
            description: (
                <>
                    <Row className={styles["i-page-shoping-payments-pre"]}>
                        <Col span={8}>
                            <Typography.Text>现价</Typography.Text>
                        </Col>
                        <Col span={16}>
                            <Typography.Title level={3} type="danger">￥ 1058.99</Typography.Title>
                        </Col>
                    </Row>
                </>
            )
        }
    ]

    return <>
        <MainLayout>
            <div className="">
                <Row>
                    <Col span={17}>
                        <div className={styles["i-page-shopping-cart"]}>
                            {
                                dataList.map(item =>
                                    <div key={item.id}>
                                        <ProductCard
                                            id={item.id}
                                            price={item.price}
                                            title={item.title}
                                            originalPrice={item.originalPrice}
                                            discountPresent={item.discountPresent}
                                            travelDays={item.travelDays}
                                            departureCity={item.departureCity}
                                            rating={item.rating}
                                            description={item.description}
                                            tripType={item.tripType}
                                            imgUrl={item.touristRoutePictures[0].url || ""}
                                        />
                                    </div>
                                )
                            }
                        </div>
                    </Col>
                    <Col span={7}>
                        <div className={styles["i-page-shoping-payments"]}>
                            <Typography.Title level={2}>总计</Typography.Title>
                            <List
                                bordered={false}
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        {item.description}
                                    </List.Item>
                                )}
                            />
                            
                            <div className={styles["i-page-shoping-payments-btn"]}>
                                <Button type="primary" danger><CheckCircleOutlined />下单支付</Button>
                                <Button ><DeleteOutlined />清空</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </MainLayout>
    </>
}