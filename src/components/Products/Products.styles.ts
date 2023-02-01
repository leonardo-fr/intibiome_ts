import { SxProps } from "@mui/system"

type StyleProps<T, K extends PropertyKey> = { [P in K]: T }
const makeSxStyles = <K extends PropertyKey>(props: StyleProps<SxProps, K>) => props

export const sxStyles = makeSxStyles({
    products: {
        display: "flex",
        backgroundColor: "#f9f9f9",
        overflow: { xs: "scroll", sm: "scroll", md: "scroll", lg: "none", xl: "none" },
        background: "#fefefe",
        padding: "20px",
        gap: { xs: "0.9rem", sm: "0.9rem", md: "0.9rem", lg: "2rem", xl: "2rem" },
        justifyContent: { xs: "none", sm: "none", md: "none", lg: "center", xl: "center" },
        width: "100%",
    },
    ourProducts: {
        padding: { xs: "5rem 2.5rem", sm: "5rem 2.5rem", md: "5rem 2.5rem", lg: "7.5rem 5rem", xl: "7.5rem 5rem" },
    },
    productWellnes: {
        backgroundColor: "#389CD6",
        height: "73px",
        borderRadius: "0 0 1rem 1rem",
    },
    productActive: {
        backgroundColor: "#309D5F",
        height: "4.56rem",
        borderRadius: "0 0 1rem 1rem",
    },
    productAgecare: {
        backgroundColor: "#EE6381",
        height: "4.56rem",
        borderRadius: "0 0 1rem 1rem",
    },
    cardProducts: {
        width: "22.25rem",
        height: "21.94rem"
    },
    legends: {
        padding: "24px",
        width: "18rem"
    },
    paper: {
        borderRadius: "1rem"
    }
})