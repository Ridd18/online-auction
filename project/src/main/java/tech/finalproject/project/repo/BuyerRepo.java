package tech.finalproject.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.finalproject.project.buyer.BuyerLoginDetails;

import java.util.Optional;

public interface BuyerRepo extends JpaRepository<BuyerLoginDetails, Long> {

    void deleteBuyerById(Long id);


    Optional<BuyerLoginDetails> findBuyerById(Long id);
}
