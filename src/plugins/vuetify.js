// src/plugins/vuetify.js

import 'vuetify/styles' // Global CSS has to be imported
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  components: {}, // You can add specific components here if needed
  directives: {}, // You can add specific directives here if needed
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1976D2',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
        },
      },
      dark: {
        colors: {
          primary: '#2196F3',
          secondary: '#FF4081',
          accent: '#3F51B5',
          error: '#F44336',
          info: '#00BCD4',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
  },
})

export default vuetify
