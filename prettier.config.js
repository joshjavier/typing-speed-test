/** @type {import('prettier').Config} */
export default {
  singleQuote: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^react.*$',
    '<THIRD_PARTY_MODULES>',
    '^(?!.*[.]css$)[./].*$',
    '\.css$',
  ],
  importOrderTypeScriptVersion: '5.0.0',
};
