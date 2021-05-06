import React from "react";
import UQAM from "./assets/static/sponsors/UQAM.png";
import Microsoft from "./assets/static/sponsors/Microsoft.png";
import ACM_InCooperation from "./assets/static/acm/acm.png";
import SIGAI from "./assets/static/acm/sigai.png";
import SIGCHI from "./assets/static/acm/sigchi.png";
import SIGGRAPH from "./assets/static/acm/siggraph.png";

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
            <img src={UQAM} alt="UQAM" />
          </a>
          <a
            className="block w-48 mr-8"
            href="https://www.microsoft.com"
            title="Microsoft"
          >
            <img src={Microsoft} alt="Microsoft" />
          </a>
        </div>
      </aside>

      <aside>
            <h1 className="mb-4 uppercase">IN COOPERATION WITH</h1>
            <div className="flex justify-start items-center">
            <a
                className="block mr-8"
                href="https://www.acm.org/special-interest-groups/"
                title="ACM In-cooperation"
              >
                <img className="h-10" src={ACM_InCooperation} alt="ACM In-cooperation" />
              </a>
              <a
                className="block mr-8"
                href="http://sigai.acm.org/"
                title="Go to SIGAI Website"
              >
                <img className="h-10" src={SIGAI} alt="ACM Special Interest Group on Artificial Intelligence" />
              </a>
              <a
                className="block mr-8"
                href="https://sigchi.org/"
                title="Go to SIGCHI Website"
              >
                <img className="h-10" src={SIGCHI} alt="ACM Special Interest Group on Computer-Human Interactions" />
              </a>
              <a
                className="block mr-8"
                href="http://www.siggraph.org/"
                title="Go to SIGGRAPH Website"
              >
                <img className="h-10" src={SIGGRAPH} alt="ACM Special Interest Group on Computer Graphics and Interactive Techniques" />
              </a>
            </div>
          </aside>
    </>
  );
}
