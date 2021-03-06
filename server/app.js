import Koa from 'koa'
import routes from './router'
import templating from './templating'

const app = new Koa()

app.use(templating)
app.use(routes.routes(), routes.allowedMethods())

app.listen(3001, () => {
  console.log(`node server has already started, visit 3001`)
})
