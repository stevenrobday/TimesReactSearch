//wrapper for all search results

import React from "react";
import { Box, Section } from "../Layout";
import { SearchResult } from "./";

export const SearchResults = props => (
  <Section>
    <Box>
      <h1 className="title">Search Results</h1>
      {props.results.map(result => {
        return (
          <SearchResult
            key={result.timesID}
            result={result}
          />
        );
      })}
    </Box>
  </Section>
);