import Card from './Card.vue';

//👇 This default export determines where your story goes in the story list
export default {
    title: 'Card',
  component: Card,
};


const Template = (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  });

  export const FirstStory = Template.bind({});

  FirstStory.args = {
    title: 'Primary',
    subText: 'Example sub text'
  }