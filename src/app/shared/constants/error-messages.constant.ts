export const errorMessage = new Map<string | undefined, (params: any) => string>([
  [undefined, (params) => `Сталася непердбачувана помилка.`],
  ['', (params) => `Сталася непердбачувана помилка.`],
  ['email', () => `Тут має бути адрес електронної пошти`],
  ['required', (params) => `Це поле обов'язкове`],
  ['maxlength', (params) => `Максимум символів: ${params.requiredLength}`],
  ['minlength', (params) => `Мінімум символів ${params.requiredLength}`],
  ['pattern', (params) => `Неправильний формат`],
  ['min', (params) => `Мінімальне значення - ${params.min}`],
  ['whitespace', (params) => `Тут недозволені пробіли`],
  ['pattern', (params) => `Ти шось не те ввів`],
]);


// export const errorMessage = new Map<string | undefined, (params: any) => string>([
//   [undefined, (params) => ``],
//   ['', (params) => ``],
//   ['required', (params) => `This field is required`],
//   ['maxlength', (params) => `Maximum ${params.requiredLength} characters are allowed`],
//   ['minlength', (params) => `Minimum ${params.requiredLength} characters are required`],
//   ['pattern', (params) => `Invalid format`],
//   ['min', (params) => `Minimum amount should be ₹ ${params.min}`],
//   ['whitespace', (params) => `White spaces are not allowed`],
//   ['pattern', (params) => `The value you entered is not a link`],
// ]);
