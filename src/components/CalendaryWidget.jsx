import React from "react";
import ReactHtmlParser from "react-html-parser";

const CalendlyWidget = () => {
  const calendlyWidget = `
    <div
      class="calendly-inline-widget"
      data-url="https://calendly.com/martingramajo08/sistema-de-citas"
      style={{ minWidth: "320px", height: "700px" }}
    ></div>
    <script
      type="text/javascript"
      src="https://assets.calendly.com/assets/external/widget.js"
      async
    ></script>
  `;

  return <div>{ReactHtmlParser(calendlyWidget)}</div>;
};

export default CalendlyWidget;
