module.exports = function check(str, bracketsConfig) {
    do {
      str=str.replace('()', '');
      str=str.replace('{}', '');
      str=str.replace('[]', '');
      str=str.replace('||', '');
      str=str.replace('12', '');
      str=str.replace('34', '');
      str=str.replace('56', '');
      str=str.replace('77', '');
      str=str.replace('88', '');
    }
    while (/\(\)/.test(str) || /\[\]/.test(str) || /\{\}/.test(str) || /\|\|/.test(str) ||
    /12/.test(str) || /34/.test(str) || /56/.test(str) || /77/.test(str) || /88/.test(str));
    if (str.length==0)
      return true;
      else return false;
}
