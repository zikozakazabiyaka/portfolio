export const isEmpty = (value: string) => !value;

export const textIsInvalid = (value: string) => !/^[a-zA-Z0-9\s]*$/g.test(value);

export const loginIsInvalid = (value: string) => !/^[a-zA-Z0-9\s]{4,16}$/g.test(value);

export const passwordIsInvalid = (value: string) => ! /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/.test(value);

export const getCreatureId = (url: string) => {
  const parseUrl = url.split('/');

  for (let i = parseUrl.length - 1; i >= 0; i--) {
    if (parseUrl[i] && typeof +parseUrl[i] === 'number') {
      return parseUrl[i];
    }
  }
}
