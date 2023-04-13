import React, { useEffect, useState } from 'react'
import { Route, Link, Routes, useLocation } from 'react-router-dom'
import About from './about'

import axios from "axios"

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
	const [mydata, setDatas] = useState([])
	async function fetching(){
		await axios.get("https://poem.writers.repl.co/lists").then(r => {
			setDatas(r.data)
		}).catch(e => {
			setDatas("Error" + e)
		})
	}	
	useEffect(() => {
		fetching()
	})
	return(
		<div>sds
			{
				mydata
			}
			safsf
		</div>
	)
}

// SELECT fc_name FROM something WHERE ID = 1