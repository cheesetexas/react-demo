import './App.css';
import React, {Fragment, useState} from "react";

function AppState() {

    const [contentStr, setContentStr] = useState('default content')
    function handleClickStr () {
        setContentStr('new content')
    }

    const [contentObj, setContentObj] = useState({
        title: 'default title',
        content: 'default content'
    })

    function handleClickObj () {
        setContentObj({
            ...contentObj, // set操作做的是全局替换而非局部替换，...data相当于把原来的值都先放在这里，下面的如果有重复直接替换
            title: 'new title'
        })
    }

    const [data, setData] = useState([
        {id: 1, name: "AAA"},
        {id: 2, name: "BBB"},
        {id: 3, name: "CCC"}
    ])

    const listData: React.JSX.Element[] = data.map(item=> (
        <li key={item.id}>{item.name}</li>
    ))

    let id: number = 3
    function addListElement () {
        setData([
            ...data,
            {id: ++id, name: "DDD"}
        ])
    }

    function removeListElement () {
        setData(data.filter(item => item.id !== 4))
    }

    return (
        <Fragment>
            <p>string状态变更</p>
            <div>{contentStr}</div>
            <button onClick={handleClickStr}>button1</button>
            <hr/>
            <p>obj状态变更</p>
            <div title={contentObj.title}>{contentObj.content}</div>
            <button onClick={handleClickObj}>button2</button>
            <hr/>
            <p>list状态变更</p>
            <ul>{listData}</ul>
            <button onClick={addListElement}>add list element</button>
            <button onClick={removeListElement}>remove list element</button>
        </Fragment>
    )

}

export default AppState;