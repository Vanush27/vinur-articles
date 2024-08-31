export interface IThemeSize {
  typography_10: number;
  typography_14: number;
  typography_16: number;
  typography_18: number;
  typography_25: number;
  typography_28: number;
  typography_34: number;
  typography_44: number;
  typography_60: number;
}
export interface ILineHeight {
  lineHeight_10: number;
  lineHeight_14: number;
  lineHeight_16: number;
  lineHeight_18: number;
  lineHeight_24: number;
  lineHeight_30: number;
  lineHeight_34: number;
  lineHeight_48: number;
  lineHeight_60: number;
}
export const size: IThemeSize = {
  typography_10: 10,
  typography_14: 14,
  typography_16: 16,
  typography_18: 18,
  typography_25: 25,
  typography_28: 28,
  typography_34: 34,
  typography_44: 44,
  typography_60: 60,
};
export const lineHeight: ILineHeight = {
  lineHeight_10: 1.4 * size.typography_10,
  lineHeight_14: 1.4 * size.typography_14,
  lineHeight_16: 1.4 * size.typography_16,
  lineHeight_18: 1.4 * size.typography_18,
  lineHeight_24: 1.4 * size.typography_25,
  lineHeight_30: 1.4 * size.typography_28,
  lineHeight_34: 1.4 * size.typography_34,
  lineHeight_48: 1.4 * size.typography_44,
  lineHeight_60: 1.4 * size.typography_60,
};
