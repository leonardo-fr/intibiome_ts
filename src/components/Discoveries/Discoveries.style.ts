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
        padding: "1.25rem",
        gap: { xs: "0.9rem", sm: "0.9rem", md: "0.9rem", lg: "2rem", xl: "2rem" },
        justifyContent: { xs: "none", sm: "none", md: "none", lg: "center", xl: "center" }
    },
})