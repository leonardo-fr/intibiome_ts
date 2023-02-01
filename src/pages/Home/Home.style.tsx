import { SxProps } from "@mui/system"
import iconsInfos from "src/assets/images/small/icon_infos.png";
import iconsInfosWeb  from "src/assets/images/web/icon_infos.png";

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
    },
    titles: {
        padding: { xs: "2.5rem 2rem",  lg: "5rem 20rem 0 20rem" }
    },
    cocreated: {
        padding: {xs: "none", lg: "2.5rem 20rem 0 20rem"}
    },
    help: {
        padding: {xs: "none", lg: "2.5rem 26rem 0 26rem"}
    },
    iconsPromote: {
        width: { xs: "100vw", sm: "24.5rem", lg: "70rem" },
        height: { xs: "7.56rem", lg: "16.18rem" },
        margin: "0 auto",
        justifyContent: "center",
        display: "block",
        background: {
            xs: `url(${iconsInfos}) no-repeat`,
            md: `url(${iconsInfos}) no-repeat`,
            lg: `url(${iconsInfosWeb})`,
            xl: `url(${iconsInfosWeb})`
        }
    },
})