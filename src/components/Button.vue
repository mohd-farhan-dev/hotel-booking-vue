<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  name: 'ButtonComp',
  props: {
    text: String
  }
}
</script>