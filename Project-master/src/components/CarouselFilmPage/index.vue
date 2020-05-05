<template>
  <div>
    <div v-if="carouselId == 1">
      <div class="film-page-block">
        <div class="film-block">
          <div class="film-img-block">
            <img :src="terminatorImgSrc" alt="film photo" class="film-img" />
          </div>

          <div class="film-year">Год выпуска: 2019</div>
        </div>

        <div class="film-data">
          <div class="film-name">Термінатор: Фатум</div>

          <pre class="film-description">
                             Описание: 
 У человечества, обреченного на войну с машинами, появляется новая спасительница.
 Терминатор из будущего REV-9 пытается ее уничтожить, но в битву
 вступает сама Сара Коннор, объединившись с суперсолдатом Грэйс и старым 
 знакомым Т-800. Линда Хэмилтон и Арнольд Шварценеггер возвращаются к самым
 известным ролям в своей карьере в новой главе оригинальной киносаги о Терминаторе.</pre>
        </div>
      </div>
      
      <div class="video-player">
        <video width="700" controls>
          <source src="@/assets/carouselVideo/terminator6Video.mp4" type="video/mp4" />Your browser does not support HTML video.
        </video>
      </div>
      
    </div>

    <div v-if="carouselId == 2">
      <div class="film-page-block">
        <div class="film-block">
          <div class="film-img-block">
            <img :src="itImgSrc" alt="film photo" class="film-img" />
          </div>

          <div class="film-year">Год выпуска: 2019</div>
        </div>

        <div class="film-data">
          <div class="film-name">Оно</div>

          <pre class="film-description">
                           Описание:
 Экранизация культового романа Стивена Кинга. В маленьком городке Дерри явно
 творится что-то странное: исчезновения людей, пугающие видения, странные
 знаки…Пока взрослым нет дела до того, что происходит, разобраться в 
 ситуации решают дети. Им придётся столкнуться со своими главными 
 страхами и жестоким клоуном Пеннивайзом.
          </pre>
        </div>
      </div>
      
      <div class="video-player">
        <video width="700" controls>
          <source src="@/assets/carouselVideo/itVideo.mp4" type="video/mp4" />Your browser does not support HTML video.
        </video>
      </div>
      
    </div>

    <div v-if="carouselId == 3">
      <div class="film-page-block">
        <div class="film-block">
          <div class="film-img-block">
            <img :src="sherlokImgSrc" alt="film photo" class="film-img" />
          </div>

          <div class="film-year">Год выпуска: 2016</div>
        </div>

        <div class="film-data">
          <div class="film-name">Шерлок Холмс</div>

          <pre class="film-description">
                         Описание:
 Одному тебе я верю, Шерлок Холмс, разыщи мою потерю, Шерлок Холмс… Пела
 элегантная Лайма, будто именно про порывистого, стремительного,
 непредсказуемого Роберта Дауни-младшего, всем своим актёрским
 мастерством вжившегося в образ самого знаменитого сыщика в мире.
          </pre>
        </div>
      </div>
      
      <div class="video-player">
        <video width="700" controls>
          <source src="@/assets/carouselVideo/sherlokHolmsVideo.mp4" type="video/mp4" />Your browser does not support HTML video.
        </video>
      </div>
      
    </div>

    <div v-if="carouselId == 4">
      <div class="film-page-block">
        <div class="film-block">
          <div class="film-img-block">
            <img :src="avengersImgSrc" alt="film photo" class="film-img" />
          </div>

          <div class="film-year">Год выпуска: 2018</div>
        </div>

        <div class="film-data">
          <div class="film-name">Мстители: Война Бесконечности</div>

          <pre class="film-description">
                            Описание:
 Один из самых ожидаемых и амбициозных фильмов 2018 года. Железный человек,
 Доктор Стрэндж, Человек-паук, Черная Пантера, Стражи Галактики – за 
 приключениями этих и многих других супергероев Marvel зрители могли 
 наблюдать последние десять лет. Теперь все эти герои соберутся на 
 одном экране, чтобы сразиться с общим врагом, одержимым одной-единственной 
 идеей – восстановить баланс во Вселенной, истребив половину ее обитателей.
          </pre>
        </div>
      </div>
      
      <div class="video-player">
        <video width="700" controls>
          <source src="@/assets/carouselVideo/avengersVideo.mp4" type="video/mp4" />Your browser does not support HTML video.
        </video>
      </div>
      
    </div>

    <div v-if="carouselId == 5">
      <div class="film-page-block">
        <div class="film-block">
          <div class="film-img-block">
            <img :src="djangoImgSrc" alt="film photo" class="film-img" />
          </div>

          <div class="film-year">Год выпуска: 2012</div>
        </div>

        <div class="film-data">
          <div class="film-name">Джанго освобождённый</div>

          <pre class="film-description">
                          Описание:
 Спагетти-вестерн от короля веселых и кровавых боевиков, блистательного
 Квентина Тарантино. История беглого раба по имени Джанго получила 
 сразу пять номинаций на «Оскар», столько же – на приз Британской 
 киноакадемии и успела завоевать два «Золотых глобуса». Ну а некоторые 
 критики заблаговременно внесли «Джанго освобожденный» в список лучших 
 фильмов года. В главных ролях – Джейми Фокс, Кристоф Вальц и Леонардо ДиКаприо.
          </pre>
        </div>
      </div>

      <div class="video-player">
        <video width="700" controls>
          <source src="@/assets/carouselVideo/djangoVideo.mp4" type="video/mp4" />Your browser does not support HTML video.
        </video>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselFilmPage",

  data() {
    return {
      carouselId: this.$route.params.carouselId
    };
  },

  computed: {
    terminatorImgSrc() {
      return require(`@/assets/carouselImg/terminator.png`);
    },

    itImgSrc() {
      return require(`@/assets/carouselImg/it.png`);
    },

    sherlokImgSrc() {
      return require(`@/assets/carouselImg/Sherlok.png`);
    },

    avengersImgSrc() {
      return require(`@/assets/carouselImg/Avengers.png`);
    },

    djangoImgSrc() {
      return require(`@/assets/carouselImg/Django.png`);
    }
  }
};
</script>

<style lang="scss" scoped>
.film-page-block {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  align-items: flex-start;
}

.film-block {
  width: 250px;
  height: 300px;
  background-color: rgb(235, 235, 235);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.75);
}

.film-img-block {
  margin-top: 10px;
  width: 240px;
  height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.film-img {
  width: 230px;
  height: 270px;
}

.film-name {
  font-size: 23px;
  line-height: 44px;
  color: #333333;
}

.film-data {
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
}

.film-description {
  background-color: rgb(233, 233, 233);
  color: black;
  font-size: 16px;
  width: 800px;  
}

.video-player {
  display: flex;
  justify-content: center;
  margin-top: 70px;
}

@media screen and (max-width: 895px) {
  .film-page-block {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (max-width: 630px) {
  .film-description {
    width: 300px;
  }
}
</style>