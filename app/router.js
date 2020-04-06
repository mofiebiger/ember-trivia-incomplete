import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route("start", { path: "/start-game" });
  this.route("start", { path: "/" });

  this.route("trivia-data", {
    path: "/question",
    queryParams: ["category", "difficulty"]
  });

  this.route("trivia-data", { path: "/question" }, function() {
    this.route("category", { path: "/category/:category" }, function() {
      this.route("difficulty", { path: "/difficulty/:difficulty" }, function() {
        this.route("id", { path: "/id/:id" });
      });
    });
  });

  this.route("result", {
    path: "/your-results",
    queryParams: ["score"]
  });
});
