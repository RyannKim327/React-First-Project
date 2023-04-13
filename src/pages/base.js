import React from 'react'
import { Route, Link, Routes, useLocation } from 'react-router-dom'
import About from './about'

export default function Base(){
	return(
		<div>
			<ul>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/">Home</Link>
				</li>
			</ul>
			<Routes>
				<Route path='/about' element={<About />}/>
				<Route path='/' element={<Rkim />}/>
			</Routes>
		</div>
	)
}

function Rkim(){
	const locale = useLocation()
	return(
		<div>
			<h1>Hello World {locale.pathname}</h1>
		</div>
	)
}