export interface IThemeSize {
  typography_10: number;
  typography_14: number;
  typography_16: number;
  typography_18: number;
}
export interface ILineHeight {
  lineHeight_10: number;
  lineHeight_14: number;
  lineHeight_16: number;
  lineHeight_18: number;
}
export const size: IThemeSize = {
  typography_10: 10,
  typography_14: 14,
  typography_16: 16,
  typography_18: 18,
};
export const lineHeight: ILineHeight = {
  lineHeight_10: 1.4 * size.typography_10,
  lineHeight_14: 1.4 * size.typography_14,
  lineHeight_16: 1.4 * size.typography_16,
  lineHeight_18: 1.4 * size.typography_18,
};
