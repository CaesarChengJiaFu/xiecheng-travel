import React, { useEffect } from 'react';
import styles from "./SearchPage.module.css";
import { Header, Footer, FilterArea, ProductList } from '../../components';
import { useParams, useLocation } from 'react-router-dom';
import { Spin, Typography, Pagination } from 'antd';
import { searchProduct } from '../../redux/productSearch/slice';
import { useSelector, useAppDispatch } from "../../redux/hooks";

type MatchParams = {
    keywords: string;
}

export const SearchPage: React.FC = () => {
    const { keywords } = useParams<MatchParams>()

    const loading = useSelector(state => state.productSearch.loading);
    const error = useSelector(state => state.productSearch.error);
    const productList = useSelector(state => state.productSearch.data);
    const pagination = useSelector(state => state.productSearch.pagination);

    const dispatch = useAppDispatch();
    const loaction = useLocation();

    useEffect(() => {
        if (keywords) {
            dispatch(searchProduct({ nextPage: 1, pageSize: 10, keywords }))
        }
    }, [loaction])

    const onPageChange = (nextPage, pageSize) => {
        if (keywords) {
            dispatch(searchProduct({ nextPage, pageSize, keywords }))
        }
    }

    if (loading) {
        return (
            <Spin
                size="large"
                style={{
                    marginTop: 200,
                    marginBottom: 200,
                    marginLeft: "auto",
                    marginRight: "auto",
                    width: "100%",
                }}
            />
        );
    }

    if (error) {
        return <div>网站出错：{error}</div>;
    }

    return <>
        <Header />

        <div className={styles["page-content"]}>
            <div className={styles["product-list-container"]}>
                <FilterArea />
            </div>

            <div className={styles["product-list-container"]}>
                {productList ? <ProductList data={productList} pagination={pagination} onPageChange={onPageChange} /> : <h2>暂无数据</h2>}
            </div>
        </div>
        <Footer />
    </>
}