import { Route, Link, Routes } from 'react-router-dom'

import About from './about'
import Read from './read'

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
				<Route path='/' element={<Read />}/>
			</Routes>
		</div>
	)
}

/*

function Rkim(){
	const [mydata, setDatas] = useState([])
	async function fetching(){
		// await axios.get("https://poem.writers.repl.co/lists").then(r => {
		// 	setDatas(r.data)
		// }).catch(e => {
		// 	setDatas("Error" + e)
		// })
		await fetch("https://poem.writers.repl.co/lists").then(r => {
			return r.json()
		}).then(r => {
			setDatas(r.poems)
		}).catch(e => {
			setDatas("Error: " + e)
		})
	}	
	useEffect(() => {
		fetching()
	})
	return(
		<div>
			{
				mydata.length <= 0 ? "Please Wait" : mydata.map(e => {
					return(
						<h1 className='text-3xl underline'>{e.title}</h1>
					)
				})
				// JSON.stringify(mydata)
			}
		</div>
	)
}
*/
// SELECT fc_name FROM something WHERE ID = 1