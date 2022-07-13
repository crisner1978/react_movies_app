import React from 'react'
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress} from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/styles'
import useStyles from './styles'


const Sidebar = ({ setMobileOpen }) => {
  const classes = useStyles()
  const theme = useTheme()

  const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';

const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

  return (
    <>
      <Link to='/' className={classes.imageLink}>
        <img src={theme.palette.mode === 'light' ? redLogo : blueLogo} className='classes.image' alt="Logo" />
      </Link>
    </>
  )
}

export default Sidebar