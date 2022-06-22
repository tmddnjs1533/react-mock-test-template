import React, { FC } from "react";
import {
  Avatar,
  Box,
  CardHeader,
  Chip,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const AlignBox = styled(Box)`
  display: flex;
  align-items: center;

  ${({ spaceBetween }: { spaceBetween?: boolean }) =>
    spaceBetween && `justify-content: space-between;`};
`;

const StyledChip = styled(Chip)`
  border-radius: 3px;
`;
const prjCategory = [
  {
    categoryCode: "collect",
    categoryName: "수집",
  },
  {
    categoryCode: "process",
    categoryName: "가공",
  },
  {
    categoryCode: "quality",
    categoryName: "품질",
  },
];
const CompanyData: FC = () => {
  let companyCert = true;
  return (
    <div>
      {/*  profile*/}
      <div>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="ONSS">
              ONSS
            </Avatar>
          }
          title={
            <Typography variant="h6" sx={{ fontWeight: "700" }}>
              (주)상상할수없는
            </Typography>
          }
          subheader={
            companyCert ? (
              <AlignBox>
                <CheckCircleRoundedIcon color="primary" />
                <Typography variant="body2">인증완료</Typography>
              </AlignBox>
            ) : (
              <AlignBox>
                <CheckCircleRoundedIcon color="disabled" />
                <Typography variant="body2">인증되지 않음</Typography>
              </AlignBox>
            )
          }
        />
      </div>
      {/*  project count 1*/}
      <Box sx={{ px: "20px" }}>
        <AlignBox spaceBetween>
          <Typography variant="body1">프로젝트</Typography>
          <Typography variant="body1">5건</Typography>
        </AlignBox>
        <AlignBox spaceBetween>
          <Typography variant="body2">&#x02514; 진행중인 프로젝트</Typography>
          <Typography variant="body2">2건</Typography>
        </AlignBox>
        <AlignBox spaceBetween>
          <Typography variant="body2">&#x02514; 완료한 프로젝트</Typography>
          <Typography variant="body2">3건</Typography>
        </AlignBox>
      </Box>
      {/*  project count 2*/}
      <Stack
        direction="row"
        spacing={2}
        sx={{ p: 2 }}
        justifyContent="space-evenly"
      >
        {prjCategory.map((category) => (
          <StyledChip
            key={category.categoryCode}
            label={`${category.categoryName} 00 건`}
            variant="outlined"
            size="medium"
          />
        ))}
      </Stack>
    </div>
  );
};

export default CompanyData;
