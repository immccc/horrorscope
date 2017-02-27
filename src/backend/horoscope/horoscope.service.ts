import {Sentence, SentenceModel} from "./sentence.model";


export class HoroscopeService {

    static buildDailyText(sign) {

      let today:Date = new Date();
      let seed:string = today.toDateString() + sign;
      console.log("SEED: ", seed);

      let rand:any = require("random-seed").create();

      console.log("RAND-SEED: ", JSON.stringify(HoroscopeService.rand));
      //rand.seed();

      //SentenceModel.model.find()
    }

}
