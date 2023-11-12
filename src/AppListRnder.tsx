import React, {Fragment} from 'react';
import './App.css';

function AppListRender() {
    const list: {id: number, name: string}[] = [
        {id: 1, name: "AAA"},
        {id: 2, name: "BBB"},
        {id: 3, name: "CCC"}
    ]

    const listContent: React.JSX.Element[] = list.map(item => (
        <Fragment key={item.id}>
            <li>{item.name}</li>
            <li>------------------------------</li>
        </Fragment>
    ))

  return (
    <div>
        <ul>
            {listContent}
        </ul>
    </div>
  );
}

export default AppListRender;
