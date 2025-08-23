package com.example.grabiq.service;

import java.util.List;
import java.util.Optional;

/**
 * 
 * @param <T>  Entity type
 * @param <ID> Primary key type
 */
public interface GenericService<T, ID> {

    T save(T entity);


    List<T> saveAll(List<T> entities);


    Optional<T> findById(ID id);


    List<T> findAll();

    T update(ID id, T entity);

    void deleteById(ID id);

  
    void delete(T entity);

   
    boolean existsById(ID id);

  
    long count();
}

    

    