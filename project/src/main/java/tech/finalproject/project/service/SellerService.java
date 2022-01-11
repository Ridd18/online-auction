package tech.finalproject.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.finalproject.project.exception.SellerNotFoundException;
import tech.finalproject.project.repo.SellerRepo;
import tech.finalproject.project.seller.SellerLoginDetails;

import java.util.List;

@Service
public class SellerService {


    private final SellerRepo sellerRepo;

    @Autowired
    public SellerService(SellerRepo sellerRepo) {

        this.sellerRepo = sellerRepo;
    }

    public SellerLoginDetails addSeller(SellerLoginDetails sellerLoginDetails) {
        return sellerRepo.save(sellerLoginDetails);
    }

    public List<SellerLoginDetails> findallSellers() {

        return sellerRepo.findAll();
    }

    public SellerLoginDetails updateSeller(SellerLoginDetails sellerLoginDetails) {
        return sellerRepo.save(sellerLoginDetails);
    }

    public SellerLoginDetails findSellerById(Long id) {
        return sellerRepo.findSellerById(id).
                orElseThrow(() -> new SellerNotFoundException("Seller by id" + id + "was nto found"));
    }

    public void deleteSeller(Long id) {
        sellerRepo.deleteSellerById(id);
    }
}
