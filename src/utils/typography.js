import Typography from "typography"
const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: ["PT Serif", "serif"],
  bodyFontFamily: ["Muli", "sans-serif"],
  googleFonts: [
    {
      name: "PT Serif",
      styles: ["400", "700"],
    },
    {
      name: "Muli",
      styles: ["300", "400", "700"],
    },
  ],
})
export default typography
