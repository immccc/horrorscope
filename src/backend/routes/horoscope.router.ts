"use strict";

import { Router, Request, Response, NextFunction } from "express";
import { BaseRouter } from "./base.router";
import { HoroscopeService } from "../horoscope/horoscope.service";

const logger = require('winston');

export class HoroscopeRouter extends BaseRouter {

  configureRouting() {
    this.router.get("/horoscope/:sign/", this.getHoroscope);
    this.app.use("/horoscope", this.router);
  };

  getHoroscope(request: Request, response: Response) {
    let sign = request.param("sign");
    logger.log("info", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    response.json({"sign": sign, "text": HoroscopeService.buildDailyText(sign)});
  }
}
