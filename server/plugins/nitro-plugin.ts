export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    // console.log('render:html', html)
    // html.bodyAppend.push('<hr>Appended by custom plugin')
    // html.bodyPrepend.push('横幅<hr>')
  })

  nitroApp.hooks.hook('render:response', (response, { event }) => {
    // console.log('render:response', response)
  })
})
