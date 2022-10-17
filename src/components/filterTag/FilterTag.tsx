import React, { useState } from "react";
import styles from "./FilterTag.module.css";
import { Divider, Typography, Tag } from 'antd';

const { Text } = Typography;
const { CheckableTag } = Tag;

interface PropsType {
    title: string,
    tagsData: string[],
}

export const FilterTag: React.FC<PropsType> = ({title, tagsData}) => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const handleChangeTag = (tag: string, checked: boolean) => {
        const newSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(i => i !== tag);
        setSelectedTags(newSelectedTags)
    }

    return (
        <div className={styles["page-content"]}>
            <Text style={{ marginRight: 40, fontSize: 15, fontWeight: 500 }}>{title}：</Text>
            {tagsData.map((tag, index) => (
                <span key={tag}>
                    <CheckableTag
                        key={tag}
                        checked={selectedTags.indexOf(tag) > -1}
                        onChange={checked => handleChangeTag(tag, checked)}    
                    >
                        <span style={{fontSize: 14, fontWeight: 400}}>{tag}</span>
                    </CheckableTag>
                    {index === (tagsData.length - 1) ? <></> : <Divider type="vertical" />}
                </span>
            ))}
        </div>
    )
}