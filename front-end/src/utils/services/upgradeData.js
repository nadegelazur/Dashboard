/**
 * It takes a string, capitalizes the first letter, and then lowercases the rest of the string
 * @param {string} str - The string to be converted.
 * @returns {string} The first character of the string is converted to uppercase and the rest of the string is
 * converted to lowercase.
 */
export function fromLowerToUpperCase(str) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

/**
 * It takes an object as a parameter, then it loops through the object's data property, and if the
 * object's kind property matches the data property's kind property, it translates the kind property to
 * French, then it capitalizes the first letter of the translated word
 * @param {Object} obj - the object that contains the data to be reformatted
 * @returns {Array} An array of objects.
 */
 export function formatDatas(obj) {
  return obj.data.map((nbrKind, key) => {
    if (Object.keys(obj.kind)[key] == nbrKind.kind) {
      const frenchDatas = englishToFrench(obj.kind[key + 1]);
      nbrKind.kind = fromLowerToUpperCase(frenchDatas);
    }
    return nbrKind;
  });
}

/**
 * It takes a string as an argument and returns a string
 * @param {String} str - the string to translate
 * @returns the French translation of the English word passed in as an argument.
 */
function englishToFrench(str) {
    const words = {
      energy: "énergie",
      strength: "force",
      speed: "vitesse",
      intensity: "intensité",
      cardio: "cardio",
      endurance: "endurance",
    };
    return words[str];
}
  
/**
 * @param {Number} numDay  the number of the day in the week (start at 0)
 * @returns {String} the first letter of day
 */
 export function handleFormatTick(numDay) {
    const days = ["l", "m", "m", "j", "v", "s", "d"];
  
    switch (numDay) {
      case 1:
        return fromLowerToUpperCase(days[0]);
      case 2:
        return fromLowerToUpperCase(days[1]);
      case 3:
        return fromLowerToUpperCase(days[2]);
      case 4:
        return fromLowerToUpperCase(days[3]);
      case 5:
        return fromLowerToUpperCase(days[4]);
      case 6:
        return fromLowerToUpperCase(days[5]);
      case 7:
        return fromLowerToUpperCase(days[6]);
    }
}
  
/**
 * Convert and format the date to a number of the day(to: '2020-07-01' from '1')
 * @param {String} day - The date from API.
 * @returns {Number} The day of the month.
 */
export function customTick(day) {
    return Number(day.slice(8));
}
  
/**
 * Formats  initial date to good user format
 *
 * @param   {Object}  obj
 *
 * @return  {{activity: string, value: number}}    results
 */
 export function formatData(obj) {
  // console.log("obj==> ", obj);
  const results = [];
  obj.data.map((nbrKind, key) => {
    if (Object.keys(obj.kind)[key] == nbrKind.kind) {
      const frenchDatas = translateToFr(obj.kind[key + 1]);

      nbrKind.kind = frenchDatas;
    }
    results.push({
      activity: nbrKind.kind,
      value: nbrKind.value,
    });
  });
  // console.log('Results: ', results);
  return results;
}



/**
 * Capitalize and translate to French
 *
 * @param   {string}  str
 *
 * @return  {string}
 */
export function translateToFr(str) {
  var performances = {
    energy: capitalizesFirstLetter('energie'),
    strength: capitalizesFirstLetter('force'),
    speed: capitalizesFirstLetter('vitesse'),
    intensity: capitalizesFirstLetter('intensité'),
    cardio: capitalizesFirstLetter('cardio'),
    endurance: capitalizesFirstLetter('endurance'),

    default: 'unknown',
  };
  return performances[str] || performances['default'];
}

/**
 * Capitalize First letter
 *
 * @param   {string}  str
 *
 * @return  {string}
 */
export function capitalizesFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

/**
 * Format an integer with the french dot separator grouping digits by 3.
 * @param {number} value
 * @returns {string}
 */
export function toFrenchIntegerFormat(value) {
  value = value.toString();

  if (value.length < 4) {
    return value;
  }

  return `${toFrenchIntegerFormat(value.slice(0, -3))}.${value.slice(-3)}`;
}