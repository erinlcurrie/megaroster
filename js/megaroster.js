var Megatask = {
  author: "Erin",
  hisDeal: "Who the heck knows?",
  newStudentForm: $('#new_student_form'),
  submitHandler: function(ev) {
    alert('What?');
  },
  start: function() {
    this.newStudentForm.submit(this.submitHandler);

  }
};

Megatask.start();
