import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Section from "../components/section";

import th from "../images/th.jpg";

function IndexPage() {
  return (
    <div className="bg-paper">
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="">
        <div className="flex flex-row">
          <div className="justify-between">
            <h2 className="inline-block py-3 mb-10 text-4xl font-bold bg-yellow-400 font-display">
              Tom Hanson
            </h2>

            <p className="w-5/6 text-sm leading-loose text-copy">
              I’m a Software Engineer, currently at <a className="text-red" href="http://and.digital">AND Digital</a> in Leeds, building cool stuff with React, Node & AWS. Powered by flat whites & cookies.
            </p>
          </div>
          <img
            alt="Cat and human sitting on a couch"
            className="w-1/3 rounded"
            src={th}
          />
        </div>
      </section>
        <Section title="About">
          <p className="w-4/6 text-sm leading-loose text-copy">
            I’m a Software Engineer, currently at <a className="text-red" href="http://and.digital">AND Digital</a> in Leeds and have been since April 2019. I was previously a Software Engineer at <a className="text-bet" href="https://www.skybetcareers.com/">Sky Betting & Gaming</a>. I tend to work with React, Node.js, React Native & AWS.
          </p>
        </Section>
        <Section title="Projects"></Section>
        <Section title="Blog"></Section>
    </Layout>
    </div>
  );
}

export default IndexPage;
