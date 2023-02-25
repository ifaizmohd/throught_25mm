import styled from "styled-components"
import { Link } from "gatsby"

export const StyledTags = styled.div`
  display: flex;
  border-radius: 5px;
  color: black;
  padding: 2px 5px;
  border: 2px solid #1da1f2;
`

export const StyledHeading = styled.h2`
  margin: 0;
  color: black;
`

export const StyledDate = styled.span`
  color: gray;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const StyledIntro = styled.p`
  color: black;
  text-align: left;
`

export const Row = styled.div`
  display: flex;
  gap: 5px;
`

export const StyledLogoImage = styled.image`
  display: flex;
`
