import React from "react";
import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <div>
      <h2 className="py-5 text-xl text-subHeading">{title}</h2>
      <div className="border-t border-break" />
      <div className="my-12">{children}</div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}

export default Section;