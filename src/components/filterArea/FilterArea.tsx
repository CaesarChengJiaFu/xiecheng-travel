import React, { useState } from 'react';
import styles from './FilterArea.module.css';
import { Divider, Typography, Tag } from 'antd';
import { FilterTag } from "../../components"

export const FilterArea: React.FC = () => {
    return <>
        <div className={styles["page-content"]}>
            <FilterTag title={"路线评价"} tagsData={["1星", "2星", "3星", "4星", "5星"]} />
            <Divider dashed />
            <FilterTag title="出发城市" tagsData={["北京", "上海", "广州", "深圳"]} />
            <Divider dashed />
            <FilterTag title="行程天数" tagsData={["2日", "3日", "4日", "5日", "6日"]} />
            <Divider dashed />
            <FilterTag title="旅程类型" tagsData={["跟团游", "自由行", "自驾游", "高端定制"]} />
            <Divider dashed />
            <FilterTag title="触发事件" tagsData={["春节", "清明", "劳动节"]} />
        </div>
    </>
}