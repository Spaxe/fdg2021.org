import React from "react";

export default function Organisations() {
  return (
    <>
      <aside>
        <h1 className="mb-4 uppercase">Sponsors</h1>
        <div className="flex justify-start items-center">
          <a
            className="block w-64 mr-8"
            href="https://uqam.ca/en/information/about/"
            title="Université du Québec à Montréal"
          >
            <img src="static/sponsors/UQAM.png" alt="UQAM" />
          </a>
          <a
            className="block w-48 mr-8"
            href="https://www.microsoft.com"
            title="Microsoft"
          >
            <img src="static/sponsors/Microsoft.png" alt="Microsoft" />
          </a>
        </div>
      </aside>

      {/* <aside>
            <h1 className="mb-4 uppercase">ACM ORGANISATIONS</h1>
            <div className="flex justify-start items-center">
            <a
                className="block mr-8"
                href="https://dl.acm.org/"
                title="Go to ACM Digital Library Website"
              >
                <img className="h-10" src="static/acm/dl.svg" alt="ACM Digital Library" />
              </a>
              <a
                className="block mr-8"
                href="https://www.acm.org/"
                title="Go to ACM Website"
              >
                <img className="h-10" src="static/acm/acm.png" alt="Association for Computing Machinery" />
              </a>
              <a
                className="block mr-8"
                href="http://sigai.acm.org/"
                title="Go to SIGAI Website"
              >
                <img className="h-10" src="static/acm/sigai.png" alt="ACM Special Interest Group on Artificial Intelligence" />
              </a>
            </div>
          </aside> */}
    </>
  );
}
