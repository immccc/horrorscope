"use strict";

import { Router, Request, Response, NextFunction } from "express";
import { BaseRouter } from "./base.router";

export class AppRouter extends BaseRouter {

  configureRouting() {
    this.router.get("/", this.home);
    this.app.use("/", this.router);
  };

  home(request: Request, response: Response) {
    response.render("home");
  }
}
