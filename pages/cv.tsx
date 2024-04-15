/// <reference path="../types/types.d.ts" />

import classNames from 'classnames';
import type { NextPage } from 'next';
import Head from 'next/head';
import differenceInYears from 'date-fns/differenceInYears';
import H1 from '../components/H1';
import Layout from '../components/Layout';
import Job from '../components/Job';
import skills from '../data/skills.yaml';
import type { Skill } from '../types/skill';

const CV: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>
          Lebenslauf &middot; Philipp Bosch &middot; Software Developer &middot;
          Berlin
        </title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pb.io/cv" />
        <meta property="og:title" content="Lebenslauf · Philipp Bosch" />
        <meta
          property="og:description"
          content="Philipp Bosch ist langjähriger Softwareentwickler mit Fokus auf Web und Mobile"
        />
        <meta
          property="og:image"
          content="https://pb.io/images/philipp-bosch.jpg"
        />
        <meta name="robots" content="noindex" />
      </Head>
      <section className="flex-1 space-y-16">
        <div>
          <H1>Persönliche Daten</H1>
          <p className="text-lg">
            * 3. Mai 1979 
            <span className="text-gray-500">
              ({differenceInYears(Date.now(), new Date('1979-05-03T13:34:00'))})
            </span>
             in Bonn
            <br />
            Schillerstraße 1 · 13158 Berlin
            <br />
            <a href="tel:+491795057388">+49 179 5057388</a> ·{' '}
            <a href="mailto:hi@pb.io">hi@pb.io</a>
          </p>
        </div>
        <div>
          <H1>Schulbildung</H1>
          <p className="text-lg">
            Clara-Schumann-Gymnasium, Bonn
            <br />
            Abitur 1998
          </p>
        </div>
        <div>
          <H1>Sprachen</H1>
          <dl className="grid grid-cols-3 text-lg">
            <dt className="font-bold all-small-caps">Deutsch</dt>
            <dd className="col-span-2">Muttersprache</dd>
            <dt className="font-bold all-small-caps">Englisch</dt>
            <dd className="col-span-2">fließend</dd>
          </dl>
        </div>
        <div>
          <H1>Technologien &amp; Methoden</H1>
          <ul className="-mx-1.5 inline-flex flex-wrap gap-x-2 items-baseline children:px-1.5 children:py-3 children:leading-[0.5rem] children:transition-all hover:children:scale-150 hover:children:bg-white/10 hover:children:text-white hover:children:rounded hover:children:backdrop-blur-[2px]">
            {skills
              .sort((a: Skill, b: Skill) =>
                a.technology > b.technology ? 1 : -1
              )
              .map((t: Skill) => (
                <li
                  key={t.technology}
                  className={classNames(
                    {
                      'text-sm text-gray-600': t.level === 1,
                      'text-lg text-gray-500': t.level === 2,
                      'text-2xl text-gray-400': t.level === 3,
                      'text-3xl text-gray-300': t.level === 4,
                    },
                    'print:text-black'
                  )}
                >
                  <a href={t.url}>{t.technology}</a>
                </li>
              ))}
          </ul>
        </div>
      </section>
      <section className="flex-2 space-y-16">
        <div>
          <H1>Profil</H1>
          <p className="text-lg hyphens-auto sm:hyphens-none">
            Ich bin seit mehr als 20 Jahren Softwareentwickler und vorwiegend im
            Bereich Web &amp; Mobile tätig. Dabei habe ich in verschiedenen
            Konstellationen gearbeitet: als{' '}
            <em>Gründer und Geschäftsführer/CTO</em> in zwei Unternehmen, als{' '}
            <em>Web-Entwickler</em> bei einer Designagentur, als{' '}
            <em>Freelancer</em> für Agenturen und andere Auftraggeber sowie als{' '}
            <em>Head of Development</em> in einer Digitalagentur.
          </p>
        </div>
        <div>
          <H1>Berufserfahrung</H1>
          <div className="space-y-8">
            <Job
              yearFrom={1997}
              yearTo={2008}
              employer="webfactory GmbH"
              location="Bonn/Berlin"
              jobTitle="Gründer &amp; Geschäftsführer"
              url="https://www.webfactory.de/"
              focus="Gestaltung und Entwicklung von Websites und Web-Applikationen"
              clients="Deutsche Telekom AG/Schulen ans Netz e.V., Gemeinsamer Bundesausschuss, RuhrTriennale, Bundeszentrale für gesundheitliche Aufklärung (BZgA), Berner AG"
              technologies="PHP, mySQL, HTML, CSS, JavaScript, etc."
            />
            <Job
              yearFrom={2009}
              yearTo={2014}
              employer="Web &amp; Mobile Developer"
              location="Berlin"
              jobTitle="Freelance, für Agenturen und eigene Auftraggeber"
              url="https://www.pb.io/"
              focus="Entwicklung von Websites sowie Web- und Mobile-Applikationen"
              clients="Siemens MedMuseum, Bertelsmann Stiftung, Deutsche Telekom Creation Center, Kultur Projekte Berlin, Universum Group, ESMOD Fashion School, ubitricity"
              technologies="Python/Django, PostgreSQL, HTML, CSS, JavaScript, AngularJS, Objective-C, Ruby, etc."
            />
            <Job
              yearFrom={2014}
              yearTo={2019}
              employer="A Color Bright GmbH"
              location="Berlin"
              jobTitle="Head of Development"
              url="https://www.acolorbright.com/"
              focus="Entwicklung von Websites und Web-Applikationen"
              clients="Red Bull, H&amp;M, Ableton, AnyDesk, Elsewhere Brooklyn"
              technologies="Python/Django, JavaScript, React, AngularJS, Ruby/Rails, PHP, Docker, etc."
            />
            <Job
              yearFrom={2019}
              yearTo="jetzt"
              employer="paeljo GmbH"
              location="Berlin"
              jobTitle="Gründer &amp; Geschäftsführer/CTO"
              url="https://www.paeljo.de/"
              focus="Entwicklung und Vertrieb von WEG+, einer Softwarelösung für Wohnungseigentümergemeinschaften (WEG). "
              technologies="Python/Django, PostgreSQL, JavaScript, AlpineJS, React, Next.js, Ionic Framework, GraphQL, Tailwind CSS, Heroku, AWS, etc."
            />
            <Job
              yearFrom={2023}
              yearTo={2024}
              employer="Selfmade Energy"
              location="Berlin"
              jobTitle="Senior Full-Stack Developer"
              url="https://www.selfmade-energy.com/"
              focus="Weiterentwicklung der Vergleichsplattform für Solaranlagen und Wärmepumpen"
              technologies="Django, Next.js, Tailwind CSS, AWS, Docker, Terraform"
            />
          </div>
        </div>

        <div>
          <H1>Sonstige Tätigkeiten</H1>
          <div className="space-y-8">
            <Job
              yearFrom={2010}
              employer="Fachhochschule Potsdam (FHP)"
              location="Fachbereich Design"
              jobTitle="Lehrauftrag zum Thema „Mobile Web Apps“ im SS 2010"
            />
            <Job
              yearFrom={2010}
              yearTo={2013}
              employer="Hochschule für Gestaltung (HfG)"
              location="Schwäbisch Gmünd"
              jobTitle="Mehrere Workshops zum Thema „Mobile Web Apps“ im Rahmen des Masterstudiengangs „Communication Planning and Design“"
            />
            <Job
              yearFrom={2012}
              employer="Università Iuav di Venezia"
              location="IxD Lab"
              jobTitle="Workshop zum Thema „Things, Phones and Spaces“ im Rahmen des Masterstudiengangs „Interaction Design“ von Gillian Crampton Smith und Philip Tabor"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CV;
