import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  transpileDependencies: true,
  server:{
    proxy:{
      '/api':{
        target: 'http://localhost:3000'
      }
    }
  }
})
