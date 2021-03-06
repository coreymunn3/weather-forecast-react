export const findNavbarBrandIcon = (conditionCode, isDay) => {
  switch (conditionCode) {
    // sunny, clear
    case 1000:
      if (isDay) {
        return 'fas fa-sun';
      } else {
        return 'fas fa-moon';
      }
    // partly cloudy
    case 1003:
      if (isDay) {
        return 'fas fa-cloud-sun';
      } else {
        return 'fas fa-cloud-moon';
      }
    // overcast, cloudy
    case 1006:
    case 1009:
      return 'fas fa-cloud';
    // fog or mist
    case 1030:
    case 1135:
    case 1147:
      return 'fas fa-smog';
    // some amount of rain
    case 1063:
    case 1150:
    case 1153:
    case 1180:
    case 1183:
    case 1186:
    case 1189:
    case 1192:
    case 1195:
    case 1240:
    case 1243:
    case 1246:
      if (isDay) {
        return 'fas fa-cloud-sun-rain';
      } else {
        return 'fas fa-cloud-moon-rain';
      }
    // some amount of snow or ice
    case 1066:
    case 1114:
    case 1117:
    case 1210:
    case 1213:
    case 1216:
    case 1219:
    case 1222:
    case 1225:
    case 1237:
    case 1255:
    case 1258:
    case 1261:
    case 1264:
    case 1279:
    case 1282:
      return 'fas fa-snowflake';
    // thunderstorms
    case 1087:
    case 1273:
    case 1276:
      return 'fas fa-bolt';
    // freezing rain of some kind
    case 1069:
    case 1072:
    case 1168:
    case 1171:
    case 1198:
    case 1201:
    case 1204:
    case 1207:
    case 1249:
    case 1252:
      return 'fas fa-cloud-rain';
    default:
      return 'fas fa-cloud-sun';
  }
};
