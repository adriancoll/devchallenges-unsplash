import { AppBar, Toolbar } from "@mui/material"

import myLogo from '../../assets/my_unsplash_logo.svg'

import { SearchImage } from "."

export const Navbar = () => {
  return (
    <AppBar color="transparent" sx={{ boxShadow: 'none'}}>
        <Toolbar>
            <img src={myLogo} alt="Unsplash logo" />
            <SearchImage />
        </Toolbar>
    </AppBar>
  )
}
