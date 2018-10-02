module.exports = {
  plugins: [
    {
      resolve: "gatsby-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/layouts/Default.tsx")
        }
      }
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-styled-components"
  ]
};
