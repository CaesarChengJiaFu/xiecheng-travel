import React from "react";
import { useParams } from 'react-router-dom'

type MatchParams = {
    touristRouteId: string,
    other: string
}

export const DetailPage : React.FC = () => {
    var params = useParams<MatchParams>()
    return (
        <div>旅游路线详情页, 路线ID: {params.touristRouteId} {params.other}</div>
    )
}