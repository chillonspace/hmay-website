import { useEffect } from 'react'

const SORO_SCRIPT_ID = 'soro-embed-script'
const SORO_SRC = 'https://app.trysoro.com/api/embed/854b33db-d7af-4707-8406-e85cabaaf66f'

export default function Blog() {
  useEffect(() => {
    if (document.getElementById(SORO_SCRIPT_ID)) return

    const params = new URLSearchParams(window.location.search)
    let src = SORO_SRC
    const post = params.get('post')
    if (post) src += `?post=${encodeURIComponent(post)}`

    const script = document.createElement('script')
    script.id = SORO_SCRIPT_ID
    script.src = src
    script.async = true

    const container = document.getElementById('soro-blog')
    if (container) container.after(script)
  }, [])

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ marginBottom: 16 }}>Blog</h1>
      <div id="soro-blog" />
    </main>
  )
}
