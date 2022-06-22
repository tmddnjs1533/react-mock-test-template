import onssAxios from "../utils/fetcher";
import { useQuery } from "react-query";
import { IUser } from "../types/types";

const getUserData = async () =>
  await onssAxios({
    method: "post",
    url: "/users",
  });

/** /users 로그인 유저 정보 조회 API 예제 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function useUser<TData = IUser>() {
  return useQuery("user", getUserData);
}
