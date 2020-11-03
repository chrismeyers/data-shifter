/* eslint-disable no-console */
const yup = require('yup');
const dataMapper = require('..');

const { convert } = dataMapper;

const input = {
  word: 'gnitset',
};

const customValidator = yup.object().shape({
  word: yup.string().required(),
});

const customMapper = async (data, validator) => {
  const valid = await validator.validate(data);

  return {
    reversed: [...valid.word].reverse().join(''),
  };
};

try {
  const map = convert(customValidator)(customMapper);

  (async () => {
    try {
      const result = await map(input);
      console.log(result);
    } catch (error) {
      console.error(error.errors);
    }
  })();
} catch (error) {
  console.error(error.message);
}