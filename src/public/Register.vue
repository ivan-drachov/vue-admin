<template>
  <form class="form-signin" @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please register</h1>

    <label class="sr-only" for="firstName">First Name</label>
      <input type="text" class="form-control" id="firstName" placeholder="First Name" required v-model="firstName">


    <label class="sr-only" for="lastName">Last Name</label>
      <input type="text" class="form-control" id="lastName" placeholder="Last Name" required v-model="lastName">


    <label class="sr-only" for="email">Email address</label>
      <input type="email" class="form-control" id="email" placeholder="name@example.com" required v-model="email">


    <label class="sr-only" for="password">Password</label>
      <input type="password" class="form-control" id="password" placeholder="Password" required v-model="password">


    <label class="sr-only" for="passwordConfirm">Confirm Password</label>
      <input type="password" class="form-control" id="passwordConfirm" placeholder="Confirm Password" required v-model="passwordConfirm">

    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
</template>

<script>
import {ref} from 'vue';
import  axios from 'axios';
import {useRouter} from "vue-router";
export default {
  name: "Register",
  setup(){
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');
    const passwordConfirm = ref('');
    const router = useRouter();

    const submit = async () => {
      console.log(firstName.value,
          lastName.value,
          email.value,
          password.value,
          passwordConfirm.value);
        const response = await axios.post('register',{
          first_name: firstName.value,
          last_name: lastName.value,
          email: email.value,
          password: password.value,
          password_confirm: passwordConfirm.value,
          role_id:1
        });
        console.log(response)
        await  router.push('/login');
    }
    return {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
      submit
    }
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>