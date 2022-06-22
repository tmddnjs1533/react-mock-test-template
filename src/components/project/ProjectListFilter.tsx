import React, { FC } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  List,
  ListItem,
  ListSubheader,
  Typography,
  styled,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
interface IProjectFilterCondition {
  prjCategory: string[];
}
const schema = yup.object({
  prjCategory: yup.array(yup.string()),
});

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
const wrkCategory = [
  "이미지 작업",
  "3D 작업",
  "음성 작업",
  "영상 작업",
  "텍스트 작업",
];
const wrkMethod = [
  "BoundingBox",
  "Polyline",
  "Polygon",
  "Keypoint",
  "Cuboid",
  "Body",
  "Face",
  "Hands",
];
const indCategory = [
  "가공",
  "건축 및 자재",
  "관광 및 레저",
  "광업",
  "교육",
  "농업, 사료 및 식품",
  "자동차 및 항공",
  "의료",
  "제조",
  "화재, 안전 및 보안",
];

const StyledList = styled(List)`
  width: 100%;
  padding-top: 10px;
`;
const StyledListItem = styled(ListItem)`
  padding: 0;
`;
const StyledAccordion = styled(Accordion)`
  width: 100%;
`;
const StyledAccordionSummary = styled(AccordionSummary)`
  .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
    transform: rotate(90deg);
  }
`;
const StyledAccordionDetails = styled(AccordionDetails)`
  background-color: #ededee;
`;

const ProjectListFilter: FC = () => {
  const { control } = useForm<IProjectFilterCondition>({
    resolver: yupResolver(schema),
    defaultValues: {
      prjCategory: [],
    },
  });
  return (
    <div id="filter">
      {/*프로젝트 구분*/}
      <StyledList
        subheader={
          <ListSubheader id="project-category">
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              프로젝트 구분
            </Typography>
          </ListSubheader>
        }
      >
        <ListItem>
          <Controller
            name="prjCategory"
            control={control}
            render={({ field }) => (
              <FormGroup aria-label="prjCategory" row>
                {prjCategory.map((item) => (
                  <FormControlLabel
                    {...field}
                    key={item.categoryCode}
                    label={item.categoryName}
                    labelPlacement="end"
                    control={
                      <Checkbox
                        onChange={() => {
                          if (!field.value.includes(item.categoryCode)) {
                            field.onChange([...field.value, item.categoryCode]);
                            return;
                          }
                          const newCategory = field.value.filter(
                            (category) => category !== item.categoryCode
                          );
                          field.onChange(newCategory);
                        }}
                      />
                    }
                  />
                ))}
              </FormGroup>
            )}
          />
        </ListItem>
      </StyledList>
      <Divider />
      {/*작업 구분*/}
      <StyledList
        subheader={
          <ListSubheader component="div" id="work-category">
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              작업 구분
            </Typography>
          </ListSubheader>
        }
      >
        {wrkCategory.map((item) => (
          <StyledListItem key={item}>
            <StyledAccordion disableGutters square elevation={0}>
              <StyledAccordionSummary
                expandIcon={<ChevronRightIcon />}
                aria-controls={item}
                id={item}
              >
                <Typography>{item}</Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <FormGroup aria-label="wrkMethod">
                  {wrkMethod.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Checkbox />}
                      label={item}
                      labelPlacement="end"
                    />
                  ))}
                </FormGroup>
              </StyledAccordionDetails>
            </StyledAccordion>
          </StyledListItem>
        ))}
      </StyledList>
      <Divider />
      {/*산업 구분*/}
      <StyledList
        subheader={
          <ListSubheader component="div" id="industry-category">
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              산업 구분
            </Typography>
          </ListSubheader>
        }
      >
        {indCategory.map((item) => (
          <StyledListItem key={item}>
            <StyledAccordion disableGutters square elevation={0}>
              <StyledAccordionSummary
                expandIcon={<ChevronRightIcon />}
                aria-controls={item}
                id={item}
              >
                <Typography>{item}</Typography>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <FormGroup aria-label="wrkMethod">
                  {wrkMethod.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Checkbox />}
                      label={item}
                      labelPlacement="end"
                    />
                  ))}
                </FormGroup>
              </StyledAccordionDetails>
            </StyledAccordion>
          </StyledListItem>
        ))}
      </StyledList>{" "}
      <Divider />
    </div>
  );
};

export default ProjectListFilter;
