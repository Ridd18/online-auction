package tech.finalproject.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import tech.finalproject.project.buyer.BuyerLoginDetails;
import tech.finalproject.project.exception.BuyerNotFoundException;
import tech.finalproject.project.repo.BuyerRepo;

import javax.xml.ws.Action;
import java.util.List;

@Service
public class BuyerService {

    private final BuyerRepo buyerRepo;

    @Autowired
    public BuyerService(BuyerRepo buyerRepo) {

        this.buyerRepo = buyerRepo;
    }

    public BuyerLoginDetails addBuyer(BuyerLoginDetails buyerLoginDetails)
    {

        return buyerRepo.save(buyerLoginDetails);
    }

    public List<BuyerLoginDetails> findallBuyers()
    {

        return buyerRepo.findAll();
    }

    public BuyerLoginDetails updateBuyer(BuyerLoginDetails buyerLoginDetails)
    {
        return buyerRepo.save(buyerLoginDetails);
    }

    public BuyerLoginDetails findBuyerById(Long id)
    {
       return buyerRepo.findBuyerById(id).
               orElseThrow(()-> new BuyerNotFoundException("Buyer by id" + id + "was nto found"));
    }

    public void deleteBuyer(Long id)
    {
        buyerRepo.deleteBuyerById(id);
    }
}
