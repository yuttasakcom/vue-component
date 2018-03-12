const tabsTemplate = `
  <div class="container mt-5">
    <ul class="nav nav-tabs">
        <li class="nav-item"><a :class='{"nav-link":true, active: isActiveComponentA}' href="" @click.prevent="selectedComponent = 'ComponentA'">Component A</a></li>
        <li class="nav-item"><a :class='{"nav-link":true, active: isActiveComponentB}' href="" @click.prevent="selectedComponent = 'ComponentB'">Component B</a></li>
    </ul>
    <component :is="selectedComponent" class="container mt-3"></component>
  </div>
`

Vue.component('tabs', {
  template: tabsTemplate,
  data: () => ({
    selectedComponent: 'ComponentA',
    isActiveComponentA: true,
    isActiveComponentB: false
  }),
  watch: {
    selectedComponent (component) {
      if (component === 'ComponentA') {
        this.isActiveComponentA = true
        this.isActiveComponentB = false
      }

      if (component === 'ComponentB') {
        this.isActiveComponentA = false
        this.isActiveComponentB = true
      }
    }
  }
})
