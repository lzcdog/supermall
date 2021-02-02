<template>
  <div class="proflies">
    <profiles-nav-bar></profiles-nav-bar>
    <proflies-person class="profliesperson"></proflies-person>
    <profilesInfo class="profilesinfo"></profilesInfo>
    <profiles-xuan></profiles-xuan>
  </div>
</template>

<script>
import ProfilesXuan from '@/views/profile/profileschildren/ProfilesXuan'
import ProfilesInfo from '@/views/profile/profileschildren/ProfilesInfo'
import ProfliesPerson from '@/views/profile/profileschildren/ProfliesPerson'
import ProfilesNavBar from './profileschildren/ProfilesNavBar.vue'
  export default {
  components: { ProfilesNavBar },
    name: "Profile",
    components:{
      ProfilesNavBar,
      ProfliesPerson,
      ProfilesInfo,
      ProfilesXuan
    }
  }
</script>

<style scoped>
</style>
