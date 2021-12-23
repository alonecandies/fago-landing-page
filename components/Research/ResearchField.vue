<template>
  <div class="col-12">
    <div
      data-aos="zoom-in"
      v-editable="blok"
      class="research-card"
      @click="isShow = !isShow"
    >
      <div class="image">
        <img :src="blok.image.filename" :alt="blok.title" />
      </div>
      <h2>{{ blok.title }}</h2>
      <a>VIEW MORE <i class="fa fa-arrow-down"></i></a>
    </div>
    <ul class="detail" :class="{ hide: !isShow, show: isShow }">
      <paper-card
        v-for="paper in blok.paper"
        :key="paper._uid"
        :paper="paper"
      ></paper-card>
    </ul>
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
.research-card {
  width: 100%;
  border-radius: 8px;
  box-shadow: 3px 4px 16px 3px rgba(0, 0, 0, 0.25);
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  padding: 15px 20px;
}

.research-card:hover {
  background: linear-gradient(203.95deg, #7861ef 8.38%, #3c3592 84.4%);
}

.research-card:hover h2,
.research-card:hover a {
  color: white !important;
}

.image {
}

.image img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  background: white;
}

.research-card h2 {
  font-size: 20px;
  font-weight: 600;
  margin-left: 15px;
}

.research-card a {
  position: absolute;
  right: 15px;
  text-align: right;
  font-size: 12px;
  text-decoration: none;
  outline: none;
}

.hide {
  height: 0px;
  opacity: 0;
}

.show {
  height: auto;
  opacity: 1;
}

.detail {
  overflow: hidden;
  transition: all 0.4s ease 0s;
  background: linear-gradient(180deg, #765feb 0%, #c4c3fc 100%);
  border-radius: 0px 0px 8px 8px;
  transform: scale(0.99);
}
</style>
