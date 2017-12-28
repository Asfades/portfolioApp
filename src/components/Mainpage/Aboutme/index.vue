<template lang="pug">
section.section.about
	.about__left.about__block
		.about__triangle.about__triangle_left
		.about__left-title
			.block-title Обо мне
				.about__left-title_bg
		.about__left-content
			.user-discription
				.user-description__image
				.user-description__title
					.block-subtitle Кто я
				.user-description__text.text-content
					p Я веб разработчик из Киева. Мне 23. Я занимаюсь разработкой современных сайтов и приложений. Мне нравится делать интересные и современные проекты.
					p Этот сайт я сделал в рамках обучения в Школе онлайн образования LoftSchool. Чуть позже я освежу в нём свой контент. А пока посмотрите, как тут всё классно и красиво!
	.about__right.about__block
		.about__triangle.about__triangle_right
		.about__right-title
			.block-subtitle Чем я могу быть <br> вам полезен
		.about__right-description.text-content
			p Больше всего меня привлекет Frontend разработка, но я также знаком и могу решать не сложные задачи на Backend. Но давайте по порядку.
		.about__right-content
			ul.skills-list
				skill-circle(
          :skills="skills"
          :skillGroup="skillsTypes[0]")
				skill-circle(
          :skills="skills"
          :skillGroup="skillsTypes[1]")
				skill-circle(
          :skills="skills"
          :skillGroup="skillsTypes[2]")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data: () => ({
    skillsTypes: ['Frontend', 'Backend', 'Workflow']
  }),
  methods: {
    ...mapActions('skills', ['fetchSkills'])
  },
  computed: {
    ...mapGetters('skills', ['skills'])
  },
  mounted() {
    this.fetchSkills()
  },
  components: {
    skillCircle: require('./skill')
  }
}
</script>

<style lang="scss"></style>