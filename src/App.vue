<template>
  <div class="app">
    <header class="header">
      <div class="container">
        <nav class="navbar">
          <button @click="$router.push('/')" class="navbar__link">Main</button>
          <button @click="$router.push('/posts')" class="navbar__link">Posts</button>
          <button @click="$router.push('/store')" class="navbar__link">Posts Vuex</button>
          <button @click="$router.push('/composition')" class="navbar__link">Posts Composition</button>
        </nav>
      </div>
    </header>
    <main class="main">
      <router-view/>
    </main>
    <footer class="footer">
      <div class="container">
        Footer
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
}

body {
  font-size: 1.6rem;
  font-family: monospace;
  line-height: 1.2;
}

button {
  cursor: pointer;
}

.header {
  border-bottom: 0.4rem solid seagreen;
}

.main {
  min-height: 100vh;
}

.footer {
  border-top: 0.4rem solid seagreen;
}

.header,
.footer,
.main {
  padding: 4rem 0;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 4rem;

  max-width: 100rem;
  margin: 0 auto;
}

.navbar {
  display: flex;
  align-items: center;
  gap: 2rem;

  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}
</style>
