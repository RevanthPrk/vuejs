// composables/useCounter.js
import { ref, computed } from 'vue'

export function useCounter() {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  const increment = () => count.value++
  const decrement = () => count.value--

  return { count, increment, decrement, doubleCount }
}