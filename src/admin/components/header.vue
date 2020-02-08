<template lang="pug">
  header.header
    .container
      .header__wrapper
        .header__inner
          .header__ava
            img(src="../../images/content/user.jpg").header__ava-img
          h1.header__title Никита Мастепанов
          h3.header__subtitle Панель администрирования
        .header__inner
          a.header__login(href='#') Выйти
</template>

<style lang="postcss" scoped>
  .header {
    width: 100%;
    min-height: 80px;
    background-color: #43436a;
    color: #fff;
  }

  .header__wrapper {
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__inner {
    display: flex;
    align-items: center;
  }

  .header__inner a {
    color: #fff;
  }

  .header__ava {
    width: 45px;
    height: 45px;
    overflow: hidden;
    border-radius: 50%;
  }

  .header__title {
    margin: 0 20px;
    font-size: 18px;
    font-weight: 600;
  }

  .header__subtitle {
    font-size: 14px;
    color: #b1b1ba;
  }
</style>