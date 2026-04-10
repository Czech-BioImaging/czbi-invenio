import { DepositFormApp, parseFormAppConfig } from "@js/oarepo_ui/forms";
import React from "react";
import ReactDOM from "react-dom";
import { OARepoDepositSerializer } from "@js/oarepo_ui/api";
import DetailsContainer from "./DetailsContainer";

const recordSerializer = new OARepoDepositSerializer(
//["errors", "expanded"],
//["__key"]
);

const { rootEl, config, ...rest } = parseFormAppConfig();

const overridableIdPrefix = config.overridableIdPrefix;

export const componentOverrides = {
//[`${overridableIdPrefix}.Details.container`]: DetailsContainer,
};

ReactDOM.render(
//<DepositFormApp
  //config={config}
  //{...rest}
  //recordSerializer={recordSerializer}
  //componentOverrides={componentOverrides}
///>,
//rootEl
);
