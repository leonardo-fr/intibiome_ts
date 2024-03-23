import { SxProps } from "@mui/system"

type StyleProps<T, K extends PropertyKey> = { [P in K]: T }
const makeSxStyles = <K extends PropertyKey>(props: StyleProps<SxProps, K>) => props

const mobileRender = { xs: "block", sm: "block", md: "block", lg: "none", xl: "none" } 
const webRender = { xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" } 

export const sxStyles = makeSxStyles({
  appBar: {
    background: "white",
    height: { xs: "4.37rem", sm: "4.37rem", md: "4.37rem", lg: "5rem", xl: "5rem" },
    width: "100%",
  },
  menuIcon: {
    display: mobileRender
  },
  toolbar: {
    margin: "auto 0",
    justifyContent: "space-around"
  },
  searchIcon: {
    justifyContent: { xs: "end", sm: "end", md: "end", lg: "start", xl: "start"},
  },
  inputSearch: {
    background: "white",
    borderRadius: "0.5rem",
    border: "1px solid grey",
    marginTop: "1rem",
    width: "40vw",
  },
  slideMenu: {
    width: "100%",
    display: mobileRender,
    background: "#389CD6",
    height: "53rem"
  },
  appBarMenu: {
    width: "100%",
    height: "3.12rem",
    display: webRender,
    background: "#389CD6",
    justifyContent: "center",
    gap: "4rem"
  },
  fadeSearch: {
    width: "100vw",
    background: {
      xs: "rgba(56, 156, 214)",
      md: "rgba(56, 156, 214, 0.8)"
    },
    height: "38rem",
    gap: "1rem",
    overflow: "hidden",
  },
  navBarItem: {
    margin: "auto 0",
    display: "flex",
    color: "white",
    gap: "0.1rem"
  },
  listItem: {
    padding: "2.875rem 0 0 2rem"
  }
})