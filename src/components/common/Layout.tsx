import React, { useState, MouseEvent, useCallback } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Link as MuiLink,
  styled,
} from "@mui/material";

import AdbIcon from "@mui/icons-material/Adb";
import { Link, Outlet, To, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/useRedux";
import { userState } from "../../redux/store";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const pages: { name: string; to: To }[] = [
  {
    name: "서비스 소개",
    to: "/intro",
  },
  {
    name: "프로젝트 찾기",
    to: "/projects",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const HeaderTop = styled(Toolbar)`
  height: 57px;
  border-bottom: 1px solid #f5f5f6;
`;
const HeaderBottom = styled(Toolbar)`
  height: 49px;
`;

const Spin = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0 7px;
`;

const TextCarousel = styled(Box)`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 500px;
`;

const GetToFree = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`;

const Layout = () => {
  const user = useAppSelector(userState);
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  }, []);

  const handleNavigation = useCallback(
    (to: To) => {
      navigate(to);
    },
    [navigate]
  );

  const handleCloseUserMenu = useCallback(() => {
    setAnchorElUser(null);
  }, []);

  return (
    <>
      <AppBar position="static" color="transparent" elevation={2}>
        <Container
          sx={{
            maxWidth: 1200,
            p: 0,
          }}
        >
          <HeaderTop disableGutters>
            <AdbIcon sx={{ display: "flex", mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              K-Annotation
            </Typography>

            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleNavigation(page.to)}
                  sx={{ my: 2, color: "inherit", display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: !user.email ? "flex" : "block" }}>
              {!user.email ? (
                <>
                  <Button
                    component={Link}
                    to="/auth/login"
                    sx={{ my: 2, color: "inherit", display: "block" }}
                  >
                    로그인
                  </Button>
                  <Button
                    component={Link}
                    to="/auth/sign-up"
                    sx={{ my: 2, color: "inherit", display: "block" }}
                  >
                    회원가입
                  </Button>
                </>
              ) : (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )}
            </Box>
          </HeaderTop>
          <HeaderBottom disableGutters>
            <Button variant="outlined" sx={{ m: 0 }}>
              <Typography textAlign="center" variant="button">
                공지사항
              </Typography>
            </Button>
            <Spin>
              <IconButton sx={{ p: 0, m: 0 }}>
                <ArrowDropUpIcon />
              </IconButton>
              <IconButton sx={{ p: 0, m: 0 }}>
                <ArrowDropDownIcon />
              </IconButton>
            </Spin>
            <TextCarousel>
              <Typography variant="body2" noWrap>
                안녕하세요. 키스톤 어노테이션플랫폼이 오픈하였습니다. 새롭게
                단장한 키스톤
              </Typography>
              <Typography variant="caption" sx={{ flexShrink: 0 }}>
                5시간 전
              </Typography>
            </TextCarousel>

            <GetToFree>
              <Typography variant="body2" sx={{ mr: 1 }}>
                프로젝트를 직접 의뢰하고 싶으신가요?
              </Typography>
              <Button variant="contained">
                <Typography textAlign="center" variant="button">
                  프로젝트 문의하기
                </Typography>
              </Button>
            </GetToFree>
          </HeaderBottom>
        </Container>
      </AppBar>
      <Outlet />
      <Copyright sx={{ mt: 5 }} />
    </>
  );
};
export default Layout;
function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <MuiLink component={Link} color="inherit" to="/">
        Your Website
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
