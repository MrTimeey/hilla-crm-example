package com.example.application.data;

public record TodoTO(String id, String title, boolean completed) {

   public static TodoTO of(Todo todo) {
      return new TodoTO(todo.getId().toString(), todo.getTitle(), todo.isCompleted());
   }
}
