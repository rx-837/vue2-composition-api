<template>
  <div>
    <h1>ExampleComponent</h1>

    <div>
        {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

const ExampleComponent = defineComponent({
  setup() {
    return {
      text: "text",
    };
  },
});

export default ExampleComponent;
</script>
