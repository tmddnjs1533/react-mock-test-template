import { render } from "@testing-library/react";
import ProjectListFilter from "components/project/ProjectListFilter";
import userEvent from "@testing-library/user-event";
// it("should show something", () => {
//   const history = createMemoryHistory();
//   const route = "/something/sms/9393939393";
//   history.push(route);
//   render(
//     <Router location={history.location} navigator={history}>
//       <ProjectListFilter />
//     </Router>
//   );
//   expect(screen.getByText(/9393/i));
// });
describe("App", () => {
  render(<ProjectListFilter />);
  userEvent;
});
