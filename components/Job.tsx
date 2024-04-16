import A from './A';
import H2 from './H2';
import H3 from './H3';
import P from './P';

interface JobProps {
  yearFrom: number;
  yearTo?: number | string;
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
      {yearTo ? <> – {yearTo}</> : null}
    </div>
    <div className="col-span-5 space-y-2">
      <div>
        <H2>
          <span className="text-white print:text-black font-bold">
            {employer}
          </span>{' '}
          {location}
        </H2>
        <P>
          {jobTitle}{' '}
          {url ? (
            <>
              &middot; <A href={url}>{new URL(url).host}</A>
            </>
          ) : null}
        </P>
      </div>

      {focus ? (
        <div>
          <H3>Schwerpunkte</H3>
          <P>{focus}</P>
        </div>
      ) : null}

      {clients ? (
        <div>
          <H3>Auftraggeber (Auswahl)</H3>
          <P>{clients}</P>
        </div>
      ) : null}

      {technologies ? (
        <div>
          <H3>Technologien</H3>
          <P>{technologies}</P>
        </div>
      ) : null}
    </div>
  </div>
);

export default Job;
