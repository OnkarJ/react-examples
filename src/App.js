import React, { useState } from 'react';
import { list } from './common/componentList';

import './common/App.css';

function App() {

  const [itemRendered, setItemToBeRendered] = useState(null);

  const handleItemClick = (item) => {
    setItemToBeRendered(item.component)
  }

  return (
    <div className="App">

      {list.map((item) => {
        return <li className='App__list' key={item.id} onClick={() => handleItemClick(item)} >
          {item.name}
        </li>;
      })}

      {itemRendered}

    </div>
  );
}

export default App;
