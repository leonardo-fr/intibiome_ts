import { SxProps } from "@mui/system"

type StyleProps<T, K extends PropertyKey> = { [P in K]: T }
const makeSxStyles = <K extends PropertyKey>(props: StyleProps<SxProps, K>) => props

export const sxStyles = makeSxStyles({
    home: {
        "& ::-webkit-scrollbar": { display: "none" },
        "* -ms-overflow-style": "none",
        textAlign: "center",
    },
    buttonSeeMore: {
        background: "#389CD6",
        width: "24.5rem",
        height: "4rem",
        borderRadius: "0.625rem",
        margin: "2.5rem auto 5rem auto",
        display: "block",
        textAlign: "center",
        lineHeight: "4"
    },
    bannerMobile: {
        width: "100%",
        display: { xs: "block", sm: "block", md: "block", lg: "none", xl: "none" }
    },
    bannerWeb: {
        width: "100%",
        display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" } 
    }
})