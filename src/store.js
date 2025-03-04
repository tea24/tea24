import { reactive } from 'vue'
import ITEMS from './items/data.json';

export const store = reactive({
  cart: [],
  items: ITEMS
})