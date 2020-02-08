<template lang="pug">
  section.about
   .container
    .about__wrapper
      .about__header
        h2.about__header-title Блок "обо мне"
        .about__header-add
          svg#Capa_1.about__header-icon(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 512 512', style='enable-background:new 0 0 512 512;', xml:space='preserve')
            g
              g
                path(d='M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M405.333,266.667\
                c0,5.896-4.771,10.667-10.667,10.667H277.333v117.333c0,5.896-4.771,10.667-10.667,10.667h-21.333\
                c-5.896,0-10.667-4.771-10.667-10.667V277.333H117.333c-5.896,0-10.667-4.771-10.667-10.667v-21.333\
                c0-5.896,4.771-10.667,10.667-10.667h117.333V117.333c0-5.896,4.771-10.667,10.667-10.667h21.333\
                c5.896,0,10.667,4.771,10.667,10.667v117.333h117.333c5.896,0,10.667,4.771,10.667,10.667V266.667z')
          a.about__header-link(href='#') Добавить группу
    .about__inner
      .about-card
        .about-card__header
          .about-card__left
            input.about-card__input(type='text', value='Название новой группы')
          .about-card__right
            .about-card__inner
              svg.about-card__check(viewBox='0 -46 417.81333 417', width='417pt', xmlns='http://www.w3.org/2000/svg')
                path(d='m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0')
              svg.about-card__close(enable-background='new 0 0 386.667 386.667', height='512', viewBox='0 0 386.667 386.667', width='512', xmlns='http://www.w3.org/2000/svg')
                path(d='m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z')
        .about-card__content
          .about-card__item
            input.about-card__item-text-value(type='text', value='Html')
            input.about-card__item-text-number(type='text', value='90%')
            .about-card__item-inner
              svg.about-card__item-edit(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 383.947 383.947', style='enable-background:new 0 0 383.947 383.947;', xml:space='preserve')
                g
                  g
                    polygon(points='0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893      ')
                    path(d='M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04\
                    C386.027,77.92,386.027,64.373,377.707,56.053z')
              svg.about-card__item-delete(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 384 384', style='enable-background:new 0 0 384 384;', xml:space='preserve')
                g
                  g
                    path(d='M64,341.333C64,364.907,83.093,384,106.667,384h170.667C300.907,384,320,364.907,320,341.333v-256H64V341.333z')
                    polygon(points='266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333      ')
          .about-card__item
            input.about-card__item-text-value(type='text', value='Html')
            input.about-card__item-text-number(type='text', value='90%')
            .about-card__item-inner
              svg.about-card__item-edit(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 383.947 383.947', style='enable-background:new 0 0 383.947 383.947;', xml:space='preserve')
                g
                  g
                    polygon(points='0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893      ')
                    path(d='M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04\
                    C386.027,77.92,386.027,64.373,377.707,56.053z')
              svg.about-card__item-delete(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 384 384', style='enable-background:new 0 0 384 384;', xml:space='preserve')
                g
                  g
                    path(d='M64,341.333C64,364.907,83.093,384,106.667,384h170.667C300.907,384,320,364.907,320,341.333v-256H64V341.333z')
                    polygon(points='266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333      ')
          .about-card__item
            input.about-card__item-text-value(type='text', value='Html')
            input.about-card__item-text-number(type='text', value='90%')
            .about-card__item-inner
              svg.about-card__item-edit(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 383.947 383.947', style='enable-background:new 0 0 383.947 383.947;', xml:space='preserve')
                g
                  g
                    polygon(points='0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893      ')
                    path(d='M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04\
                    C386.027,77.92,386.027,64.373,377.707,56.053z')
              svg.about-card__item-delete(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 384 384', style='enable-background:new 0 0 384 384;', xml:space='preserve')
                g
                  g
                    path(d='M64,341.333C64,364.907,83.093,384,106.667,384h170.667C300.907,384,320,364.907,320,341.333v-256H64V341.333z')
                    polygon(points='266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333      ')
          .about-card__item
            input.about-card__item-text-value(type='text', value='Html')
            input.about-card__item-text-number(type='text', value='90%')
            .about-card__item-inner
              svg.about-card__item-edit(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 383.947 383.947', style='enable-background:new 0 0 383.947 383.947;', xml:space='preserve')
                g
                  g
                    polygon(points='0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893      ')
                    path(d='M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04\
                    C386.027,77.92,386.027,64.373,377.707,56.053z')
              svg.about-card__item-delete(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 384 384', style='enable-background:new 0 0 384 384;', xml:space='preserve')
                g
                  g
                    path(d='M64,341.333C64,364.907,83.093,384,106.667,384h170.667C300.907,384,320,364.907,320,341.333v-256H64V341.333z')
                    polygon(points='266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333      ')
        .about-card__bottom
          .about-card__bottom-inner
            input.about-card__bottom-text(type='text', value='новый навык')
            input.about-card__bottom-number(type='text', value='90%')
            svg#Capa_1.about__bottom-icon(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 512 512', style='enable-background:new 0 0 512 512;', xml:space='preserve')
              g
                g
                  path(d='M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M405.333,266.667\
                  c0,5.896-4.771,10.667-10.667,10.667H277.333v117.333c0,5.896-4.771,10.667-10.667,10.667h-21.333\
                  c-5.896,0-10.667-4.771-10.667-10.667V277.333H117.333c-5.896,0-10.667-4.771-10.667-10.667v-21.333\
                  c0-5.896,4.771-10.667,10.667-10.667h117.333V117.333c0-5.896,4.771-10.667,10.667-10.667h21.333\
                  c5.896,0,10.667,4.771,10.667,10.667v117.333h117.333c5.896,0,10.667,4.771,10.667,10.667V266.667z')
      // about-card
      .about-card
        .about-card__header
          .about-card__left
            input.about-card__input(type='text', value='Название новой группы')
          .about-card__right
            .about-card__inner
              svg.about-card__check(viewBox='0 -46 417.81333 417', width='417pt', xmlns='http://www.w3.org/2000/svg')
                path(d='m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0')
              svg.about-card__close(enable-background='new 0 0 386.667 386.667', height='512', viewBox='0 0 386.667 386.667', width='512', xmlns='http://www.w3.org/2000/svg')
                path(d='m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z')
        .about-card__content
          .about-card__item
            input.about-card__item-text-value(type='text', value='Html')
            input.about-card__item-text-number(type='text', value='90%')
            .about-card__item-inner
              svg.about-card__item-edit(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 383.947 383.947', style='enable-background:new 0 0 383.947 383.947;', xml:space='preserve')
                g
                  g
                    polygon(points='0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893      ')
                    path(d='M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04\
                    C386.027,77.92,386.027,64.373,377.707,56.053z')
              svg.about-card__item-delete(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 384 384', style='enable-background:new 0 0 384 384;', xml:space='preserve')
                g
                  g
                    path(d='M64,341.333C64,364.907,83.093,384,106.667,384h170.667C300.907,384,320,364.907,320,341.333v-256H64V341.333z')
                    polygon(points='266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333      ')
          .about-card__item
            input.about-card__item-text-value(type='text', value='Html')
            input.about-card__item-text-number(type='text', value='90%')
            .about-card__item-inner
              svg.about-card__item-edit(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 383.947 383.947', style='enable-background:new 0 0 383.947 383.947;', xml:space='preserve')
                g
                  g
                    polygon(points='0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893      ')
                    path(d='M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04\
                    C386.027,77.92,386.027,64.373,377.707,56.053z')
              svg.about-card__item-delete(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 384 384', style='enable-background:new 0 0 384 384;', xml:space='preserve')
                g
                  g
                    path(d='M64,341.333C64,364.907,83.093,384,106.667,384h170.667C300.907,384,320,364.907,320,341.333v-256H64V341.333z')
                    polygon(points='266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333      ')
          .about-card__item
            input.about-card__item-text-value(type='text', value='Html')
            input.about-card__item-text-number(type='text', value='90%')
            .about-card__item-inner
              svg.about-card__item-edit(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 383.947 383.947', style='enable-background:new 0 0 383.947 383.947;', xml:space='preserve')
                g
                  g
                    polygon(points='0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893      ')
                    path(d='M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04\
                    C386.027,77.92,386.027,64.373,377.707,56.053z')
              svg.about-card__item-delete(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 384 384', style='enable-background:new 0 0 384 384;', xml:space='preserve')
                g
                  g
                    path(d='M64,341.333C64,364.907,83.093,384,106.667,384h170.667C300.907,384,320,364.907,320,341.333v-256H64V341.333z')
                    polygon(points='266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333      ')
          .about-card__item
            input.about-card__item-text-value(type='text', value='Html')
            input.about-card__item-text-number(type='text', value='90%')
            .about-card__item-inner
              svg.about-card__item-edit(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 383.947 383.947', style='enable-background:new 0 0 383.947 383.947;', xml:space='preserve')
                g
                  g
                    polygon(points='0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893      ')
                    path(d='M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04\
                    C386.027,77.92,386.027,64.373,377.707,56.053z')
              svg.about-card__item-delete(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 384 384', style='enable-background:new 0 0 384 384;', xml:space='preserve')
                g
                  g
                    path(d='M64,341.333C64,364.907,83.093,384,106.667,384h170.667C300.907,384,320,364.907,320,341.333v-256H64V341.333z')
                    polygon(points='266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333      ')
        .about-card__bottom
          .about-card__bottom-inner
            input.about-card__bottom-text(type='text', value='новый навык')
            input.about-card__bottom-number(type='text', value='90%')
            svg#Capa_1.about__bottom-icon(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 512 512', style='enable-background:new 0 0 512 512;', xml:space='preserve')
              g
                g
                  path(d='M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M405.333,266.667\
                  c0,5.896-4.771,10.667-10.667,10.667H277.333v117.333c0,5.896-4.771,10.667-10.667,10.667h-21.333\
                  c-5.896,0-10.667-4.771-10.667-10.667V277.333H117.333c-5.896,0-10.667-4.771-10.667-10.667v-21.333\
                  c0-5.896,4.771-10.667,10.667-10.667h117.333V117.333c0-5.896,4.771-10.667,10.667-10.667h21.333\
                  c5.896,0,10.667,4.771,10.667,10.667v117.333h117.333c5.896,0,10.667,4.771,10.667,10.667V266.667z')
      // about-card
      .about-card
        .about-card__header
          .about-card__left
            input.about-card__input(type='text', value='Название новой группы')
          .about-card__right
            .about-card__inner
              svg.about-card__check(viewBox='0 -46 417.81333 417', width='417pt', xmlns='http://www.w3.org/2000/svg')
                path(d='m159.988281 318.582031c-3.988281 4.011719-9.429687 6.25-15.082031 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.246093l15.082031-15.085938c12.503907-12.5 32.75-12.5 45.25 0l75.199219 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.085938c12.5 12.5 12.5 32.765624 0 45.246093zm0 0')
              svg.about-card__close(enable-background='new 0 0 386.667 386.667', height='512', viewBox='0 0 386.667 386.667', width='512', xmlns='http://www.w3.org/2000/svg')
                path(d='m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z')
        .about-card__content
          .about-card__item
            input.about-card__item-text-value(type='text', value='Html')
            input.about-card__item-text-number(type='text', value='90%')
            .about-card__item-inner
              svg.about-card__item-edit(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 383.947 383.947', style='enable-background:new 0 0 383.947 383.947;', xml:space='preserve')
                g
                  g
                    polygon(points='0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893      ')
                    path(d='M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04\
                    C386.027,77.92,386.027,64.373,377.707,56.053z')
              svg.about-card__item-delete(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 384 384', style='enable-background:new 0 0 384 384;', xml:space='preserve')
                g
                  g
                    path(d='M64,341.333C64,364.907,83.093,384,106.667,384h170.667C300.907,384,320,364.907,320,341.333v-256H64V341.333z')
                    polygon(points='266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333      ')
          .about-card__item
            input.about-card__item-text-value(type='text', value='Html')
            input.about-card__item-text-number(type='text', value='90%')
            .about-card__item-inner
              svg.about-card__item-edit(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 383.947 383.947', style='enable-background:new 0 0 383.947 383.947;', xml:space='preserve')
                g
                  g
                    polygon(points='0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893      ')
                    path(d='M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04\
                    C386.027,77.92,386.027,64.373,377.707,56.053z')
              svg.about-card__item-delete(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 384 384', style='enable-background:new 0 0 384 384;', xml:space='preserve')
                g
                  g
                    path(d='M64,341.333C64,364.907,83.093,384,106.667,384h170.667C300.907,384,320,364.907,320,341.333v-256H64V341.333z')
                    polygon(points='266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333      ')
          .about-card__item
            input.about-card__item-text-value(type='text', value='Html')
            input.about-card__item-text-number(type='text', value='90%')
            .about-card__item-inner
              svg.about-card__item-edit(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 383.947 383.947', style='enable-background:new 0 0 383.947 383.947;', xml:space='preserve')
                g
                  g
                    polygon(points='0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893      ')
                    path(d='M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04\
                    C386.027,77.92,386.027,64.373,377.707,56.053z')
              svg.about-card__item-delete(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 384 384', style='enable-background:new 0 0 384 384;', xml:space='preserve')
                g
                  g
                    path(d='M64,341.333C64,364.907,83.093,384,106.667,384h170.667C300.907,384,320,364.907,320,341.333v-256H64V341.333z')
                    polygon(points='266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333      ')
          .about-card__item
            input.about-card__item-text-value(type='text', value='Html')
            input.about-card__item-text-number(type='text', value='90%')
            .about-card__item-inner
              svg.about-card__item-edit(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 383.947 383.947', style='enable-background:new 0 0 383.947 383.947;', xml:space='preserve')
                g
                  g
                    polygon(points='0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893      ')
                    path(d='M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04\
                    C386.027,77.92,386.027,64.373,377.707,56.053z')
              svg.about-card__item-delete(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 384 384', style='enable-background:new 0 0 384 384;', xml:space='preserve')
                g
                  g
                    path(d='M64,341.333C64,364.907,83.093,384,106.667,384h170.667C300.907,384,320,364.907,320,341.333v-256H64V341.333z')
                    polygon(points='266.667,21.333 245.333,0 138.667,0 117.333,21.333 42.667,21.333 42.667,64 341.333,64 341.333,21.333      ')
        .about-card__bottom
          .about-card__bottom-inner
            input.about-card__bottom-text(type='text', value='новый навык')
            input.about-card__bottom-number(type='text', value='90%')
            svg#Capa_1.about__bottom-icon(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', x='0px', y='0px', viewBox='0 0 512 512', style='enable-background:new 0 0 512 512;', xml:space='preserve')
              g
                g
                  path(d='M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M405.333,266.667\
                  c0,5.896-4.771,10.667-10.667,10.667H277.333v117.333c0,5.896-4.771,10.667-10.667,10.667h-21.333\
                  c-5.896,0-10.667-4.771-10.667-10.667V277.333H117.333c-5.896,0-10.667-4.771-10.667-10.667v-21.333\
                  c0-5.896,4.771-10.667,10.667-10.667h117.333V117.333c0-5.896,4.771-10.667,10.667-10.667h21.333\
                  c5.896,0,10.667,4.771,10.667,10.667v117.333h117.333c5.896,0,10.667,4.771,10.667,10.667V266.667z')

</template>


<style lang="postcss" scoped>
  .about {
    background-color: #f8fafe;
  }

  .about__wrapper {
    padding: 60px 0 30px 0;
  }

  .about__header {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
  }

  .about__header-title {
    margin-right: 60px;
    font-size: 21px;
    font-weight: 700;
    color: #414c63;
  }

  .about__header-add {
    display: flex;
    cursor: pointer;
  }

  .about__header-icon {
    margin-right: 10px;
    width: 20px;
    height: 20px;
    fill: #383bcf;
  }

  .about__header-link {
    color: #383bcf;
  }

  .about__inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .about-card {
    margin-bottom: 30px;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 49%;
    min-height: 380px;
    box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
  }

  .about-card__header {
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 1px solid #dedee0;
  }

  .about-card__left {
    width: 50%;
    display: flex;
  }

  .about-card__left input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #000;
    color: #afb2ba;
  }

  .about-card__right {
    display: flex;
    justify-content: flex-end;
  }

  .about-card__inner {
    display: flex;
  }

  .about-card__check,
  .about-card__close,
  .about-card__item-edit,
  .about-card__item-delete {
    margin-right: 15px;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }

  .about-card__check {
    fill: #00d70a;
  }

  .about-card__close {
    fill: #bf2929;
  }

  .about-card__item {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }

  .about-card__item input {
    border: none;
  }

  .about-card__item-inner {
    display: flex;
  }

  .about-card__item-edit,
  .about-card__item-delete {
    fill: #a0a5b1;
  }

  .about-card__bottom {
    height: 100%;
    display: flex;
    align-items: flex-end;
  }

  .about-card__bottom-inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .about-card__bottom-inner input {
    margin-right: 15px;
    border: none;
    border-bottom: 1px solid #000;
    color: #afb2ba;
  }

  .about__bottom-icon {
    width: 35px;
    height: 35px;
    fill: #383bcf;
    cursor: pointer;
  }
</style>