import React from "react";
import styles from "./ProductList.module.css";
import { ProductCard } from "./ProductCard";
import { Typography, Pagination } from 'antd'

interface PropsType {
    data: any[],
    pagination: any,
    onPageChange?: (nextPage, pageSize) => void;
}

export const ProductList: React.FC<PropsType> = ({ data, pagination, onPageChange }) => {
    return (
        <div className={styles["page-content"]}>
            {data.map(item =>
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
            )}
            <div>搜索总路线：<Typography.Text strong>{pagination.totalCount}</Typography.Text> 条</div>
            <div className={styles["product-list-pagination"]}>
                <Pagination total={pagination.totalCount} current={pagination.currentPage} pageSize={pagination.pageSize} onChange={(page) => onPageChange && onPageChange(page, pagination.pageSize)}/>
            </div>
        </div>
    )
}