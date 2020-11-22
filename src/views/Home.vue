<template>
  <div class="home">
    <Navbar />
    <myslider />
    <Footbar />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation'
import Footer from '@/components/footer'
import slider from '@/components/slider'

export default {
  name: 'Home',
  components: {
    Navbar: Navigation,
    Footbar: Footer,
    myslider: slider
  }
}
</script>
