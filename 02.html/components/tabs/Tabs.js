const tabsTemplate = `
    <div class="container mt-5">
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a :class='{"nav-link":true, active: componentAactive}' href="" @click.prevent="selected('component-a')">Component A</a>
            </li>
            <li class="nav-item">
                <a :class='{"nav-link":true, active: componentBactive}' href="" @click.prevent="selected('component-b')">Component B</a>
            </li>
        </ul>
        <div class="container mt-2">
            <component-a v-if="componentAactive" />
            <component-b v-if="componentBactive" />
        </div>
    </div>
`

Vue.component('tabs', {
  template: tabsTemplate,
  data: () => ({
    componentAactive: true,
    componentBactive: false
  }),
  methods: {
    selected (componentName) {
      switch (componentName) {
        case 'component-a':
          this.componentAactive = true
          this.componentBactive = false
          break
        case 'component-b':
          this.componentAactive = false
          this.componentBactive = true
          break
        default:
          break
      }
    }
  }
})
