import printValue from "../utils/printValue.js";

export const mixed = {
  default: "полето ${path} е неважечко",
  required: "полето ${path} е задолжително",
  oneOf: "${path} мора да биде една од следниве вредности: ${values}",
  notOneOf: "${path} не смее да биде една од следниве вредности: ${values}",
  notType: ({ path, type, value, originalValue }) => {
    const isCast = originalValue != null && originalValue !== value;
    let msg = `${
      `${path} мора да биде од тип \`${type}\`, ` + `но последната вредност беше: \`${printValue(value, true)}\``
    }${isCast ? ` (добиено од вредноста \`${printValue(originalValue, true)}\`)` : ""}`;

    if (value === null) {
      msg += `\nIf "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``;
    }

    return msg;
  },
  defined: "полето ${path} мора да биде дефинирано",
};

export const string = {
  length: ({ path, length }) => `${path} мора да биде долго точно ${length} ${length === 1 ? "знак" : "знаци"}`,
  min: ({ path, min }) => `${path} мора да содржи најмалку ${min} ${min === 1 ? "знак" : "знаци"}`,
  max: ({ path, max }) => `${path} мора да содржи најмногу ${max} ${max === 1 ? "знак" : "знаци"}`,
  matches: '${path} мора да одговара на следново: "${regex}"',
  email: "${path} мора да биде валидна е-маил адреса",
  url: "${path} мора да биде валидна URL адреса",
  uuid: "${path} мора да биде валиден UUID",
  trim: "${path} не смее да содржи дополнителни празни места на почетокот или на крајот",
  lowercase: "${path} мора да биде со мали букви",
  uppercase: "${path} мора да биде со големи букви",
};

export const number = {
  min: "${path} мора да биде поголемо или еднакво на ${min}",
  max: "${path} мора да биде помало или еднакво на ${max}",
  lessThan: "${path} мора да биде помало од ${less}",
  moreThan: "${path} мора да биде поголемо од ${more}",
  notEqual: "${path} мора да не биде еднакво на ${notEqual}",
  positive: "${path} мора да биде позитивен број",
  negative: "${path} мора да биде негативен број",
  integer: "${path} мора да биде цел број",
};

export const date = {
  min: "${path} мора да биде подоцна од ${min}",
  max: "${path} мора да биде порано од ${max}",
};

export const boolean = {
  isValue: "${path} мора да биде ${value}",
};

export const object = {
  noUnknown: "${path} има недозволени клучеви: ${unknown}",
};

export const array = {
  min: ({ path, min }) => `${path} мора да има најмалку ${min} ${min === 1 ? "вредност" : "вредности"}`,
  max: ({ path, max }) => `${path} мора да има најмногу ${max} ${max === 1 ? "вредност" : "вредности"}`,
  length: ({ path, length }) => `${path} мора да има точно ${length} ${length === 1 ? "вредност" : "вредности"}`,
};

export default {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
};
