import React from "react"

const search = (props) => {
  const { filterData } = props

  return(
    <>
      <input
      className="search" 
        placeholder="Search"
        type="search"
        onChange={(e) => filterData(e.target.value)}
      />
    </>
  )
}

export default search
