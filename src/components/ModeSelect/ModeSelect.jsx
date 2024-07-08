import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { useColorScheme } from "@mui/material/styles"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium"

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    setMode(event.target.value)
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel
        id="label-select-dark-light-mode"
        sx={{
          color: "white",
          "&.Mui-focused": { color: "white" },
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
            color: "white",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          " & .MuiBox-root": { color: "white" },
          "& .MuiSvgIcon-root": { color: "white" },
        }}
      >
        <MenuItem value="light">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LightModeIcon fontSize="small" /> Light
          </Box>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DarkModeIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <BrightnessMediumIcon fontSize="small" /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
