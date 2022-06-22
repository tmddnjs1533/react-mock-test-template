import React, { FC, useCallback } from "react";
import { Typography, Grid, styled, Paper } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import { useSearchParams } from "react-router-dom";
const BigButtonLink = styled(ButtonBase)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  &:hover,
  &.Mui-focusVisible {
    .MuiPaper-root {
      box-shadow: ${({ theme }) => theme.shadows[10]};
    }
  }
`;
const BigButtonImage = styled(Paper)`
  width: 150px;
  height: 150px;
  border-radius: 15px;
`;
const BigButtonTitle = ({ text }: { text: string }) => (
  <Typography variant={"h4"}>{text}</Typography>
);
const BigButtonDesc = ({ text }: { text: string }) => (
  <Typography variant={"body1"}>{text}</Typography>
);
const list = [
  {
    title: "단체",
    description:
      "프로젝트를 의뢰하여 학습용 데이터를 구축하고 싶은 기업,연구소,대학교 등의 단체 이용자",
    type: "g",
  },
  {
    title: "일반",
    description: "수집, 가공, 품질 검수에 참여하고 싶은 일반 사용자",
    type: "p",
  },
];
const TypeSelect: FC = () => {
  let searchParamReturn = useSearchParams();
  const setSearchParams = searchParamReturn[1];
  const handleSignupType = useCallback(
    (tp: string): void => {
      setSearchParams({ tp });
    },
    [setSearchParams]
  );

  return (
    <>
      <Typography variant="h3">원하는 회원 유형을 선택하세요</Typography>
      <Grid container>
        {list.map((item) => (
          <BigButtonLink
            key={item.title}
            onClick={() => handleSignupType(item.type)}
          >
            <BigButtonImage elevation={6} />
            <BigButtonTitle text={item.title} />
            <BigButtonDesc text={item.description} />
          </BigButtonLink>
        ))}
      </Grid>
    </>
  );
};

export default TypeSelect;
