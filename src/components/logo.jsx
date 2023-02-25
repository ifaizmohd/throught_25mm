import React from "react"
import { StyledLogoImage } from "./styles"
import image from "../images/yael-yanez-EAQle5m8Fu8-unsplash.png"

const Logo = () => (
  <div className="logo-container">
    <StyledLogoImage src={image}></StyledLogoImage>
    <h2>Through 25mm.</h2>
  </div>
)

export default Logo
