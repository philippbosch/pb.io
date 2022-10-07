import type { NextPage } from 'next';
import Head from 'next/head';
import H1 from '../components/H1';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Philipp Bosch &middot; Software Developer &middot; Berlin</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pb.io" />
        <meta
          property="og:title"
          content="Philipp Bosch &middot; Software Developer &middot; Berlin"
        />
        <meta
          property="og:description"
          content="Philipp Bosch is a software developer for all things web &amp; mobile"
        />
        <meta
          property="og:image"
          content="https://pb.io/images/philipp-bosch.jpg"
        />
      </Head>
      <section className="space-y-4 flex-1">
        <H1>Technologies &amp; Platforms</H1>
        <ul className="text-lg">
          {[
            'JavaScript / TypeScript',
            'React / Next.js',
            'Python / Django',
            'Tailwind CSS',
            'Ionic Framework',
            'The Web',
          ].map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
      <section className="space-y-4 flex-1">
        <H1>Current Project</H1>
        <a href="https://www.weg.plus/" className="block">
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            className="w-16 h-16 rounded-xl mt-1.5 mr-4 mb-2 shrink-0 float-left"
          >
            <path style={{ fill: '#fff' }} d="M0 0h1024v1024H0z" />
            <path
              d="M726.4 224.53c5.42 0 10.65 2.06 14.61 5.76l137.6 128.11a21.61 21.61 0 0 1 6.72 15.68v404.59c0 11.7-9.63 21.33-21.33 21.33H160a21.43 21.43 0 0 1-21.33-21.33v-404.8c0-6.13 2.65-11.96 7.25-16l-.32-.32 139.95-128a21.34 21.34 0 0 1 14.4-5.55H726.4v.53ZM610.13 383.36v373.97h232.54V383.36L726.4 274.99 610.13 383.36Zm-428.8 11.73v362.24h385.6V395.2h-385.6v-.1Zm126.94-128.42-93.87 85.86h366.3l92.15-85.86H308.16h.1Z"
              style={{ fill: '#e11d48', fillRule: 'nonzero' }}
            />
            <path
              d="M704.85 477.12a21.54 21.54 0 0 1-21.44 21.44 21.54 21.54 0 0 1-21.44-21.44 21.54 21.54 0 0 1 21.44-21.44 21.54 21.54 0 0 1 21.44 21.44m88.96 0a21.54 21.54 0 0 1-21.44 21.44 21.54 21.54 0 0 1-21.44-21.44 21.54 21.54 0 0 1 21.44-21.44 21.54 21.54 0 0 1 21.44 21.44m-67.52 145.6c27.42 0 49.92-22.4 50.03-49.5H676.05c.3 27.2 22.72 49.44 49.92 49.5"
              style={{ fill: '#1e40af', fillRule: 'nonzero' }}
            />
          </svg>
          <div>
            <h2 className="text-xl text-white">WEG+</h2>
            <p className="hyphens-auto">
              Online platform for apartment owners and property managers to
              improve communication, transparency and efficiency within owners
              associations (WEG).
            </p>
            <p>
              <span className="underline">www.weg.plus</span>
            </p>
          </div>
        </a>
      </section>
      <section className="space-y-4 flex-1">
        <H1>Friends &amp; Network</H1>
        <ul className="text-lg space-y-4 xl:space-y-0">
          {[
            [
              'Lena Hanzel',
              'Visual Identity & Design Consulting',
              'https://www.lenahanzel.de/',
            ],
            [
              'Carmen Ebeling',
              'Business Consulting',
              'https://www.carmen-ebeling.de/',
            ],
            ['Derk Ebeling', 'Motion Design', 'https://www.derkebeling.de/'],
            ['Elena Tibi', 'Speaker', 'https://www.elenatibi.de/'],
            [
              'SYNTOP',
              'Interaction & Information Design',
              'http://www.syntop.io/',
            ],
          ].map(([name, profession, url]) => (
            <li key={url}>
              <a
                href={url}
                className="text-white flex flex-col xl:items-baseline xl:flex-row xl:space-x-2"
              >
                <div>{name}</div>
                <div className="text-base text-gray-500">{profession}</div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
