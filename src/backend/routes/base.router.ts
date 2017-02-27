"use strict";

import { Router, Application } from "express";

export abstract class BaseRouter {
  router: Router;
  app: Application;

  constructor(router: Router, app: Application) {
    this.router = router;
    this.app = app;
  }

  abstract configureRouting(): void;
}
