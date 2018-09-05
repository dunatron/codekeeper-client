import React from "react"
import { withStyles } from "@material-ui//core/styles"
import MenuItem from "@material-ui/core/MenuItem/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import FormHelperText from "@material-ui/core/FormHelperText"
import Select from "@material-ui/core/Select/Select"

/**
 *
 * important Note for Heath: as sadly you are who will awake for the next 13 days.
 * Comms are key: embed that!
 * material is having problems with modal. noobs refactoring without testing.
 * every modules hsould have ts
 * there needs to be a way of checking each on its own and to see if it can logically solve itself,
 *
 */
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
    textAlign: "left",
    width: "100%",
    boxSizing: "border-box",
  },
  formContainer: {
    padding: `${theme.spacing.unit * 4}px 0`,
    height: theme.spacing.unit * 6,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  formControl: {
    minWidth: "180px",
  },
  button: {
    borderRadius: 0,
  },
  codeEditor: {
    display: "flex",
    //width: `calc(100% - 241px)`,
    height: `calc(100vh - ${theme.spacing.unit * 28 + 4}px )`,
    margin: `0 -${theme.spacing.unit * 4}px`,
  },
  editorField: {
    //flex: '1 1 0'
    overflowX: "auto",
    flexBasis: 0,
    flexGrow: 1,
  },
})

const SelectOption = ({
  classes,
  value,
  options,
  label,
  selectID,
  handleChange,
}) => {
  {
    console.log("OUR OPTIONS ", options)
  }
  return (
    <FormControl className={classes.formControl}>
      <Select
        value={value}
        onChange={this.handleChange}
        displayEmpty
        name="age"
        className={classes.selectEmpty}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((d, i) => {
          return (
            <MenuItem key={i} value={d.value}>
              {d.name}
            </MenuItem>
          )
        })}
      </Select>
      <FormHelperText>Without label</FormHelperText>
    </FormControl>
  )
}

export default withStyles(styles)(SelectOption)
