import Dashboard from "./views/Dashboard.js";
import NotFoundPage from "./views/NotFoundPage.js";
import SignUp from "./views/SignUp.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/404", view: NotFoundPage },
    { path: "/sign-in", view: () => console.log("viewing sign-in") },
    { path: "/sign-up", view: SignUp },
  ];

  //Testando cada rota
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: "/404",
      isMatch: true,
    };

    navigateTo("/404");
  }

  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (event) => {
    if (event.target.matches("[data-link]")) {
      event.preventDefault();
      navigateTo(event.target.href);
    }
  });

  router();
});
