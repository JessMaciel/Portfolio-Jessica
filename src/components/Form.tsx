import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

type FormProps = {
  id: string
}

function Form({ id }: FormProps) {
  const { t } = useLanguage()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  useEffect(() => {
    if (name) {
      document.title = `${name} — Portfolio`
    } else {
      document.title = 'Jessica Maciel — Portfolio'
    }
  }, [name])

  async function handleSubmit(
    event: React.SubmitEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    if (!name || !email || !message) {
      setError(t.form.requiredFields)
      setSubmitted(false)
      return
    }

    setSending(true)
    setError('')
    setSubmitted(false)

    const controller = new AbortController()

    const timeout = setTimeout(() => {
      controller.abort()
    }, 10000)

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbw0RbUPh7OZvwxDT6MS2fSjZ9lvfHG2y1uSX1RZOfxfrDkw8ggeIHa-Qqj-3AibARSQcQ/exec',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },

          body: JSON.stringify({
            name,
            email,
            message,
          }),

          signal: controller.signal,
        }
      )

      if (!response.ok) {
        throw new Error(t.form.sendError)
      }

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error || t.form.sendError)
      }

      setSubmitted(true)

      setName('')
      setEmail('')
      setMessage('')

    } catch (error) {
      console.error(error)

      setError(t.form.error)
      setSubmitted(false)

    } finally {
      clearTimeout(timeout)
      setSending(false)
    }
  }

  return (
    <section id={id} className="form">

      <div className="contact-info">
        <span className="section-label">
          {t.form.label}
        </span>

        <h2>{t.form.title}</h2>

        <p>{t.form.description}</p>

        <div className="contact-links">
          <a
            href="mailto:jess.am.maciel@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/jessica-maciel-51639798/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/JessMaciel"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">

          <label htmlFor="name">
            {t.form.name}
          </label>

          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label htmlFor="email">
            {t.form.email}
          </label>

          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="message">
            {t.form.message}
          </label>

          <textarea
            id="message"
            name="message"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />

          {error && (
            <p className="form-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={sending}
          >
            {sending
              ? t.form.sending
              : t.form.send
            }
          </button>

          {submitted && (
            <p className="form-success">
              {t.form.success}
            </p>
          )}

        </div>
      </form>

    </section>
  )
}

export default Form