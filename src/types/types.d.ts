export interface IUser {
  id: string;
  name: string;
}
export interface IProjectData {
  /** 프로젝트 구분 */
  chip: string;
  /**
   * 프로젝트 이름
   */
  projectName: string;
  /**
   * 프로젝트 좋아요 수
   */
  like: number;
  /**
   * 프로젝트 조회수
   */
  view: number;
  /**
   * 프로젝트 설명
   */
  summary?: string;
  /**
   * 모집인원
   */
  recruitment: number;
  /**
   * 프로젝트 착수 일자
   */
  startDate?: string;
  /**
   * 모집 시작 일자
   */
  openDate?: string;
  /**
   * 모집 마감 일자
   */
  closeDate?: string;
  /**
   * 프로젝트 아이디
   */
  id: string;
}
