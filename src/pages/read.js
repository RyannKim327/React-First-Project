import React, { useEffect, useState } from 'react'

export default function Read(){
	const [data, useData] = useState([])

	async function FetchReadings(id = 1) {
		let _data = await fetch(`https://poem.writers.repl.co/read/${id}`).then(r => {
			return r.json()
		}).then(r => {
			return r
		}).catch(e => {
			return {
				"Error": e.messaage
			}
		})
		useData(_data)
	}

	useEffect(() => {
		FetchReadings()
	})

	return(
		<div>
			<h1>Sample</h1>
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