/*Task 2
Рекомендаци по погоде

Средства защиты*/
let sunProtect = 'sun protection';
let rainProtect = 'umbrella';
let snowProtect = 'hat';
let snowSunProtect = `${snowProtect} and sunglass`;

let rec; //определить рекомендацию выбора средств защиты в зависимости от факторов погоды
let sunRec = `It is sunny, use ${sunProtect}.`;
let rainRec = `It is rainy, take an ${rainProtect}.`;
let snowRec = `It is snow outside, do not forget the ${snowProtect}.`;
let snowSunRec = `Snow and sun are outside, do not forget the ${snowProtect}.`;
let comfortRec = 'Casual day, have a great one!';

function getWeatherRecommendations(sun, rain, snow) {
  if (sun && !rain && !snow) {
    rec = sunRec;
  }
  else if (!sun && rain && !snow) { rec = rainRec; }
  else if (!sun && !rain && snow) { rec = snowRec; }
  else if (sun && !rain && snow) { rec = snowSunRec; }
  else if (!sun && !rain && !snow) { rec = comfortRec; }
  return rec;
}

getWeatherRecommendations(true, false, false);
console.log(rec);
getWeatherRecommendations(false, true, false);
console.log(rec);
getWeatherRecommendations(false, false, true);
console.log(rec);
getWeatherRecommendations(true, false, true);
console.log(rec);
getWeatherRecommendations(false, false, false)
console.log(rec);