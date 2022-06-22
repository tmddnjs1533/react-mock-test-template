describe("페이지 라우팅", () => {
  const domain = Cypress.env("domain");
  beforeEach(() => {
    cy.visit(domain); // 페이지 접속
  });

  it("로그인 페이지 접속", () => {
    cy.contains("로그인").click(); // 텍스트 있음, 클릭
    cy.url().should("equal", `${domain}auth/login`); //로그인 페이지 접속
    cy.contains("LOGIN");
  });

  it("회원가입 페이지 접속", () => {
    cy.visit(domain); // 페이지 접속
    cy.contains("회원가입").click(); // 텍스트 있음, 클릭
    cy.url().should("equal", `${domain}auth/sign-up`); //회원가입 페이지 접속
    cy.contains("Sign Up");
  });
});
