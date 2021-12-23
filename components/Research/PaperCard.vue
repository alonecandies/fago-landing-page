<template>
  <li>
    <a :href="paper.repo" target="_blank">
      <h3>{{ paper.title }}</h3>
      <p>{{ paper.description }}</p>
      <span>{{ paper.time }}, {{ paper.paper }}</span>
    </a>
  </li>
</template>

<script>
export default {
  props: {
    paper: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
li {
  background: white;
  border-radius: 8px;
  padding: 15px 20px;
  margin: 20px;
}

li:hover {
  background: linear-gradient(203.95deg, #7861ef 8.38%, #3c3592 84.4%);
}

li:hover a h3,
li:hover a p {
  color: white !important;
}

li a {
  text-decoration: none !important;
}

li a h3 {
  font-size: 18px;
  font-weight: 600;
  color: black;
}

li a p {
  font-size: 16px;
  color: #636363;
  margin-bottom: 8px;
}

li a span {
  font-size: 12px;
  color: #636363;
  background: #e6e6e6;
  border-radius: 50px;
  padding: 5px 15px;
}
</style>
