export const formatContactName = (firstName: string, lastName: string) => [firstName, lastName].filter(Boolean).join(' ');

export const formatNumber = (value: number) => String(value).replace(/(.)(?=(\d{3})+$)/g, '$1,');

export default {
  formatContactName,
};
