<template>
  <div>
    <header>
      <header-app />
    </header>

    <main>
      <carousels />
      <films-genre-panel />
      <router-view></router-view>
    </main>

    <footer>
      <footer-app />
    </footer>
  </div>
</template>

<script>
import HeaderApp from "./components/HeaderApp";
import Carousels from "./components/Carousels";
import FilmsGenrePanel from "./components/FilmsGenrePanel";
import FooterApp from "./components/FooterApp";

export default {
  name: "App",

  components: {
    HeaderApp,
    Carousels,
    FilmsGenrePanel,
    FooterApp
  }
};
</script>
