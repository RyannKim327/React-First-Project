import React, { useEffect, useState } from 'react'

const initial = {
	title: "",
	content: ""
}

export default function Read(){
	const [{data, useData}, setState] = useState(initial)

	async function FetchReadings(id = 1) {
		setState([...initial])
		let _data = await fetch(`https://poem.writers.repl.co/read/${id}`).then(r => {
			return r.json()
		}).then(r => {
			return r
		}).catch(e => {
			return {
				"Error": e.messaage
			}
		})
		useData({
			title: _data.title,
			content: _data.content
		})
	}

	useEffect(() => {
		FetchReadings()
	})

	return(
		<div>
			<h1>Sample</h1>
			<ul>
				<li onClick={FetchReadings(172)}>Sample</li>
			</ul>
			<blockquote>{
				data.content.split("\n").map(c => {
					return(
						<p>{c}</p>
					)
				})
			}</blockquote>
		</div>
	)
}