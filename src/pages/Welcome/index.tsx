import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import axios from 'axios'
import { useVirtualList } from 'ahooks';
import { Table } from "antd";

const Child = memo(({ userInfo }: any) => {
    console.log('Child render...', userInfo)

    return <div>
        <p>This is Child {userInfo.name} {userInfo.age}</p>
    </div>
})

export default function Welcome() {
    // function useMousePosition() {
    //     const [x, setX] = useState(0)
    //     const [y, setY] = useState(0)
    
    //     useEffect(() => {
    //         function mouseMoveHandler(event: any) {
    //             setX(event.clientX)
    //             setY(event.clientY)
    //         }
    
    //         // 绑定事件
    //         document.body.addEventListener('mousemove', mouseMoveHandler)
    
    //         // 解绑事件
    //         return () => document.body.removeEventListener('mousemove', mouseMoveHandler)
    //     }, [])
    
    //     return [x, y]
    // }

    // const [x, y] = useMousePosition()

    // return (
    //     <h2>Welcome!!!{x}-{y}</h2>
    // );

    // 封装 axios 发送网络请求的自定义 Hook
function useAxios(url) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        // 利用 axios 发送网络请求
        setLoading(true)
        setTimeout(()=>{
            axios.get(url) // 发送一个 get 请求
            .then(res => setData(res))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
        }, 3000)
        
    }, [url])

    return [loading, data, error]
}

const url = 'http://localhost:3000/'
    // 数组解构
    const [loading, data, error] = useAxios(url)

    if (loading) return <div>loading...</div>

    return error
        ? <div>{JSON.stringify(error)}</div>
        : <div>{JSON.stringify(data)}</div>
}