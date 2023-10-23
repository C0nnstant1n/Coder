const dict: string =
  "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
let char = "";

export default function findChar(
  data: string,
  iteration: number,
  code: boolean
) {
  let result: string[] = [];
  iteration = Math.round(iteration);
  if (data.length) {
    // console.log(code, iteration);
    for (let i of data) {
      let symb = dict.indexOf(i, 0);
      if (symb != -1) {
        char = dict[code ? symb + iteration : symb - iteration];
      } else {
        char = i;
      }
      result.push(char);
    }
    // console.log("CHAR -- ", result);
  }
  return result.join("");
}
