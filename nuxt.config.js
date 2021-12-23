export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Fagolabs",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    // External lib
    link: [
      {
        rel: "stylesheet",
        href: "/lib/bootstrap-4.5.3-dist/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "/lib/font-awesome-4.7.0/css/font-awesome.min.css"
      },
      {
        rel: "stylesheet",
        href: "/lib/aos-2.3.4/dist/aos.css"
      }
    ],
    script: [
      {
        src: "/lib/jquery-3.5.1/package/dist/jquery.min.js",
        body: true
      },
      {
        src: "/lib/popper.js.1.16.0/content/Scripts/umd/popper.min.js",
        body: true
      },
      {
        src: "/lib/bootstrap-4.5.3-dist/js/bootstrap.min.js",
        body: true
      },
      {
        src: "/lib/iconify-1.0.7/package/dist/iconify.min.js",
        body: true
      },
      {
        src: "/lib/aos-2.3.4/dist/aos.js",
        body: true
      },
      { src: "/js/aos.js", body: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/style.global.css", "~/assets/css/font.global.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/components",
    "~/plugins/composition-api.js",
    "~/plugins/storyblok-rich-text-renderer.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "storyblok-nuxt",
      {
        accessToken: "YhMTK0QR5TGWWQ8rlbufCQtt",
        cacheProvider: "memory"
      }
    ],
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    },
    icon: {
      fileName: "favicon.ico"
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]]
    }
  },
  // Loading bar config
  loading: {
    color: "#4942A2",
    height: "5px"
  },
  // Development config
  server: {
    port: 8000
  }
};
