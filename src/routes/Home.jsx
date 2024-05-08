import { Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import Title from 'src/components/Title'

export default function Home() {

	return (
		<Paper sx={{ p: 2 }}>
			<Title>Home</Title>
			<Typography>Hello World!</Typography>
		</Paper>
	)
}