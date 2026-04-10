import React from "react";
import PropTypes from "prop-types";
import _get from "lodash/get";
import _join from "lodash/join";
import { Grid, Item, Label } from "semantic-ui-react";
import { i18next } from "@translations/i18next";

export const DetailsContainer = ({ result, ...rest }) => {
  const createdDate = _get(
    result,
    "ui.created_date_l10n_short",
    "No creation date found."
  );
  const title = _get(result, "metadata.title", i18next.t("No title"));
  return (
    <section>
      detail!
      <h1>{title}</h1>
    </section>
  );
};

DetailsContainer.propTypes = {
};

export default DetailsContainer;
