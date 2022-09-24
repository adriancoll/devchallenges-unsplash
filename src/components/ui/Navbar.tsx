import { AppBar, Toolbar } from "@mui/material"
import myLogo from '../../assets/my_unsplash_logo.svg'

export const Navbar = () => {
  return (
    <AppBar color="transparent" sx={{ boxShadow: 'none'}}>
        <Toolbar>
            <img src={myLogo} alt="Unsplash logo" />
        </Toolbar>
    </AppBar>
  )
}
