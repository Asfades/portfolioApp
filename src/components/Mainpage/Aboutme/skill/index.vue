<template lang="pug">
li.skills-list__item
  .skills-row
    .skills-row__title {{skillGroup}}
    ul.skills-row__list
      circle-item(
        v-for="skill in skills"
        v-if="checkSkillType(skillGroup) === skill.type"
        :id="skill.name.split(' ')[0].split('.')[0]"
        :key="skill.id"
        :title="skill.name",
        :percents="skill.percents"
      )
</template>

<script>
export default {
  data: () => ({
    name: '',
    level: ''
  }),
  props: {
    skillGroup: String,
    skills: Array
  },
  methods: {
    checkSkillType(skillGroup) {
      switch (skillGroup) {
        case 'Frontend':
          return 1
        case 'Workflow':
          return 2
        case 'Backend':
          return 3
      }
    }
  },
  computed: {
  },
  components: {
    circleItem: require('./circle')
  }
}
</script>

<style lang="scss"></style>