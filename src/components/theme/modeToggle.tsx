import React, { useContext } from "react";
import { themeContext } from ".";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { makeStyles} from "@mui/styles";
import { Theme } from '@mui/material/styles';
import clsx from "clsx";
const useStyles = makeStyles(() => ({
    button: {
        overflow: "hidden",
        all: "unset",
        display: "flex",
        borderRadius: 50,
        borderStyle: "solid",
        cursor: "pointer",
    },
    icon: {
        transform: `translateY(-100%)`,
        transition: `transform 500ms`,
        padding: 3,
    },
    visibleIcon: {
        transform: `translateY(0)`,
    },
}));

const ThemeToggleButton: React.FC = () => {
    const classes = useStyles();
    const themeCtx = useContext(themeContext);
    return (
        <button className={classes.button} onClick={themeCtx.toggleMode}>
            <WbSunnyIcon
                fontSize="small"
                color="inherit"
                className={clsx(
                    classes.icon,
                    themeCtx.mode === "light" && classes.visibleIcon
                )}
            />
            <Brightness2Icon
                fontSize="small"
                color="inherit"
                className={clsx(
                    classes.icon,
                    themeCtx.mode === "dark" && classes.visibleIcon
                )}
            />
        </button>
    );
};
export default ThemeToggleButton;
