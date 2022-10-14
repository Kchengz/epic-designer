import { reactive } from "vue";

class FormState {
  formData = reactive<any>({});

  getFormData() {
    return this.formData;
  }
}

export const formState = new FormState();

export const useFormData = ()=>formState.getFormData();
