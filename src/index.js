import Post from "./Post"
import './styles/styles.css' //импорт стилей
import json from './assets/json.json'//
import WebpackLogo from './assets/webpack-logo.png'
const post = new Post('Webpack Post Title', WebpackLogo)

console.log('Post to string: ', post.toString())

console.log('JSON: ', json)