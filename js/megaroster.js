var Megaroster = function() {
  var self = this;

  this.save = function() {
    try {
      return (localStorage.students = JSON.stringify(self.students)   );
    }
    catch(err) {
      return false;
    }
  };

  this.load = function() {
    try {
      self.students = JSON.parse(localStorage.students);
      $.each(self.students, function(index, student_name) {
        self.appendToList(student_name);
      });
    }
    catch(err) {
      return false;
    }
  };

  this.appendToList = function(student_name) {
    // Grab the *template* list item from the page.
    var li = $('#list_item_template').clone();
    li.removeAttr('id')
      .addClass('student')
      .prepend(student_name)
      .removeClass('hidden');

    $('#students').append(li);
  };

  this.addStudent = function(student_name) {
    self.students.push(student_name);
    self.appendToList(student_name);
  };

  this.init = function() {
    self.students = [];
    self.load();

    $('button.delete').on('click', function() {
      //Remove it from the array
      // WAIT UNTIL TMR
      //Remove it from the <ol>
      $(this).closest('li').remove();
      //Update local storage
    });

    $('#new_student_form').on('submit', function (ev) {
      ev.preventDefault();
      var student_name = $(this.student_name).val();

      self.addStudent(student_name);

      $(this.student_name)
        .val('')
        .focus();
    });
  };


};

var roster = new Megaroster();
roster.init();
