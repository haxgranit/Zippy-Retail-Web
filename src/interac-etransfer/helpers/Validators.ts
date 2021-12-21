const emailRegExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
const phoneRegExp = RegExp(/^[2-9]\d{2}[2-9]\d{2}\d{4}$/);

export const isValidEmail = (data: string): boolean => emailRegExp.test(data);

export const isValidPhone = (data: string): boolean => phoneRegExp.test(data);
