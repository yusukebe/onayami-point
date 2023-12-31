import { Hono } from 'hono'
import { html } from 'hono/html'
import type { FC } from 'hono/jsx'
import { Layout } from './layout'

const Add: FC = () => {
  // お悩みポイント 2
  return html`<div x-data="{add: function(x, y) { return x + y }}">
    <button type="button" x-on:click="alert(add(1, 2))">Show</button>
  </div>`
}

const app = new Hono()

app.get('/', async (c) => {
  return c.html(
    <Layout title="テスト">
      <Add />
    </Layout>
  )
})

export default app
