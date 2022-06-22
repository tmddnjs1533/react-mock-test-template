import onssAxios from "../utils/fetcher";
import { useQuery } from "react-query";
import { IProjectData } from "../types/types";

const getProjectListData = async () =>
  await onssAxios.get<IProjectData[]>("/projectList?_limit=10");

/** /projectList json-server로 연 mock api 값 가져옴  */
export default function useProjectList() {
  return useQuery<IProjectData[], Error>("projectList", getProjectListData);
}
