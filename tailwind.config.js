const defaultTheme = require(`tailwindcss/defaultTheme`)

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: `#b39b87`,
        secondary: `#b39b87`,
        accent: `#b39b87`,
      },
      fontFamily: {
        sans: [
          `Noto Sans JP`,
          ...defaultTheme.fontFamily.sans,
          `游ゴシック体`,
          `YuGothic`,
          `ヒラギノ角ゴ ProN W3`,
          `Hiragino Kaku Gothic ProN W3`,
          `HiraKakuProN-W3`,
          `ヒラギノ角ゴ ProN`,
          `Hiragino Kaku Gothic ProN`,
          `ヒラギノ角ゴ Pro`,
          `Hiragino Kaku Gothic Pro`,
          `Hiragino Sans`,
          `メイリオ`,
          `Meiryo`,
          `Osaka`,
          `ＭＳ Ｐゴシック`,
          `MS PGothic`,
        ],
        serif: [
          `Noto Serif JP`,
          ...defaultTheme.fontFamily.serif,
          `游ゴシック体`,
          `YuGothic`,
          `ヒラギノ角ゴ ProN W3`,
          `Hiragino Kaku Gothic ProN W3`,
          `HiraKakuProN-W3`,
          `ヒラギノ角ゴ ProN`,
          `Hiragino Kaku Gothic ProN`,
          `ヒラギノ角ゴ Pro`,
          `Hiragino Kaku Gothic Pro`,
          `Hiragino Sans`,
          `メイリオ`,
          `Meiryo`,
          `Osaka`,
          `ＭＳ Ｐゴシック`,
          `MS PGothic`,
        ],
      },
    },
  },
  variants: {
    fontSize: [`responsive`, `hover`],
  },
  plugins: [require(`tailwindcss-transitions`)(), require(`@tailwindcss/custom-forms`)],
}
