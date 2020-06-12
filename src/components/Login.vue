<template>
  <div class="container">
    <form>
      <input  type="text"   name="user"      v-model="input.username" placeholder="User Name">
      <input  type="text"   name="password"  v-model="input.password" placeholder="Password">
      <button type="submit" class="btn blue" @click.prevent="login()">Enviar</button>
    </form>        
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      input: {
        username : '',
        password : ''
      }
    }
  },
  mounted() {
    
  },
  methods: {
    login() {
      if ((this.input.username == 'admin') && (this.input.password == 'password')) {
        this.$store.commit('setAuthentication', true);
        this.$router.replace({ name: 'secure' });
      } else {
        alert('Usuário ou senha incorreta');
      }
    }
  }
}
</script>

<style scoped>

</style>