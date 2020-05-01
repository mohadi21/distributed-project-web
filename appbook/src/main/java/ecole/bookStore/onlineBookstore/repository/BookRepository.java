package ecole.bookStore.onlineBookstore.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import ecole.bookStore.onlineBookstore.entity.Book;



@CrossOrigin("*")
public interface BookRepository extends JpaRepository<Book, Long>{
	
	@RestResource(path = "categoryid")
	Page<Book> findByCategoryId(@Param("id") Long id, Pageable pageable);
	
	
	@RestResource(path = "searchbykeyword")
	Page<Book> findByNameContaining(@Param("name") String Keyword, Pageable pageable);
	
}