//component for making box around the saved results

import React from "react";
import { Box, Section } from "../Layout";
import { SavedResult } from "./";

export const SavedResults = props => (
  <Section>
    <Box>
      <h1 className="title">Saved Articles</h1>
      {props.results.map(result => {
        return (
          <SavedResult
            key={result.timesID}
            result={result}
          />
        );
      })}
    </Box>
  </Section>
);