package com.example.grabiq.service.impl;

import com.example.grabiq.model.Category;
import com.example.grabiq.repository.CategoryRepository;
import com.example.grabiq.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Category save(Category category) {
        LocalDateTime now = LocalDateTime.now();

        if (category.getCategoryId() == null) {
            category.setCreatedDate(now);
            category.setModifiedDate(now);
        } else {
            category.setModifiedDate(now);
        }

        return categoryRepository.save(category);
    }

    @Override
    public List<Category> saveAll(List<Category> categories) {
        LocalDateTime now = LocalDateTime.now();

        categories.forEach(category -> {
            if (category.getCategoryId() == null) {
                category.setCreatedDate(now);
                category.setModifiedDate(now);
            } else {
                category.setModifiedDate(now);
            }
        });

        return categoryRepository.saveAll(categories);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Category> findById(Long id) {
        return categoryRepository.findById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Category> findAll() {
        return categoryRepository.findAll();
    }

    @Override
    public Category update(Long id, Category categoryDetails) {
        return categoryRepository.findById(id)
                .map(category -> {
                    category.setCategoryName(categoryDetails.getCategoryName());
                    category.setCategoryDescription(categoryDetails.getCategoryDescription());
                    category.setUpdatedBy(categoryDetails.getUpdatedBy());
                    category.setModifiedDate(LocalDateTime.now()); // system date-time
                    return categoryRepository.save(category);
                })
                .orElseThrow(() -> new RuntimeException("Category not found with id: " + id));
    }

    @Override
    public void deleteById(Long id) {
        if (!categoryRepository.existsById(id)) {
            throw new RuntimeException("Category not found with id: " + id);
        }
        categoryRepository.deleteById(id);
    }

    @Override
    public void delete(Category category) {
        categoryRepository.delete(category);
    }

    @Override
    @Transactional(readOnly = true)
    public boolean existsById(Long id) {
        return categoryRepository.existsById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public long count() {
        return categoryRepository.count();
    }
}
