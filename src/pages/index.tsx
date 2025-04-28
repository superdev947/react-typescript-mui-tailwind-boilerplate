import { FC } from 'react'
import { Button } from '@mui/material'

interface Props {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

const Home: FC<Props> = ({ darkMode, setDarkMode }) => {
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className='min-h-screen flex items-center justify-center bg-white dark:bg-gray-800 text-black dark:text-white'>
        <Button onClick={() => setDarkMode(!darkMode)} variant='contained'>
          Toggle to {darkMode ? 'Light' : 'Dark'} Mode
        </Button>
      </div>
    </div>
  )
}
export default Home
