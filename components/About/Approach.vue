<template>
  <div
    v-editable="blok"
    class="container-fluid approach"
    :style="{
      background: 'url(' + blok.background.filename + ') no-repeat',
      'background-size': 'cover'
    }"
  >
    <div class="row" data-aos="fade-up">
      <div class="col-6" data-aos="fade-right">
        <h3>{{ blok.headline1 }}</h3>
        <rich-text-renderer :document="blok.approach" />
      </div>
      <div class="col-6 number" data-aos="fade-left">
        <h3>{{ blok.headline2 }}</h3>
        <ul>
          <li v-for="img in blok.image" :key="img._uid">
            <div>
              <img :src="img.image.filename" :alt="img.image.filename" />
            </div>
            <span>{{ img.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Approach",
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.approach {
  color: white;
  font-size: 20px;
  padding: 70px 200px;
}

.approach h3 {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
}

.number h3 {
  text-align: center;
  margin-bottom: 40px;
}

.number ul {
  display: flex;
  justify-content: space-around;
}

.number ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.number ul li div {
  width: 100px;
  height: 100px;
}

.number ul li div img {
  width: 100%;
}

.number ul li span {
  font-weight: 600;
  margin-top:10px;
}
</style>
