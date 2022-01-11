package tech.finalproject.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.finalproject.project.seller.SellerLoginDetails;

import java.util.Optional;

public interface SellerRepo extends JpaRepository<SellerLoginDetails, Long> {


     Optional<SellerLoginDetails> findSellerById(Long id);

    void deleteSellerById(Long id);
}
