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
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Richard-von-Weizsäcker Gymnasium",
        short_name: "RvWG",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#e0a800",
        display: "standalone",
        icon: "static/img/icon.png"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sass"
  ]
};
