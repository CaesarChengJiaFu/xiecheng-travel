import React from 'react';
import styles from './MainLayout.module.css';
import { Header, Footer } from '../../components';

interface PropsType {
    children: React.ReactNode
}

export const MainLayout : React.FC<PropsType> = ({children}) => {
    
    return <>
        <Header />
        
        <div className={styles["main-content"]}>{children}</div>

        <Footer />
    </>
}