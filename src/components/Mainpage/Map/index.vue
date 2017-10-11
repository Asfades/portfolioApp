<template lang="pug">
section.section.map
	.google-map
		iframe(src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12083.502967243492!2d30.44622457802817!3d50.45518866601336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suk!2sua!4v1506494976053" width= "100%" frameborder="0" style="border:0" allowfullscreen).map__item
	.map__data
		.contacts
			.contacts__title
				.block-subtitle Контакты
			ul.contacts__list
				-
					var contactss = [
						['skype', 'Yevhenii_Gurinets'],
						['mail', 'yevheniigurinets@gmail.com'],
						['phone', '+380639712283'],
						['map_marker', 'г.Киев, ул.Проспект Победы']
					]
				each item in contactss
					li.contacts__item
						.contacts-row
							span(class=`contacts-row__item_${item[0]}`).contacts-row__item
							a(class=`${item[0]}`).contacts-row__content #{item[1]}
</template>

<script>

export default {
  data: () => ({

  }),
  components: {

  }
}
</script>

<style lang="scss"></style>