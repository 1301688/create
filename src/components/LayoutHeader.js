import React from "react"
import styled from "styled-components"
import ContentWrapper from "./ContentWrapper"
import { Link } from "gatsby"
import svgNew from "../../static/newTag.svg"

const HeaderTag = styled.header`
  width: 100%;
  padding: 16px 0;
  background: ${props => props.theme.colors.header};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); // Header 3D adjustment
`

const HeaderInner = styled.div`
  color: ${props => props.theme.colors.font};
  position: relative;
  h1,
  h3 {
    width: 100%;
  }
  .logo {
    display: block;
    width: 165px;
    height: 37px;
    @media screen and (max-width: ${props => props.theme.responsive.small}) {
      margin: 0 auto;
    }
  }
  .logo-link {
    display: block;
  }
`
// For Top, HeaderLogo is h1, for articles, h3
const Header = ({ title, location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const logoLink = (
    <Link to={`/`} className="logo-link">
      <img className="logo" src={svgNew} alt={title} />
    </Link>
  )

  let headerLogo
  if (location.pathname === rootPath) {
    headerLogo = <h1>{logoLink}</h1>
  } else {
    headerLogo = <h3>{logoLink}</h3>
  }

  return (
    <HeaderTag>
      <ContentWrapper>
        <HeaderInner>{headerLogo}SiteTitle(No link is set)</HeaderInner>
      </ContentWrapper>
    </HeaderTag>
  )
}

export default Header
