import { createMemoryHistory, createRouter } from 'vue-router'
import SearchView from '@/views/SearchView.vue'
import WatchView from '@/views/WatchView.vue'

const routes = [
  { path: '/', component: SearchView },
  { path: '/watched', component: WatchView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export { router }
