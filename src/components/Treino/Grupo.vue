<template>
  <div>
    <b-card :class="bgCardClass" bg-variant="primary" text-variant="white">
      <blockquote class="card-blockquote">
        <p>COSTAS E BICEPS</p>
      </blockquote>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Grupo",
  props: {
    bgColor: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      // bgColor: 2
    };
  },

  computed: {
    bgCardClass() {
      return "bg-card bg-card-" + this.bgColor.toString();
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-card {
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}

.bg-card p {
  margin-top: 45px;
  margin-bottom: 45px;
  font-weight: 700;
  transition: 0.2s cubic-bezier(0.55, 0, 0.1, 1);
  font-size: 1.5rem;
  line-height: 1.75rem;
  letter-spacing: 0.9px;
}

.bg-card-0 {
  background: #00b4db; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0083b0,
    #00b4db
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0083b0,
    #00b4db
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.bg-card-1 {
  background: #c33764; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #1d2671,
    #c33764
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #1d2671,
    #c33764
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.bg-card-2 {
  background: #f3904f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3b4371,
    #f3904f
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #3b4371,
    #f3904f
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
