import styled from "styled-components"
import Wrapper from "./wrapper"
import backgroundimg from "../images/jumboheader.jpg"

export const Jumbo = styled(Wrapper)`
  height: 85vh;

  background: url(${backgroundimg});
  background-color: rgba(0, 0, 0, 0.75);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
`
