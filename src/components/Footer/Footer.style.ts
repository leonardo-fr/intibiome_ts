import { SxProps } from "@mui/system"

type StyleProps<T, K extends PropertyKey> = { [P in K]: T }
const makeSxStyles = <K extends PropertyKey>(props: StyleProps<SxProps, K>) => props

export const sxStyles = makeSxStyles({
    footer: {
        width: "100%",
        height: { xs: "100%", sm: "100%", md: "100%", lg: "0", xl: "0" },
        backgroundColor: "#389CD6",
        display: { xs: "block", sm: "block", md: "block", lg: "flex", xl: "flex" },
        flex: "wrap",
        gap: "2rem",
        alignItems: "center",
        justifyContent: "center"
    },
    divider: {
        opacity: "1",
        border: "2px #FFFFFF solid",
        width: { xs: "1.5rem", sm: "1.5rem", md: "1.5rem", lg: "0", xl: "0" },
        height: { xs: "0", sm: "0", md: "0", lg: "1.5rem", xl: "1.5rem" },
        margin: { xs: "2rem auto 2rem auto",lg: "0", xl: "0" },
        marginTop: "29px",
        gap: "2rem 2rem",
        marginBottom: "31px",
    },
    iconsFooter: {
        display: { xs: "block", sm: "block", md: "block", lg: "flex", xl: "flex" },
        alignItems: "center",
        gap: { xs: "none", sm: "none", md: "none", lg: "30rem", xl: "15rem" },
        justifyContent: { xs: "center", sm: "center", md: "center", lg: "space-around", xl: "space-around" }
    },
    iconsFooterMobile: {
        display: { xs: "block", sm: "block", md: "block", lg: "none", xl: "none" }
    },
    iconsFooterWeb: {
        display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" }
    }
})