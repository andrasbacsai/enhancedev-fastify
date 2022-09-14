export default function MyMessage({ html, state={} }) {
    const { store={} } = state
    const { message='', count=0 } = store
    console.log(state)
    return html`<p>${message} ${count}</p>`
  }