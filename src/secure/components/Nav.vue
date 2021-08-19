<template>
  <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>

    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <router-link to="/profile" class="px-3 text-white">{{user?.first_name}} {{user?.last_name}}</router-link>
        <a class="text-white px-3" href="javascript:void(0)" @click="logout">Sign out</a>
      </div>
    </div>
  </header>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">


    </div>
  </nav>
</template>

<script>
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "Nav",
  props: ['user'],
  setup() {
    const router = useRouter();
    const store = useStore();
    const user = computed(()=>store.state.User.user);
    const logout = () => {
      localStorage.clear();
      router.push('/login');
    }
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      logout, user
    }
  }
}
</script>
