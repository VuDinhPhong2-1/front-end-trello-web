import { Box, Button, useMediaQuery } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'
import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium'
function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    setMode(event.target.value)

  }
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize='small' /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeIcon fontSize='small' /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <BrightnessMediumIcon fontSize='small' /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl >
  )
}
function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button onClick={() => { setMode(mode === 'light' ? 'dark' : 'light') }}>
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}
function App() {

  return (
    <>
      <ModeSelect />
      <br />
      <ModeToggle />
      <br />
      <Button variant="contained">Hello world</Button>
    </>
  )
}

export default App
