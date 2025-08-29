import React from 'react'
import Navbar from '../components/navbar'

const Login = () => {
  function search(formData) {
    const query = formData.get('query')
    alert(`You searched for '${query}'`)
  }

  return (
    <div>
      <Navbar />
      <div>
        <form action={search}>
          <input name="query" />
          <button type="submit">Search</button>
          <input name="query" />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  )
}

export default Login
