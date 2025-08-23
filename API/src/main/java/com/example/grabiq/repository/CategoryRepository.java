package com.example.grabiq.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.grabiq.model.Category;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    
    Optional<Category> findByCategoryName(String categoryName);
    
    // Find categories by created by user
    List<Category> findByCreatedBy(String createdBy);
    
    // Find categories created between dates
    List<Category> findByCreatedDateBetween(LocalDateTime startDate, LocalDateTime endDate);
    
    // Find categories by name containing (case-insensitive)
    List<Category> findByCategoryNameContainingIgnoreCase(String categoryName);
    
    // Check if category exists by name
    boolean existsByCategoryName(String categoryName);
    
    // Custom query to find categories by description containing keyword
    @Query("SELECT c FROM Category c WHERE c.categoryDescription IS NOT NULL AND LOWER(c.categoryDescription) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<Category> findByDescriptionContaining(@Param("keyword") String keyword);
    
    // Find all categories ordered by name
    @Query("SELECT c FROM Category c ORDER BY c.categoryName ASC")
    List<Category> findAllOrderByName();
}