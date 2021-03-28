const refreshForm = (form, initForm) => {
  const updatedForm = form;

  for (const key in updatedForm) {
    updatedForm[key].value = initForm[key].value;
    updatedForm[key].required = initForm[key].required;
  }

  return updatedForm;
};

export { refreshForm };
