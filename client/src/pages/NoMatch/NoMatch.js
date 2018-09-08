//no match funny face

import React from "react";
import { Navbar, Section, Box } from "../../components/Layout";

const NoMatch = () => (
  <div>
    <Navbar />
    <Section>
      <Box>
        <h1 className="title">404 Page Not Found</h1>
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
      </Box>
    </Section>
  </div>
);

export default NoMatch;
