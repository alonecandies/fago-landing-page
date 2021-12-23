<template>
  <div class="col-3">
    <div
      data-aos="zoom-in"
      v-editable="blok"
      class="major-card"
      @click="isShow = !isShow"
    >
      <div class="image">
        <img :src="blok.image.filename" :alt="blok.title" />
      </div>
      <h2>{{ blok.title }}</h2>
      <rich-text-renderer :document="blok.description" />
      <a>VIEW MORE <i class="fa fa-arrow-right"></i></a>
    </div>
    <div
      v-editable="blok"
      class="extended-card"
      :class="{ hide: !isShow, show: isShow }"
      @click="isShow = !isShow"
    >
      <div class="image">
        <img :src="blok.image.filename" :alt="blok.title" />
      </div>
      <h2>{{ blok.title }}</h2>
      <rich-text-renderer :document="blok.description" />
      <span v-if="blok.icon.length > 0">Techniques:</span>
      <ul v-if="blok.icon.length > 0" class="icons">
        <li v-for="icon in blok.icon" :key="icon._uid">
          <div>{{ icon.name }}</div>
          <span
            class="iconify"
            :data-icon="icon.icon"
            data-inline="false"
          ></span>
        </li>
      </ul>
      <a><i class="fa fa-arrow-left"> Back</i></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isShow: false
    };
  }
};
</script>

<style scoped>
li {
  list-style-type: disc;
}

.col-3 {
  position: unset;
}

.major-card {
  width: 100%;
  height: 450px;
  border-radius: 8px;
  box-shadow: 3px 4px 16px 3px rgba(0, 0, 0, 0.25);
  background: white;
  cursor: pointer;
  padding: 30px 25px;
  position: relative;
}

.major-card:hover {
  background: linear-gradient(203.95deg, #7861ef 8.38%, #3c3592 84.4%);
}

.major-card:hover h2,
.major-card:hover li,
.major-card:hover a {
  color: white !important;
}

.image {
  width: 100%;
  display: flex;
  justify-content: center;
}

.image img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  background: white;
}

.major-card h2 {
  font-size: 20px;
  margin: 20px 0px 15px 0px;
  text-align: center;
  font-weight: 600;
}

.major-card li {
  margin-left: 15px;
  font-size: 12px;
  color: #636363;
}

.major-card li p {
  margin-bottom: 5px;
}

.major-card a {
  position: absolute;
  display: block;
  width: 100%;
  text-align: right;
  font-size: 12px;
  text-decoration: none;
  right: 9%;
  bottom: 5%;
}

.hide {
  width: 0%;
  box-shadow: none;
}

.show {
  width: 100%;
  box-shadow: 3px 4px 16px 3px rgba(0, 0, 0, 0.25);
  padding: 40px;
}

.extended-card {
  position: absolute;
  height: 450px;
  background: linear-gradient(203.95deg, #7861ef 8.38%, #3c3592 84.4%);
  top: 0;
  left: 0;
  z-index: 2;
  border-radius: 16px;
  transition: all 0.4s ease 0s;
  cursor: pointer;
  overflow: hidden;
  color: white;
}

.extended-card h2 {
  font-size: 34px;
  margin: 20px 0px;
  text-align: center;
  font-weight: 600;
}

.extended-card li {
  margin-left: 25px;
  font-size: 16px;
}

.extended-card a {
  position: absolute;
  display: block;
  width: 100%;
  text-align: right;
  font-size: 16px;
  text-decoration: none;
  right: 3%;
  bottom: 5%;
  color: white;
}

.extended-card .icons {
  display: flex;
  align-items: center;
  margin-left: 25px;
}

.extended-card .icons li {
  position: relative;
  list-style-type: none;
}

.extended-card .icons li svg {
  font-size: 30px;
  margin: 20px 0px;
}

.extended-card .icons li div {
  font-size: 17px;
  position: absolute;
  top: -13px;
  right: 50%;
  transform: translateX(50%);
  color: black;
  background-color: white;
  opacity: 0;
  font-weight: 700;
  padding: 0px 5px;
}

.extended-card .icons li:hover > div {
  transition: opacity 0.3s;
  opacity: 1;
}
</style>
