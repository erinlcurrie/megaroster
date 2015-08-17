var Megaroster = function() {


  this.init = function() {
    var self = this;
    this.students = [];

    $('#new_student_form').on('submit', function(ev) {
      ev.preventDefault();
      var student_name = $(this.student_name).val();

      //Push the student name onto the student array
      self.students.push(student_name);

      //Add the student to a new list item in the <ol>
      //$("#header ul").append('<li><a href="/user/messages"><span class="tab">Message Center</span></a></li>');

      $('#students').append('<li class = "list-group-item">' + student_name + '</li>');
      $(this.student_name)
        .val('')
        .focus();


    });
  };

};

var roster = new Megaroster();
roster.init();
