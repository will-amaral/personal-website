import { MainLayout } from '@/layouts';

function Work() {
  return (
    <MainLayout title="My career and current projects">
      <h1>Career</h1>
      <p>
        Working with the web since 2013 and with React since 2016, I have a
        bachelor's degree in Journalism and a B.Tech degree in Software
        Development. <br />I have worked for small to medium size companies,
        building websites and web applications of varied purposes. Even though
        I'm mostly focused in the frontend, I actually consider myself a
        Fullstack developer.
      </p>
      <p>I also write random stuff if you are interested.</p>
      <h2>Current Projects</h2>
      <ul>
        <li>
          Team Lead at{' '}
          <a href="https://triventoeducacao.com.br/">Trivento Educação</a>
        </li>
        <li>
          Front-end Instructor at{' '}
          <a href="https://cubos.academy/">Cubos Academy</a>
        </li>
      </ul>
      <h2>Languages and Frameworks</h2>
      <ul className="grid-container halves u-align-left">
        <li>JavaScript</li>
        <li>ReactJs and cousins</li>
        <li>NodeJs</li>
        <li>Ruby</li>
        <li>Ruby-on-Rails and Sinatra</li>
        <li>PHP</li>
      </ul>
      <style jsx>
        {`
          h2 {
            font-size: 1.5em;
          }
        `}
      </style>
    </MainLayout>
  );
}

export default Work;
