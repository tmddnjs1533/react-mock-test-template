import React, { FC, useState, MouseEvent } from "react";
import {
  Box,
  Button,
  FormControl,
  InputBase,
  MenuItem,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  styled,
  CircularProgress,
} from "@mui/material";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import CheckIcon from "@mui/icons-material/Check";
import ProjectItem from "components/project/ProjectItem";
import ProjectListFilter from "components/project/ProjectListFilter";
import useProjectList from "hooks/useUser";
const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  & .MuiToggleButtonGroup-grouped {
    border: 0;
  }
  .Mui-selected {
    background: transparent;
  }
`;
const ProjectList: FC = () => {
  const [age, setAge] = useState("title");
  const [alignment, setAlignment] = useState("등록순");
  const { isLoading, data: projectList } = useProjectList();

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const handleSortChange = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <ProjectListFilter />
      <div id="contents">
        {/*검색바*/}
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            m: "25px 0",
          }}
        >
          <FormControl sx={{ width: 120 }}>
            <Select id="searchCondition" value={age} onChange={handleChange}>
              <MenuItem value="title">프로젝트 명</MenuItem>
              <MenuItem value="contents">작업 내용</MenuItem>
              <MenuItem value="company">단체명</MenuItem>
            </Select>
          </FormControl>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="프로젝트 검색"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <Button
            type="submit"
            sx={{ p: "10px" }}
            variant="contained"
            aria-label="search"
          >
            <Typography variant="button">찾기</Typography>
          </Button>
        </Paper>
        {/*result sort*/}
        <Box sx={{ display: "flex" }}>
          <Typography>23건의 프로젝트를 찾았습니다</Typography>
          <StyledToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleSortChange}
          >
            <ToggleButton value="등록순">
              <CheckIcon />
              최신 등록 순
            </ToggleButton>
            <ToggleButton value="조회수순">
              <CheckIcon />
              조회수 높은 순
            </ToggleButton>
            <ToggleButton value="즐겨찾기순">
              <CheckIcon />
              즐겨찾기 높은 순
            </ToggleButton>
            <ToggleButton value="인기순">
              <CheckIcon />
              지원자 많은 순
            </ToggleButton>
          </StyledToggleButtonGroup>
        </Box>
        {!isLoading ? (
          projectList?.map((item) => (
            <ProjectItem key={item.id} itemData={item} />
          ))
        ) : (
          <CircularProgress />
        )}
      </div>
    </>
  );
};

export default ProjectList;
