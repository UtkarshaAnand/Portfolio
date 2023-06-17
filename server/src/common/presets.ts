import { isEmail, isMobile, isUrl } from './validator';

const OBJECT_ID_PATTERN = '[0-9a-fA-F]{24}';

const requiredStringType = {
  type: String,
  required: true,
};

const stringFunction = (maxlength = 500, minlength = 0) => ({
  type: String,
  minlength,
  maxlength,
  set: (v: string) => (v?.length ? v : undefined),
});

const requiredStringFunction = (maxlength = 500, minlength = 0) => ({
  ...stringFunction(maxlength, minlength),
  required: true,
});

const dateType = {
  type: Date,
  default: new Date(),
};

const emailType = {
  type: String,
  lowercase: true,
  validate: isEmail,
};

const mobileType = {
  type: String,
  validate: isMobile,
};

const urlType = {
  type: String,
  validate: isUrl,
};

const positiveNumberType = {
  type: Number,
  default: 0,
  min: 0,
  max: 1000000000,
};

const requiredPositiveNumberType = {
  ...positiveNumberType,
  required: true,
};

const positiveIntegerType = {
  ...positiveNumberType,
  validate: {
    validator: (v: number) => Number.isInteger(v),
    message: '{VALUE} is not an integer value',
  },
};

const requiredPositiveIntegerType = {
  ...positiveIntegerType,
  required: true,
};

export {
  requiredStringType,
  stringFunction,
  requiredStringFunction,
  dateType,
  emailType,
  mobileType,
  urlType,
  positiveNumberType,
  requiredPositiveNumberType,
  positiveIntegerType,
  requiredPositiveIntegerType,
  OBJECT_ID_PATTERN,
};
