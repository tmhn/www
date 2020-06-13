import { Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  // const { site } = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <header className="pt-12 bg-orange-200">
      <div className="flex flex-wrap items-center justify-end max-w-4xl p-4 mx-auto md:p-8">
        <button
          className="flex items-center block px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/about`,
              title: `Projects`,
            },
            {
              route: `/contact`,
              title: `Blog`,
            },
            {
              route: `/contact`,
              title: `About`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-sm text-gray-700 no-underline md:inline-block md:mt-0 md:ml-6 font-sub"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
