import React from 'react'
import { useParams } from 'react-router-dom' 
import { useLocation } from 'react-router-dom';

/*...*/


export default function BlogDetails(props, state) {
	const {id}  = useParams()
	
	const location = useLocation();
const data = location.state;
console.log(data);
  return (
	<div>{data.name} - {id}</div>
  )
}
