<template>
  <div>
    <h1>App</h1>

    <div>
      <ExampleComponent />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ExampleComponent from "./components/ExampleComponent.vue";

const App = defineComponent({
  components: {
    ExampleComponent,
  },
  setup() {
    return {
      name: "ExampleComponent",
    };
  },
});

export default App;
</script>
