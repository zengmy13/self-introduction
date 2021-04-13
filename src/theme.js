import {createMuiTheme} from '@material-ui/core/styles';


export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#4caf50"
        },
        secondary: {
            main: "#81c784"
        }
    },
    typography: {
        h1: {
            fontWeight: 400,
            fontSize: "1.8rem"
        },
        h2: {
            fontWeight: 400,
            fontSize: "1.5rem"
        },
        h3: {
            fontWeight: 400,
            fontSize: "1.3rem"
        },
        h4: {
            fontWeight: 400,
            fontSize: "1rem"
        },
        body1: {
            fontWeight: 250,
            fontSize: "1rem"
        },
        body2: {
            color: "darkgray",
            fontWeight: 250,
            fontSize: "1rem"
        },
        body3: {
            fontSize: "0.8rem",
            fontWeight: 250,
        }
    },
    overrides: {
        MuiSvgIcon: {
            root: {
                fontSize: "1.5rem"
            }
        },
        MuiTab: {
            root: {
                minWidth: "160px",
                fontSize: "0.7rem",
                flex: 1,
                padding: "6px 12px"
            },
            wrapper: {
                paddingTop: "15px",
                paddingBottom: "-15px"
            }
        },
        MuiTabs: {
            flexContainerVertical: {
                height: "100%",
            }
        },
        MuiAvatar: {
            root: {
                marginRight: "15px"
            }
        }
    },
});