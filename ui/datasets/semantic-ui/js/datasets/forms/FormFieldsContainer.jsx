import * as React from "react";

import { Specimen, ImageAcquisition, SamplePreparation } from "@ufchjh/czbi-ui_lib";

import {
  useFormConfig,
  FormikStateLogger,
  TextField,
  StringArrayField,
  CreatibutorsField,
} from "@js/oarepo_ui/forms";
import { AccordionField } from "react-invenio-forms";
import { i18next } from "@translations/i18next";
import { UppyUploader } from "@js/invenio_rdm_records";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const FormFieldsContainerComponent = ({ record }) => {
  console.log("debug FromFieldsContainer");
  console.log("EMMA DEBUG", require.resolve("@js/oarepo_ui/forms"));
  const formConfig = useFormConfig();
  const { filesLocked } = formConfig;
  return (
    <React.Fragment>
      <AccordionField
        includesPaths={[
          "metadata.creators",
          "metadata.publication_date",
          "metadata.resource_type",
        ]}
        active
        label={i18next.t("Povinné údaje")}
      >
        <CreatibutorsField
          fieldPath="metadata.creators"
          modal={{ addLabel: "Add", editLabel: "Edit" }}
          schema="creators"
        />

        <TextField fieldPath="metadata.publication_date" />
        <TextField fieldPath="metadata.resource_type.id" />
      </AccordionField>

      <AccordionField
        includesPaths={["metadata.title"]}
        active
        label={i18next.t("Basic information")}
      >
        <TextField fieldPath="metadata.title" />
      </AccordionField>
      <AccordionField
        includesPaths={["files.enabled"]}
        active
        label={
          <label htmlFor="files.enabled">{i18next.t("Files upload")}</label>
        }
        data-testid="filesupload-button"
      >
        <UppyUploader
          isDraftRecord={!record.is_published}
          config={formConfig}
          quota={formConfig.quota}
          decimalSizeDisplay={formConfig.decimal_size_display}
          allowEmptyFiles={formConfig.allow_empty_files}
          fileUploadConcurrency={formConfig.file_upload_concurrency}
          showMetadataOnlyToggle={false}
          filesLocked={filesLocked}
        />
      </AccordionField>

      <AccordionField
        includesPaths={["metadata.specimen"]}
        active
        label={i18next.t("Specimen")}
      >
        <Specimen fieldPath="metadata.specimen"></Specimen>
      </AccordionField>

      <AccordionField
        includesPaths={["metadata.samplePreparation"]}
        active
        label={i18next.t("Sample preparation")}
      >
        <SamplePreparation></SamplePreparation>
      </AccordionField>

      <AccordionField
        includesPaths={["metadata.imageAcquisition"]}
        active
        label={i18next.t("ImageAcquisition")}
      >
        <ImageAcquisition></ImageAcquisition>
      </AccordionField>

      {process.env.NODE_ENV === "development" && <FormikStateLogger />}
    </React.Fragment>
  );
};

FormFieldsContainerComponent.propTypes = {
  record: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    record: state.deposit.record,
  };
};

export default connect(mapStateToProps)(FormFieldsContainerComponent);
