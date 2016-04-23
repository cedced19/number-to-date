
module.exports = function (number, type, lang) {
  if (typeof lang === 'undefined' || lang === '') lang = 'en';
  var list = require('./i18l/' + lang + '/' + type +'s.json');
  for (var i in list) {
    if ((i+1) == number) return list[i];
  }
  return 'Bad value';
}
