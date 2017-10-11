<template lang="pug">
#parallax.parallax
	- for (var i = 9; i > 0; i--)
		.parallax__layers
			img(src=`~img/layer-${i}.png`).parallax__image
			.img__blok
</template>
<script>

export default {
  data: () => ({

  }),
  components: {

  }
}
</script>
