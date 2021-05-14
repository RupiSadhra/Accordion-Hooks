import React from 'react';
import Accordian from './components/Accordian'

const items=[
    {
        title:'What is React?',
        content:'React is front end library to build reusable Ui components'
    },
    {
        title:'Why use React?',
        content:'React is favorite library among engineers'
    },
    {
        title:'How do use React?',
        content:'We use React by creating components'
    }
]
const App=()=>{
return <div><Accordian items={items}/></div>
}

export default App;