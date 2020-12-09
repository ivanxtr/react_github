import React, { useState, useEffect } from 'react'
import './App.css';
import Search from './components/searchComponent'
import { Promises, Filter } from './factory/index'
import Content from './components/content'

function App() {

  const [data, setData] = useState([])
  const [cacheData, setCacheData] = useState([])

  // calling the API
  const apicall = async () => {
    const call = await new Promises('https://api.github.com/repos/facebook/react/issues')
    const result = await call.getReactBugs()
    setCacheData(result)
    return setData(result)
  }

  const filterData = async (query) => {
    const cloneData = JSON.parse(JSON.stringify(cacheData))
    const filter = new Filter(cloneData, query)
    const response = await filter.filterByTitle()
    return setData(response)
  }

  // rendering thte initial data
  useEffect(() => {
    apicall()
  },[])

  return (
    <div className="App">
      <Search filterData={filterData} />
      <Content data={data} />
    </div>
  );
}

export default App;
