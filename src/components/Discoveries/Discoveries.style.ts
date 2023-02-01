import { SxProps } from "@mui/system"

type StyleProps<T, K extends PropertyKey> = { [P in K]: T }
const makeSxStyles = <K extends PropertyKey>(props: StyleProps<SxProps, K>) => props

export const sxStyles = makeSxStyles({
    carousel: {
        display: "flex",
        backgroundColor: "#f9f9f9",
        overflow: { xs: "scroll", sm: "scroll", md: "scroll", lg: "none", xl: "none" },
        background: "#fefefe",
        width: "100%",
        padding: "1rem",
        gap: { xs: "0.9rem", sm: "0.9rem", md: "0.9rem", lg: "2rem", xl: "2rem" },
        justifyContent: { xs: "none", sm: "none", md: "none", lg: "center", xl: "center" }
    },
    dicoveriesOne: {
        padding: "1.5rem",
        width: "18.25rem"
    },
    paper: {
        borderRadius: "1rem"
    },
    discoveries: {
        padding: { xs: "2.5rem 2.5rem", sm: "2.5rem 2.5rem", md: "2.5rem 2.5rem", lg: "7.5rem 5rem", xl: "7.5rem 5rem" }
    }
})