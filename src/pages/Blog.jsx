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
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 py-10 sm:py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            ← Back to Home
          </a>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white shadow-xl p-5 sm:p-8 lg:p-10">
          <div className="mb-6 sm:mb-8">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-blue-600">
              HMAY Updates
            </p>
            <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
              HMAY Blog
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl">
              Latest insights, product highlights, and practical use cases from our interactive display solutions.
            </p>
          </div>

          <div className="rounded-xl border border-slate-100 bg-white p-2 sm:p-4">
            <div id="soro-blog" />
          </div>
        </div>
      </div>
    </main>
  )
}
