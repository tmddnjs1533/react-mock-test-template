import React, { FC } from "react";
import { Grid } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import TypeSelect from "./typeSelect";
import GroupForm from "./group";
import PersonalForm from "./personal";
import SocialForm from "./social";

const Signup: FC = () => {
  let [searchParams] = useSearchParams();
  let type = searchParams.get("tp");
  return (
    <>
      {type === "g" ? (
        <GroupForm />
      ) : type === "p" ? (
        <PersonalForm />
      ) : type === "s" ? (
        <SocialForm />
      ) : (
        <TypeSelect />
      )}
    </>
  );
};

export default Signup;
