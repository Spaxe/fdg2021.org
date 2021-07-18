import React, { Fragment, useState } from "react";
import ReactMarkdown from "react-markdown";
import { formatISO } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz';
import TimezoneSelect from 'react-timezone-select'
import { workshopDay, day1, day2, day3, day4 } from '../ProgramData';
import Header from "./../Header";
import Menu from "./../Menu";
import Organisations from "./../Organisations";
import Footer from "./../Footer";
import { HeadingRenderer } from "../MarkdownRenderer";

const Program = () => {
  const [scheduleFilter, setScheduleFilter] = useState(-1);
  const [timeZone, setTimeZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);

  return (
    <div className="bg-orange-100 text-primary-red overflow-x-hidden">
      <Header />

      <div className="wrapper relative lg:flex flex-row-reverse mx-auto px-2 z-20">
        {/* Main content */}
        <main className="ml-8 mt-10 pr-8">
          <ReactMarkdown source={timeZonedMd(timeZone)} renderers={{ heading: HeadingRenderer }} />

          <TimezoneSelect
            value={timeZone}
            onChange={(v: any) => setTimeZone(v.value)}
            className="timezone-select"
            theme={(theme: any) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary25: '#fbbf47',
                primary: '#fa7015',
              },
            })}
          />

          <input className="schedule-filter-input" id="schedule-all" type="radio" name="schedule-filter" value="Entire Schedule" defaultChecked={true} onInput={() => setScheduleFilter(-1)} />
          <label className="schedule-filter-label" htmlFor="schedule-all">
            Entire schedule
          </label>

          <input className="schedule-filter-input" id="schedule-0" type="radio" name="schedule-filter" value="Workshops" onInput={() => setScheduleFilter(0)} />
          <label className="schedule-filter-label" htmlFor="schedule-0">
            Workshops
          </label>

          <input className="schedule-filter-input" id="schedule-1" type="radio" name="schedule-filter" value="Day 1" onInput={() => setScheduleFilter(1)} />
          <label className="schedule-filter-label" htmlFor="schedule-1">
            Day 1
          </label>

          <input className="schedule-filter-input" id="schedule-2" type="radio" name="schedule-filter" value="Day 2" onInput={() => setScheduleFilter(2)} />
          <label className="schedule-filter-label" htmlFor="schedule-2">
            Day 2
          </label>

          <input className="schedule-filter-input" id="schedule-3" type="radio" name="schedule-filter" value="Day 3" onInput={() => setScheduleFilter(3)} />
          <label className="schedule-filter-label" htmlFor="schedule-3">
            Day 3
          </label>

          <input className="schedule-filter-input" id="schedule-4" type="radio" name="schedule-filter" value="Day 4" onInput={() => setScheduleFilter(4)} />
          <label className="schedule-filter-label" htmlFor="schedule-4">
            Day 4
          </label>

          {scheduleFilter === -1 || scheduleFilter === 0 ? <Schedule day={workshopDay} i={0} timeZone={timeZone} /> : null}
          {scheduleFilter === -1 || scheduleFilter === 1 ? <Schedule day={day1} i={1} timeZone={timeZone} /> : null}
          {scheduleFilter === -1 || scheduleFilter === 2 ? <Schedule day={day2} i={2} timeZone={timeZone} /> : null}
          {scheduleFilter === -1 || scheduleFilter === 3 ? <Schedule day={day3} i={3} timeZone={timeZone} /> : null}
          {scheduleFilter === -1 || scheduleFilter === 4 ? <Schedule day={day4} i={4} timeZone={timeZone} /> : null}

          <Organisations />
        </main>

        <Menu />
      </div>

      <Footer />
    </div>
  );
};

export default Program;

const Schedule = ({ day, i, timeZone }: any) => {
  return (
    <article>
      <h2>{i === 0 ? "Workshops" : `Conference Day ${i}`}</h2>
      <div className="schedule">
        {day.map((d: any, j: number) => {
          const dt = constructUTCDate(i, d.time, timeZone);
          const iso = formatISO(dt);
          return (
            <Fragment key={j}>
              <h3 className="schedule-datetime" key={`time-${j}`}>
                {d.time === "TBA" ? "TBA" : <>
                  <time dateTime={iso}>
                    {format(dt, "h:mm a", { timeZone })}
                  </time>
                  <br />
                  <span className="schedule-nextday">
                    {format(dt, "PPPP", { timeZone })} ({format(new Date(), "O", { timeZone })})
                  </span>
                </>}
              </h3>
              <div className={`schedule-item day-${i + 1} ${d.type}`}>
                <ScheduleItem d={d} />
              </div>
            </Fragment>);
        })}
      </div>
    </article>
  );
};

const ScheduleItem = ({ d }: any) => {
  if (d.type === "papers" || d.type === "posters") {
    return (
      <>
        <h3 className="schedule-item-title">
          {d.title}
        </h3>
        {d.presentations.map((p: any, i: number) => {
          return (
            <Fragment key={i}>
              <h4>{p.title}</h4>
              <p>{p.author}</p>
            </Fragment>
          );
        })}
      </>
    );
  }

  return (
    <>
      <h3>{d.title}</h3>
      {d.author ? <p>{d.author}</p> : null}
    </>
  );
};

const constructUTCDate = (i: string, time: string, timeZone: string) => {
  return utcToZonedTime(`2021-08-0${i + 2}T${time}:00Z`, timeZone);
};

const timeZonedMd = (timeZone: string) => `
# CONFERENCE PROGRAM
All times are displayed in **${format(new Date(), "zzzz", { timeZone })} (${format(new Date(), "O", { timeZone })})**.
`;