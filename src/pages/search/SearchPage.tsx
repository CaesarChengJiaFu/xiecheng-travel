import React, { useEffect } from 'react';
import styles from "./SearchPage.module.css";
import { Header, Footer } from '../../components';
import { useParams, useLocation } from 'react-router-dom';
import { Spin } from 'antd';
import { searchProduct } from '../../redux/productSearch/slice';
import { useSelector, useAppDispatch} from "../../redux/hooks"

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
        if(keywords) {
            dispatch(searchProduct({nextPage: 1, pageSize: 10, keywords}))
        }
    }, [loaction])

    return <>
        <Header />

        <div className={styles["page-content"]}>
            <div className={styles["product-list-container"]}>
                <div>FilterArea组件</div>
            </div>

            <div className={styles["product-list-container"]}>
                <div>ProductList组件</div>
            </div>
        </div>


        <Footer />
    </>
}