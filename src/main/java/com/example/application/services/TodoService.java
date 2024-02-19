package com.example.application.services;

import com.example.application.data.Todo;
import com.example.application.data.TodoRepository;
import com.example.application.data.TodoTO;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.UUID;

@AnonymousAllowed
@BrowserCallable
@RequiredArgsConstructor
public class TodoService {

   private final TodoRepository todoRepository;

   public List<TodoTO> findAllTodos() {
      return todoRepository.findAll().stream()
            .map(TodoTO::of)
            .toList();
   }

   public TodoTO createTodo(String title) {
      Todo todo = new Todo();
      todo.setTitle(title);
      return TodoTO.of(todoRepository.save(todo));
   }

   public void toggleTodo(String id) {
      todoRepository.findById(UUID.fromString(id))
            .ifPresent(todo -> {
               todo.setCompleted(!todo.isCompleted());
               todoRepository.save(todo);
            });
   }

   public void deleteTodo(String id) {
      todoRepository.deleteById(UUID.fromString(id));
   }

}
