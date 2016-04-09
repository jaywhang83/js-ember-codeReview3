import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,

  didInsertElement: function() {
    $('.tooltipped').tooltip({delay: 50});
  },

  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    update(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    },

    formHide() {
      this.set('updateQuestionForm', false);
    }
  }
});
