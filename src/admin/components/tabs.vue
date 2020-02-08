<template lang="pug">
  <section class="tabs">
    <div class="container">
      <div class="tabs__wrapper">
        <a href="#" class="tabs__item">Обо мне</a>
        <a href="#" class="tabs__item">Работы</a>
        <a href="#" class="tabs__item">Отзывы</a>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
  .tabs {
    min-height: 80px;
    background-color: #fff;
  }

  .tabs__wrapper {
    min-height: 80px;
    display: flex;
    justify-content: flex-start;
  }

  .tabs__item {
    min-width: 125px;
    min-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #414c63;
    border-bottom: 2px solid transparent;
  }

  .tabs__item:hover {
    transition: 0.5s;
    border-color: #383bcf;
    color: #383bcf;
  }
</style>