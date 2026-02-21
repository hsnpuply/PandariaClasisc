import { reactive } from 'vue';

const state = reactive({
  title: 'World of Warcraft®: Mists of Pandaria Classic™'
});

export function useAppController() {
  return {
    state
  };
}
