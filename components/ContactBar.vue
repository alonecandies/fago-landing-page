<template>
  <div data-aos="fade-down" class="container-fluid">
    <div class="row">
      <p class="col-2"><i class="fa fa-envelope-o"></i>support@company.com</p>
      <p class="col-2"><i class="fa fa-phone"></i>(+84)9736311899</p>
      <p class="col-8"><i class="fa fa-question-circle"></i>Support & FAQs</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container-fluid {
  background: var(--secondary-color);
  padding-top:15px;  
  padding-bottom:15px;  
}

p {
  padding: 0;
  margin: 0;
  color:white;
}

p:nth-child(1),p:nth-child(2){
  text-align: center;
}

p:nth-child(3) {
  text-align: right;
  padding-right:55px;
}

p i{
  margin-right: 10px;
}
</style>
