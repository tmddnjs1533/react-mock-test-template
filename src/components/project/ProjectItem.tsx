import React, { FC, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  Chip,
  Typography,
  styled,
  Theme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { pink } from "@mui/material/colors";
import MuiToggleButton from "@mui/material/ToggleButton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { IProjectData } from "types/types";
const Container = styled(Card)`
  margin-bottom: 30px;
  padding: 15px 20px;
`;

const FlexBox = styled(Box)`
  & > * {
    margin-right: ${({ theme, flexGap }: { theme?: Theme; flexGap?: number }) =>
      flexGap && theme && theme.spacing(flexGap)};
    &:last-child {
      margin-right: 0;
    }
  }
`;

const CardContent = styled(Box)`
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
`;
const StyledToggleButton = styled(MuiToggleButton)`
  border: 0;
  padding-top: 0;
  padding-bottom: 0;
  &.Mui-selected {
    color: ${pink[300]};
    background: transparent;
  }
  &:hover {
    color: ${pink[300]};
    background: ${pink[50]};
  }
`;

interface ProjectItemProps {
  itemData: IProjectData;
}

const StyledChip = styled(Chip)`
  border-color: ${({ chipcolor }: { chipcolor?: string }) => chipcolor};
  color: ${({ chipcolor }: { chipcolor?: string }) => chipcolor};
`;

const ProjectItem: FC<ProjectItemProps> = ({ itemData }) => {
  const [selected, setSelected] = useState(false);
  const {
    chip,
    projectName,
    like,
    view,
    summary,
    recruitment,
    startDate,
    closeDate,
    id,
  } = itemData;
  return (
    <Container>
      {/* Grid 로 한거*/}
      {/*<Grid container justifyContent="space-between" flexWrap="nowrap">
        <Grid container item alignItems="center">
          <StyledChip
            label={chip}
            variant="outlined"
            size="small"
            chipcolor={chip}
          />
          <Typography variant="body1">(주)상상할수없는</Typography>
        </Grid>
        <Grid container item justifyContent="flex-end">
          <StyledToggleButton
            value="check"
            selected={selected}
            disableRipple
            onChange={() => {
              setSelected(!selected);
            }}
          >
            {selected ? (
              <FavoriteOutlinedIcon />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
            <Typography>{like}</Typography>
          </StyledToggleButton>
          <Typography>조회수 {view}</Typography>
        </Grid>
      </Grid>*/}
      <FlexBox flexGap={2} display="flex">
        <StyledChip
          label={chip}
          variant="outlined"
          size="small"
          chipcolor={chip}
        />
        <Typography variant="body1">(주)상상할수없는</Typography>
        <StyledToggleButton
          value="check"
          selected={selected}
          disableRipple
          onChange={() => {
            setSelected(!selected);
          }}
        >
          {selected ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
          <Typography>{like}</Typography>
        </StyledToggleButton>
        <Typography>조회수 {view}</Typography>
      </FlexBox>
      <CardContent>
        <Box>
          <Typography variant="h5">{projectName}</Typography>
          <Typography variant="subtitle1">{summary || "설명 없음"}</Typography>
        </Box>
        <Typography>모집인원 {recruitment}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>오픈일 {startDate}</Typography>
          <Typography>마감일 {closeDate}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography>00일 후 모집이 종료됩니다.</Typography>
          <Button component={Link} to={`/projects/${id}`} variant="outlined">
            <Typography textAlign="center" variant="button">
              모집공고 확인하기
            </Typography>
          </Button>
        </Box>
      </CardActions>
    </Container>
  );
};

export default ProjectItem;
