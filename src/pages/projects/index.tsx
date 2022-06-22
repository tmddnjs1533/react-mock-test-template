import React, { FC } from "react";
import { Box, Typography, styled } from "@mui/material";

import { Outlet } from "react-router-dom";

const Banner = styled(Box)`
  background: #ededee;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderGrey.main};
`;

const Container = styled(Box)`
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  min-height: calc(100vh - 213px);
  display: flex;
  #filter {
    width: 300px;

    box-sizing: border-box;
    border-left: 1px solid ${({ theme }) => theme.palette.borderGrey.main};
    border-right: 1px solid ${({ theme }) => theme.palette.borderGrey.main};
  }

  #contents {
    width: 900px;

    box-sizing: border-box;
    padding: 0 25px;
    border-right: 1px solid ${({ theme }) => theme.palette.borderGrey.main};

    &.left {
      border-left: 1px solid ${({ theme }) => theme.palette.borderGrey.main};
    }
  }

  #meta {
    width: 300px;

    border-right: 1px solid ${({ theme }) => theme.palette.borderGrey.main};
  }
`;

const Projects: FC = () => {
  return (
    <>
      <Banner>
        <Typography variant="h3">배너</Typography>
      </Banner>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Projects;
