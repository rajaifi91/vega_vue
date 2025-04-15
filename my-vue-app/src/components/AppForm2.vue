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
          data-vega-form="Password"
          label="Password"
          required="true"
          type="password"
        ></VegaInput>
        <VegaInput
          data-vega-form="Re-type Password"
          label="Re-type Password"
          required="true"
          type="password"
        ></VegaInput>
        <VegaInput
          data-vega-form="Phone"
          required="true"
          label="Phone"
          :mask-config="{ type: 'phone' }"
          placeholder="(999) 999-9999"
          prefix-icon="mobile-phone"
    ></VegaInput>
    </VegaFlex>

      <VegaFlex
        direction="row"
        gap="size-8"
        justify-content="center"
      >
        <VegaButton variant="secondary" @vegaClick="reset">Reset</VegaButton>
        <VegaButton variant="secondary" @vegaClick="SubmitData">Register</VegaButton>
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
       if(this.isValid)
        VegaNotify.open({
        duration: 4000,
        message: `Registration Successful`,
        type:"success"
});
    },
  },
  };
  </script>