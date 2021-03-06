import { MainLayout } from '@/layouts'

function Work() {
  return (
    <MainLayout title="My career and current projects">
      <h1>Career</h1>
      <p>
        Working with the web since 2013 and with React since 2016, I have a
        bachelor's degree in Journalism and a B.Tech degree in Software
        Development. <br />
        I've worked mostly as a frontend engineer, with a high focus on React
        and functional programming.
      </p>
      <p>I also write random stuff if you are interested.</p>
      <h2>Current Projects</h2>
      <ul>
        <li>
          Senior Consultant and Software Engineer at{' '}
          <a href="https://www.thoughtworks.com/">Thoughtworks</a>
        </li>
      </ul>
      <h2>Languages and Frameworks</h2>
      <ul className="grid-container halves u-align-left">
        <li>JavaScript</li>
        <li>ReactJs</li>
        <li>NodeJs</li>
        <li>Elixir</li>
        <li>Ruby</li>
        <li>Rust</li>
      </ul>
      <h2>Certificates</h2>
      <ul className="grid-container halves u-align-left">
        <li>
          <a href="/lean-inception-certificado.pdf">
            Lean Inception Facilitator
          </a>
        </li>
      </ul>
      <style jsx>
        {`
          h2 {
            font-size: 1.5em;
          }
        `}
      </style>
    </MainLayout>
  )
}

export default Work
