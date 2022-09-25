import { ChangeEvent, useEffect, useState } from 'react'

import { IconButton, Input } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'


export const SearchImage = () => {
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {}, [searchTerm])

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(ev.target.value)
  }

  const clearSearchTerm = () => setSearchTerm('')

  const handleSearch = () => console.log({ searchTerm })

  return (
    <Input
      value={searchTerm}
      placeholder='Search by name'
      onChange={handleChange}
      inputProps={{ 'aria-label': 'search image' }}
      startAdornment={
        <IconButton
          disabled={searchTerm.length === 0}
          onClick={clearSearchTerm}>
          <SearchIcon />
        </IconButton>
      }
      endAdornment={
        searchTerm &&
        searchTerm.length > 0 && (
          <IconButton onClick={clearSearchTerm}>
            <ClearIcon />
          </IconButton>
        )
      }
    />
  )
}
