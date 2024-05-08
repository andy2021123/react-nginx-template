import { Paper } from '@mui/material'
import Title from 'src/components/Title'

export default function Data() {
	const data = {
		first: 'React',
		last: 'Nginx',
		address1: 'javascript ln',
		address2: null
	}
	return (
		<Paper sx={{ p: 2 }}>
			<Title>Data</Title>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</Paper>
	)
}