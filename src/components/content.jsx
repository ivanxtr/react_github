import React from 'react'

const Content = (props) => {
  const { data } = props
 
   const bugs = () => {
     try {
       return data.map((item, index) => (
          <div className="item" key={index}>
           {item.title}
          </div>
       ))
     } catch (error) {
       return (
         <div>No data to display</div>
       )
     }
   }

  return (
    <div className="bugs">
       { bugs() }
    </div>
  )
}

export default Content
