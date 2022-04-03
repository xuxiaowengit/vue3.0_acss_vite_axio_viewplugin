import { watchEffect, ref } from 'vue';
export function useStorage(name, value = []) {
  let data = ref(localStorage.getItem(name) || value);
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value));
  });
  return data;
}
