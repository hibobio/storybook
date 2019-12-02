import {
  asArray,
  compareAsStrings,
  getType,
  hasProp,
  isArray,
  isDate,
  isDateFormat,
  isDateISO8601,
  isNullOrUndefined,
  isNumber,
  isObject,
  isString,
  parseToNumber,
  stringify,
} from './functional-utils';

import { format, parseISO } from 'date-fns';
import { InputTypes } from '../../form-elements/input/input.enum';
import { serverDateFormat } from '../../consts';

// -------------------------------
// Transformers
// -------------------------------

export const truthyOrFalse = value => {
  const truthy = ['true', '1', 1, 'on', 'yes'];
  if (typeof value !== 'boolean') {
    value = truthy.includes(value) ? true : false;
  }
  return value;
};

export const stringListToArray = (
  list: string,
  test = /[^\w\u0020]+/
): string[] => {
  if (isArray(list) || !list) {
    return list as any;
  }
  if (!isString(list)) {
    return [list];
  }
  return Array.from(new Set(list.split(test).map(i => i.trim()))).filter(
    Boolean
  );
};

export const arrayOfStringsOrArrayFromString = value =>
  isArray(value) ? value : isString(value) ? stringListToArray(value) : [];

export const valueToObjectWithKeyOfValueFromArray = (
  value: any,
  key: string,
  array: object[]
) => {
  if (isNullOrUndefined(value) || isNullOrUndefined(array)) {
    return undefined;
  }
  return array.find(i => compareAsStrings(i[key], value));
};

export const stringToDate = date => {
  if (isDate(date) || isNullOrUndefined(date)) {
    return date;
  }
  let converted = parseISO(date);
  if (String(converted) === 'Invalid Date') {
    converted = new Date(date);
  }
  return String(converted) !== 'Invalid Date' ? converted : undefined;
};

export const dateToString = (date, frmt = serverDateFormat) =>
  isDate(date) ? format(date, frmt) : date;

export const valueToObjectKey = (key: string) => (value: any) => {
  return hasProp(value, key) ? value : { [key]: value };
};

export const arrayOfValuesToArrayOfObjects = (key: string) => (
  value: any[]
) => {
  if (isNullOrUndefined(value)) {
    return value;
  }
  value = asArray(value);
  return value.map(valueToObjectKey(key));
};

export const valueAsNumber = (
  inputType: InputTypes,
  value: any,
  def: any = undefined
) => {
  if (inputType !== InputTypes.number || !value) {
    return value;
  }
  const parsed = parseToNumber(value);
  if (parsed !== parsed) {
    console.warn(`Value (${stringify(value)}) is not parseable to number.`);
  }
  return parsed === parsed ? parsed : def;
};

// -------------------------------
// Typecheckers
// -------------------------------

export const booleanOrFail = value => {
  if (isNullOrUndefined(value)) {
    return value;
  }
  if (typeof value !== 'boolean') {
    throw new Error(
      `Value (${stringify(value)}) must be of type boolean, instead ${getType(
        value
      )} was provided.`
    );
  }
  return value;
};

export const arrayOrFail = value => {
  if (isNullOrUndefined(value)) {
    return value;
  }
  if (!isArray(value)) {
    throw new Error(
      `Value (${stringify(value)}) must be an array, instead ${getType(
        value
      )} was provided.`
    );
  }
  return value;
};

export const objectOrFail = value => {
  if (isNullOrUndefined(value)) {
    return value;
  }
  if (!isObject(value)) {
    throw new Error(
      `Value (${stringify(value)}) must be an object, instead ${getType(
        value
      )} was provided.`
    );
  }
  return value;
};

export const stringyOrFail = value => {
  if (isNullOrUndefined(value)) {
    return value;
  }
  if (!(isString(value) || isNumber(value))) {
    throw new Error(
      `Value (${stringify(value)}) should not be ${getType(
        value
      ).toUpperCase()}.`
    );
  }
  return value + '';
};

export const dateOrFail = value => {
  if (isDate(value) || isNullOrUndefined(value)) {
    return value;
  }
  if (!value) {
    return undefined;
  }
  if (!isDateISO8601(value)) {
    throw new Error(
      `Date string (${stringify(value)}) must be in ISO8601 format to parse.`
    );
  }
  return stringToDate(value);
};

export const dateFormatOrFail = value => {
  if (isNullOrUndefined(value)) {
    return value;
  }
  if (!value) {
    return undefined;
  }
  if (!isDateFormat(value)) {
    throw new Error(
      `Provided string (${stringify(value)}) does not describe Date format.`
    );
  }
  return value;
};

export const timeyOrFail = value => {
  if (isNullOrUndefined(value)) {
    return value;
  }
  if (!value) {
    return undefined;
  }
  if (!isString(value) || value.indexOf(':') === -1) {
    throw new Error(`Value (${stringify(value)}) could not be parsed to Time.`);
  }
  return value;
};

export const selectValueOrFail = value => {
  if (isNullOrUndefined(value)) {
    return value;
  }

  if (!(isString(value) || isNumber(value) || isArray(value))) {
    throw new Error(
      `Value (${stringify(
        value
      )}) should be string, number or (string | number)[], instead ${getType(
        value
      ).toUpperCase()} was provided.`
    );
  }
  return asArray(value);
};

// -------------------------------
// Validators
// -------------------------------

export const defaultValue = def => value =>
  isNullOrUndefined(value) ? def : value;

export const objectHasKeyOrFail = (
  key: string | string[],
  fuzzyFalsey = false
) => (value: object) => {
  if (isNullOrUndefined(value)) {
    return value;
  }
  if (fuzzyFalsey && !value) {
    return undefined;
  }
  if (isNullOrUndefined(key) || !isObject(value)) {
    throw new Error(
      `Value (${stringify(
        value
      )}) is  not an object or key (${key}) is invalid.`
    );
  }
  for (const k of asArray(key)) {
    if (!hasProp(value, k as string)) {
      throw new Error(
        `Value object (${stringify(value)}) has no key (${key}).`
      );
    }
  }
  return value;
};

export const valueInArrayOrFail = (
  value: any,
  array: any[],
  key: string = null
) => {
  if (isNullOrUndefined(value)) {
    return value;
  }
  if (isNullOrUndefined(array)) {
    return undefined;
  }
  if (
    (key && !array.find(i => i[key] === value[key])) ||
    (!key && !array.includes(value))
  ) {
    value = stringify(value);
    array = array.map(i => stringify(i));
    throw new Error(
      `Value (${stringify(value)}) is not part of array (${stringify(array)}).`
    );
  }

  return value;
};
