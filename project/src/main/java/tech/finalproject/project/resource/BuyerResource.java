package tech.finalproject.project.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.finalproject.project.buyer.BuyerLoginDetails;
import tech.finalproject.project.service.BuyerService;

import java.util.List;

@RestController
//@RequestMapping("/auction")
public class BuyerResource {

    private final BuyerService buyerService;

    public BuyerResource(BuyerService buyerService) {

        this.buyerService = buyerService;
    }

    @GetMapping("/buyer/all")
    public ResponseEntity<List<BuyerLoginDetails>> getAllBuyers()
    {
        List<BuyerLoginDetails> buyer = buyerService.findallBuyers();
        return new ResponseEntity<>(buyer, HttpStatus.OK);
    }

    @GetMapping("/buyer/find/(id)")
    public ResponseEntity<BuyerLoginDetails> getBuyerById(@PathVariable("id") Long id)
    {
        BuyerLoginDetails buyer = buyerService.findBuyerById(id);
        return new ResponseEntity<>(buyer, HttpStatus.OK);
    }

    @PostMapping("/buyer/add")
    public ResponseEntity<BuyerLoginDetails> addBuyer(@RequestBody BuyerLoginDetails buyerLoginDetails)
    {
        BuyerLoginDetails newBuyer = buyerService.addBuyer(buyerLoginDetails);
        return new ResponseEntity<>(newBuyer, HttpStatus.CREATED);
    }

    @PutMapping("/buyer/update")
    public ResponseEntity<BuyerLoginDetails> updateBuyer(@RequestBody BuyerLoginDetails buyerLoginDetails)
    {
        BuyerLoginDetails updateBuyer = buyerService.updateBuyer(buyerLoginDetails);
        return new ResponseEntity<>(updateBuyer, HttpStatus.OK );
    }

    @DeleteMapping("/buyer/delete/(id)")
    public ResponseEntity<?> deleteBuyer(@PathVariable("id") Long id)
    {
        buyerService.deleteBuyer(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
