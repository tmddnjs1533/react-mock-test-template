describe("로그인 테스트", () => {
  const domain = Cypress.env("domain");
  const apiBaseUrl = Cypress.env("apiBaseUrl");
  beforeEach(() => {
    cy.visit(`${domain}auth/login`); // 페이지 접속
  });

  it("입력 영역을 모두 입력하지 않으면 오류", () => {
    cy.get("form").submit();
    cy.contains("필수 입력 영역입니다");
  });

  it("로그인 시 아이디 비밀번호 오류로 실패", () => {
    cy.intercept("POST", `${apiBaseUrl}/user-service/login`, {
      statusCode: 200,
      body: {
        data: {
          errs: "이메일과 비밀번호를 확인해 주세요",
        },
        failureCnt: 1,
        status: 401,
      },
    }).as("requestLoginError");
    cy.get("input[name=id]").type("errortest");
    cy.get("input[name=password]").type("1234{enter}");
    cy.contains("이메일과 비밀번호를 확인해 주세요");
  });

  it("미인증 계정 로그인", () => {
    cy.intercept("POST", `${apiBaseUrl}/user-service/login`, {
      statusCode: 200,
      body: {
        errs: "아직 인증처리가 완료되지 않았습니다.",
        userId: "22-05-26-ui-808ec8a2-42cd-4caf-b4fd-7f24507e3826",
        email: "userTest@onss.co.kr",
        status: 401,
      },
    }).as("notAuthoredUserLogin");
    cy.get("input[name=id]").type("naUser");
    cy.get("input[name=password]").type("1234{enter}");
    cy.url().should("include", "/auth/not-authored");
  });
  it("잠금 계정 로그인", () => {
    cy.intercept("POST", `${apiBaseUrl}/user-service/login`, {
      statusCode: 200,
      body: {
        errs: "계정이 잠금처리 되었습니다.",
        email: "sw91@onss.co.kr",
        status: 423,
      },
    }).as("lockedUserLogin");
    cy.get("input[name=id]").type("lockUser");
    cy.get("input[name=password]").type("1234{enter}");
    cy.url().should("include", "/auth/locked");
  });
  it("1년 미접속 휴면 계정 로그인", () => {
    cy.intercept("POST", `${apiBaseUrl}/user-service/login`, {
      statusCode: 200,
      body: {
        errs: "1년간 접속하지 않아 휴면계정으로 전환되었습니다.",
        userId: "22-05-26-ui-808ec8a2-42cd-4caf-b4fd-7f24507e3826",
        email: "sw91@onss.co.kr",
        status: 410,
      },
    }).as("sleeperUserLogin");
    cy.get("input[name=id]").type("test");
    cy.get("input[name=password]").type("1234{enter}");
    cy.url().should("include", "/auth/sleeped");
  });
  it("미승인 계정 로그인", () => {
    cy.intercept("POST", `${apiBaseUrl}/user-service/login`, {
      statusCode: 200,
      body: {
        errs: "아직 승인되지 않은 계정 입니다.",
        email: "sw91@onss.co.kr",
        status: 403,
      },
    }).as("notAllowedUserLogin");
    cy.get("input[name=id]").type("test");
    cy.get("input[name=password]").type("1234{enter}");
    cy.url().should("include", "/auth/not-allowed");
  });
});
