import CompanyData from "components/project/CompanyData";
import React, { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button, Divider, Stack, Typography } from "@mui/material";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import useCustomDialog from "hooks/useCustomDialog";
import { setToastShow, setToastStatus } from "redux/toastSlice";
import { useAppDispatch } from "hooks/useRedux";
const ProjectDetail: FC = () => {
  const { confirm } = useCustomDialog();
  const dispatch = useAppDispatch();
  const onSubmit = useCallback(async () => {
    const isConfirmed = await confirm({
      title: "프로젝트에 지원하시겠습니까?",
      message:
        "지원 내역은 마이페이지에서 확인 가능하며, 관리자 승인 전까지는 취소할 수 있습니다.",
    });
    if (isConfirmed) {
      dispatch(setToastShow());
      return dispatch(
        setToastStatus({
          status: "success",
        })
      );
    }
  }, [confirm, dispatch]);
  return (
    <>
      <div id="contents" className="left">
        <Link to="/projects">돌아가기</Link>
      </div>
      <div id="meta">
        <CompanyData />
        <Divider />
        <Stack sx={{ p: 2 }}>
          <Button
            fullWidth
            startIcon={<AssistantPhotoIcon />}
            variant="contained"
            size="large"
            onClick={onSubmit}
          >
            <Typography variant="button">프로젝트 지원하기</Typography>
          </Button>
        </Stack>
      </div>
    </>
  );
};

export default ProjectDetail;
