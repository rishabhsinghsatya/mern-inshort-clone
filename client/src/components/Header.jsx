import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { Menu } from "@mui/icons-material";

const StyledApp = styled(AppBar)`
  background: #fff;
  height: 70px;
`;
const MenuIcon = styled(Menu)`
  color: #000;
`;

// style for "tag"
const Image = styled("img")({
  height: 55,
  margin: "auto",
  paddingRight: 70,
});

const Header = () => {
  const url =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";
  return (
    <StyledApp position="static">
      <Toolbar>
        <MenuIcon />
        <Image src={url} alt="logo" />
      </Toolbar>
    </StyledApp>
  );
};

export default Header;
