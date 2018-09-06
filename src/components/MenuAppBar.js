import React from "react"
import PropTypes from "prop-types"
import { AUTH_TOKEN } from "../constants"
import { withRouter } from "react-router"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import AccountCircle from "@material-ui/icons/AccountCircle"
import Switch from "@material-ui/core/Switch"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import { compose } from "react-apollo/index"

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  }

  handlePageChange = url => {
    this.handleClose()
    this.props.history.push(url)
  }

  handleChange = event => {
    this.setState({ auth: event.target.checked })
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    const { classes } = this.props
    const { auth, anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={auth}
                onChange={this.handleChange}
                aria-label="LoginSwitch"
              />
            }
            label={auth ? "Logout" : "Login"}
          />
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}>
              Photos
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? "menu-appbar" : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={this.handleClose}>
                  <MenuItem onClick={() => this.handlePageChange("/search")}>
                    Search
                  </MenuItem>

                  <MenuItem onClick={() => this.handlePageChange("/table")}>
                    Search
                  </MenuItem>

                  <MenuItem onClick={() => this.handlePageChange("/top")}>
                    Top
                  </MenuItem>

                  <MenuItem onClick={() => this.handlePageChange("/")}>
                    New
                  </MenuItem>

                  {authToken && (
                    <MenuItem onClick={() => this.handlePageChange("/create")}>
                      Create
                    </MenuItem>
                  )}

                  <MenuItem onClick={this.handleClose}>My account</MenuItem>

                  {authToken ? (
                    <MenuItem
                      onClick={() => {
                        localStorage.removeItem(AUTH_TOKEN)
                        this.props.history.push(`/`)
                      }}>
                      Logout
                    </MenuItem>
                  ) : (
                    <MenuItem onClick={() => this.handlePageChange("/login")}>
                      Login
                    </MenuItem>
                  )}
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

// export default MenuAppBar

export default withRouter(compose(withStyles(styles))(MenuAppBar))
