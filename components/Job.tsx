interface JobProps {
  yearFrom: number;
  yearTo?: number;
  employer: string;
  location: string;
  jobTitle: string;
  url?: string;
  focus?: string;
  clients?: string;
  technologies?: string;
}

const Job = ({
  yearFrom,
  yearTo,
  employer,
  location,
  jobTitle,
  url,
  focus,
  clients,
  technologies,
}: JobProps) => (
  <div className="sm:grid grid-cols-6">
    <div className="text-xl">
      {yearFrom}
      {yearTo ? <>-{yearTo}</> : null}
    </div>
    <div className="col-span-5 space-y-2">
      <div>
        <h2 className="text-xl">
          <span className="text-white print:text-black font-bold">
            {employer}
          </span>{' '}
          {location}
        </h2>
        <div>
          {jobTitle}{' '}
          {url ? (
            <>
              &middot; <a href={url}>{new URL(url).host}</a>
            </>
          ) : null}
        </div>
      </div>

      {focus ? (
        <div>
          <h3 className="text-gray-300 print:text-black all-small-caps font-bold tracking-wider">
            Schwerpunkte
          </h3>
          <p>{focus}</p>
        </div>
      ) : null}

      {clients ? (
        <div>
          <h3 className="text-gray-300 print:text-black all-small-caps font-bold tracking-wider">
            Auftraggeber (Auswahl)
          </h3>
          <p>{clients}</p>
        </div>
      ) : null}

      {technologies ? (
        <div>
          <h3 className="text-gray-300 print:text-black all-small-caps font-bold tracking-wider">
            Technologien
          </h3>
          <p>{technologies}</p>
        </div>
      ) : null}
    </div>
  </div>
);

export default Job;
