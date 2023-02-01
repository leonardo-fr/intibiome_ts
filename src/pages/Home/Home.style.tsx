import { SxProps } from "@mui/system"
import iconsInfos from "./src/assets/images/small/icon_infos.png";
import iconsInfosWeb from "./src/assets/images/web/icon_infos.png";

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
        padding: { xs: "2.5rem 2rem", sm: "2.5rem 2rem", md: "2.5rem 2rem", lg: "5rem 2.5rem", xl: "5rem 2.5rem" }
    },
    iconsPromote: {
        backgroundImage: `url(${iconsInfosWeb})`
    }
})