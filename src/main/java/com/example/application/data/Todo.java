package com.example.application.data;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

import java.util.UUID;

@Entity
@Data
public class Todo {

   @Id
   @GeneratedValue(strategy = GenerationType.UUID)
   private UUID id;


   @NotBlank
   private String title;

   private boolean completed;

}
