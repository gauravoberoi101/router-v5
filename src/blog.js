import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
	
	const [blogs, setBlogs] = useState([
		{name:"blog A", id: 1},
		{name:"blog B", id: 2},
		{name:"blog c", id: 3}
	])
  return (
	<div>{blogs.map(res=>{
		return(<div key={res.id}>
			<Link to={{pathname:`/blog/${res.id}`, state: res}} >{res.name}</Link>
		</div>)
	})}</div>
  )
}
