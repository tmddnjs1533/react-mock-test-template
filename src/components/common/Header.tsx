import React, { FC, useCallback } from "react";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";

const actions = [
  { icon: <FileCopyIcon />, name: "Main", url: "/" },
  { icon: <FileCopyIcon />, name: "Fixed", url: "/fixed" },
  { icon: <FileCopyIcon />, name: "Centered", url: "/center" },
];

const Header: FC = () => {
  let navigate = useNavigate();
  const handleActionClick = useCallback(
    (url: string) => {
      navigate(url);
    },
    [navigate]
  );
  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => handleActionClick(action.url)}
          />
        ))}
      </SpeedDial>
    </>
  );
};

export default Header;
