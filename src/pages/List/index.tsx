import React, { useMemo, useRef } from "react";
import { useVirtualList } from 'ahooks';
import { Table } from "antd";
export default function Welcome() {
    const containerRef = useRef(null);
    const wrapperRef = useRef(null);

    // const originalList = useMemo(() => Array.from(Array(10000).keys()), []);

    // const columns = [
    //     {
    //         title: "Name",
    //         dataIndex: "name",
    //         key: "name"
    //     },
    //     {
    //         title: "Age",
    //         dataIndex: "age",
    //         key: "age"
    //     },
    //     {
    //         title: "Address",
    //         dataIndex: "address",
    //         key: "address"
    //     }
    // ];

    // const newList = originalList.map((item: any, index: any) => {
    //     return {
    //         ...item,
    //         key: index,
    //         name: `Edward King ${index}`,
    //         age: 32,
    //         address: `London, Park Lane no. ${index}`
    //     };
    // });

    // const [data] = useVirtualList(newList, {
    //     containerTarget: containerRef,
    //     wrapperTarget: wrapperRef,
    //     itemHeight: 60,
    //     overscan: 10,
    // });

    // const Vlist = data.map((_item: any) => _item.data);

    // return (
    //     <>
    //         <div ref={containerRef} style={{ height: '300px', overflow: 'auto', border: '1px solid' }}>
    //             <div ref={wrapperRef}>
    //                 {/* {data.map((ele: any) => (
    //                     <div
    //                         style={{
    //                             height: 52,
    //                             display: 'flex',
    //                             justifyContent: 'center',
    //                             alignItems: 'center',
    //                             border: '1px solid #e8e8e8',
    //                             marginBottom: 8,
    //                         }}
    //                         key={ele.index}
    //                     >
    //                         Row: {ele.data}
    //                     </div>
    //                 ))} */}
    //                 <Table columns={columns} dataSource={Vlist} pagination={false} />
    //             </div>
    //         </div>
    //     </>
    // );

    // const columns = [
    //     {
    //         title: 'Name',
    //         dataIndex: 'name',
    //         key: 'name',
    //     },
    //     {
    //         title: 'Age',
    //         dataIndex: 'age',
    //         key: 'age',
    //     },
    //     {
    //         title: 'Address',
    //         dataIndex: 'address',
    //         key: 'address',
    //     },
    // ];

    // const data = [];

    // for (let i = 0; i < 10000; i++) {
    //     data.push({
    //         key: i,
    //         name: `Edward King ${i}`,
    //         age: 32,
    //         address: `London, Park Lane no. ${i}`,
    //     });
    // }

    // const [list] = useVirtualList(data, {
    //     containerTarget: containerRef,
    //     wrapperTarget: wrapperRef,
    //     overscan: 10,
    //     itemHeight: 54,
    // });
    // const Vlist = list.map((_item: any) => _item.data);

    // return (
    //     <div ref={containerRef} style={{ height: '300px', overflowY: 'scroll' }}>
    //         <div ref={wrapperRef}>
    //             <Table dataSource={Vlist} columns={columns} pagination={false} />
    //         </div>
    //     </div>
    // );

    return (
        <h2>List!!!</h2>
    );
}