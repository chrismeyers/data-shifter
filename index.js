const convert = require('./lib/convert');
const { resolveValidator, resolveMapper } = require('./lib/resolvers');

const input = {
  weird_company_name: '321 gnitset',
  reversed_flag: false,
};

try {
  const map = convert(resolveValidator('old'))(resolveMapper('new'));

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