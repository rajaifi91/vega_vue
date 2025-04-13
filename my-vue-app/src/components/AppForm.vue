<template>
    <div>
    <VegaForm
      data-vega-form="profileForm"
      ref="profileForm"
      @vegaValidate="onValidate"
      @vegaSubmit="onVegaSubmit"
    >
      <VegaFlex
        direction="col"
        gap="size-14"
        margin="size-16"
      >  
      <VegaInput
          data-vega-form="firstName"
          label="First Name"
          required="true"
          placeholder="First Name"
          prefix-icon="user"
        ></VegaInput>
        <VegaInput
          data-vega-form="lastName"
          label="Last Name"
          required="true"
          placeholder="Last Name"
          prefix-icon="user"
        ></VegaInput>
        <VegaInput
          data-vega-form="Email"
          label="Email"
          required="true"
          placeholder="johndoe@gmail.com"
          prefix-icon="email"
        ></VegaInput>
        <VegaInput
          data-vega-form="Phone"
          required="true"
          label="Phone"
          :mask-config="{ type: 'phone' }"
          placeholder="(999) 999-9999"
          prefix-icon="mobile-phone"
    ></VegaInput>
        <!--<VegaInputSelect
          data-vega-form="state"
          :source="state"
          label="Input Select"
        ></VegaInputSelect>
        <VegaDatePicker
          mode="range"
          data-vega-form="workingPeriod"
          label="Working Period: "
        ></VegaDatePicker>
        <VegaRadioGroup
          data-vega-form="title"
          label="Title"
          :vega-flex-prop="{
            gap: 'size-8',
            direction: 'row',
          }"
        >
          <VegaRadio value="eng">Engineer</VegaRadio>
          <VegaRadio value="mark">Marketing Sales</VegaRadio>
          <VegaRadio value="sup">Support</VegaRadio>
        </VegaRadioGroup>
  
        <VegaCheckboxGroup
          data-vega-form="workOffice"
          label="Work Office"
          :vega-flex-prop="{ gap: 'size-8' }"
        >
          <VegaCheckbox identifier="seattle">Seattle</VegaCheckbox>
          <VegaCheckbox identifier="bay_area">Bay Area</VegaCheckbox>
        </VegaCheckboxGroup>
  
        <VegaComboBox
          data-vega-form="departments"
          :source="departments"
          label="Departments"
        ></VegaComboBox>
  
        <div>
          <VegaStepper
            data-vega-form="workYears"
            label="Work Years"
          ></VegaStepper>
        </div>
  
        <VegaColorPicker
          data-vega-form="color"
          label="Favorite Color"
        ></VegaColorPicker>
  
        <VegaTimePicker
          data-vega-form="meetingTime"
          label="Meeting Time"
        ></VegaTimePicker>
  
        <VegaImageUploader
          data-vega-form="avatar"
          label="Avatar"
        ></VegaImageUploader>-->
  
        <VegaTextarea
          required="true"
          data-vega-form="note"
          label="Message"
        ></VegaTextarea>
      </VegaFlex>
      <!--
      <VegaFlex
        gap="size-16"
        margin="size-16"
        direction="col"
      >
        <VegaFont>Form valid: {{ isValid ? "true" : "false" }}</VegaFont>
        <VegaFont>Form Values: {{ JSON.stringify(formData, null, 2) }}</VegaFont>
      </VegaFlex>
      -->

      <VegaFlex
        direction="row"
        gap="size-8"
        justify-content="center"
      >
        <!--<VegaButton @vegaClick="getValue">Log Form Value</VegaButton>
        <VegaButton @vegaClick="validate">Validate Form</VegaButton>-->
        <VegaButton variant="secondary" @vegaClick="reset">Reset</VegaButton>
        <VegaButton variant="secondary" label="Submit" @vegaClick="SubmitData">Submit</VegaButton>
      </VegaFlex>
    </VegaForm>
    </div>
  </template>

<script>
import {
  VegaForm,
  VegaInput,
  VegaFlex,
  VegaButton,
  VegaFont,
  VegaInputSelect,
  VegaDatePicker,
  VegaRadioGroup,
  VegaRadio,
  VegaCheckboxGroup,
  VegaCheckbox,
  VegaComboBox,
  VegaStepper,
  VegaColorPicker,
  VegaTimePicker,
  VegaImageUploader,
  VegaTextarea,
  VegaIcon
} from "@heartlandone/vega-vue";

  export default {
    data() {
      return {
        isValid: false,
        formData: null,
        state: [
          {
            displayName: "Label 1",
            id: "key1",
          },
          {
            displayName: "Label 2",
            id: "key2",
          },
        ],
        departments: [
          { key: "IT", label: "IT" },
          { key: "Marketing", label: "Marketing" },
          { key: "Support", label: "Support" },
        ],
      };
    },
    components: {
      VegaForm,
      VegaInput,
      VegaFlex,
      VegaButton,
      VegaFont,
      VegaInputSelect,
      VegaDatePicker,
      VegaRadioGroup,
      VegaRadio,
      VegaCheckboxGroup,
      VegaCheckbox,
      VegaComboBox,
      VegaStepper,
      VegaColorPicker,
      VegaTimePicker,
      VegaImageUploader,
      VegaTextarea,
      VegaIcon
    },
    methods: {
      async getValue() {
        this.formData = await this.$refs.profileForm.$el.getValue();
      },
      onValidate(evt) {
        this.isValid = evt.detail;
      },
      validate() {
        this.$refs.profileForm.$el.valid();
      },
      reset() {
        this.$refs.profileForm.$el.reset();
        this.formData = null;
      },
      SubmitData() {
        this.$refs.profileForm.$el.valid();
      },
    },
  };
  </script>
  
    