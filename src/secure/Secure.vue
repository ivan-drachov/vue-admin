<template>
  <Nav/>
  <div class="container-fluid">
    <div class="row">

      <Menu/>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">

        <router-view v-if="user?.id"/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import {onMounted, ref} from "vue";
import Menu from "@/secure/components/Menu.vue";
import Nav from "@/secure/components/Nav.vue";
import axios from "axios";
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import {User} from "@/classes/user";

export default {
  name: "Secure",
  components: {
    Menu,
    Nav
  },
  setup(){
    const router = useRouter();
    const user = ref(null);
    const store = useStore();
    onMounted(async () => {
      try {
        const response = await axios.get('user');
        const u: User = response.data.data;
        await store.dispatch('User/setUser', new User(
            u.id,
            u.first_name,
            u.last_name,
            u.email,
            u.role,
            u.permissions
        ));
        user.value = response.data.data;
      }catch (e){
        await router.push('/login');
      }

    });
    return {
      user
    };
  }
}
</script>

<style scoped>

</style>