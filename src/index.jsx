export default () => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Philipp Bosch &middot; Software Developer &middot; Berlin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="css/styles.css" rel="stylesheet" />
      </head>
      <body className="font-calluna text-gray-500 bg-gray-900 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 bg-fixed">
        <div className="container mx-auto my-16 md:my-32 lg:my-48 px-8 md:px-16 space-y-24 lg:space-y-32 xl:space-y-48">
          <header className="flex items-center space-x-4 lg:space-x-8">
            <img
              src="images/philipp-bosch.jpg"
              className="w-20 h-20 lg:w-36 lg:h-36 rounded-full border-2 lg:border-4 border-gray-100"
            />
            <div>
              <h1 className="text-2xl lg:text-5xl font-bold text-white">
                Philipp Bosch
              </h1>
              <h2 className="-mt-1.5 lg:mt-0 text-2xl lg:text-5xl text-gray-500">
                Software Developer
              </h2>
              <div className="mt-2 flex text-sm lg:text-lg space-x-3 lg:space-x-6">
                <div className="flex items-center space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Berlin</span>
                </div>
                <a
                  href="https://github.com/philippbosch"
                  className="flex items-center space-x-1 hover:text-gray-300 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href="mailto:hi@pb.io"
                  className="flex items-center space-x-1 hover:text-gray-300 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>hi@pb.io</span>
                </a>
              </div>
            </div>
          </header>
          <div className="space-y-16 lg:space-y-0 lg:flex lg:items-start lg:space-x-16">
            <section className="space-y-4 flex-1">
              <h1 className="text-2xl lg:text-3xl text-white">
                Technologies &amp; Platforms
              </h1>
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
              <h1 className="text-2xl lg:text-3xl text-white">
                Current Project
              </h1>
              <a href="https://www.weg.plus/" className="block">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  className="w-16 h-16 rounded-xl mt-1.5 mr-4 mb-2 shrink-0 float-left"
                >
                  <path style="fill: #fff" d="M0 0h1024v1024H0z" />
                  <path
                    d="M726.4 224.53c5.42 0 10.65 2.06 14.61 5.76l137.6 128.11a21.61 21.61 0 0 1 6.72 15.68v404.59c0 11.7-9.63 21.33-21.33 21.33H160a21.43 21.43 0 0 1-21.33-21.33v-404.8c0-6.13 2.65-11.96 7.25-16l-.32-.32 139.95-128a21.34 21.34 0 0 1 14.4-5.55H726.4v.53ZM610.13 383.36v373.97h232.54V383.36L726.4 274.99 610.13 383.36Zm-428.8 11.73v362.24h385.6V395.2h-385.6v-.1Zm126.94-128.42-93.87 85.86h366.3l92.15-85.86H308.16h.1Z"
                    style="fill: #e11d48; fill-rule: nonzero"
                  />
                  <path
                    d="M704.85 477.12a21.54 21.54 0 0 1-21.44 21.44 21.54 21.54 0 0 1-21.44-21.44 21.54 21.54 0 0 1 21.44-21.44 21.54 21.54 0 0 1 21.44 21.44m88.96 0a21.54 21.54 0 0 1-21.44 21.44 21.54 21.54 0 0 1-21.44-21.44 21.54 21.54 0 0 1 21.44-21.44 21.54 21.54 0 0 1 21.44 21.44m-67.52 145.6c27.42 0 49.92-22.4 50.03-49.5H676.05c.3 27.2 22.72 49.44 49.92 49.5"
                    style="fill: #1e40af; fill-rule: nonzero"
                  />
                </svg>
                <div>
                  <h2 className="text-2xl text-white">WEG+</h2>
                  <p className="hyphens-auto">
                    Online platform for apartment owners and property managers
                    to improve communication, transparency and efficiency within
                    owners associations (WEG).
                  </p>
                  <p>
                    <span className="underline">www.weg.plus</span>
                  </p>
                </div>
              </a>
            </section>
            <section className="space-y-4 flex-1">
              <h1 className="text-2xl lg:text-3xl text-white">
                Friends &amp; Network
              </h1>
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
                  [
                    'Derk Ebeling',
                    'Motion Design',
                    'https://www.derkebeling.de/',
                  ],
                  ['Elena Tibi', 'Speaker', 'https://www.elenatibi.de/'],
                  [
                    'SYNTOP',
                    'Interaction & Information Design',
                    'http://www.syntop.io/',
                  ],
                ].map(([name, profession, url]) => (
                  <li>
                    <a
                      href={url}
                      className="text-white flex flex-col xl:items-baseline xl:flex-row xl:space-x-2"
                    >
                      <div>{name}</div>
                      <div class="text-base text-gray-500">{profession}</div>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </body>
    </html>
  );
};
