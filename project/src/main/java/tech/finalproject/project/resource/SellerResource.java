package tech.finalproject.project.resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.finalproject.project.buyer.BuyerLoginDetails;
import tech.finalproject.project.seller.SellerLoginDetails;
import tech.finalproject.project.service.SellerService;

import java.util.List;

@RestController
//@RequestMapping("/auction")
public class SellerResource {

    private final SellerService sellerService;


    public SellerResource(SellerService sellerService) {
        this.sellerService = sellerService;
    }


    @GetMapping("/seller/all")
    public ResponseEntity<List<SellerLoginDetails>> getAllSellers()
    {
        List<SellerLoginDetails> seller = sellerService.findallSellers();
        return new ResponseEntity<>(seller, HttpStatus.OK);
    }

    @GetMapping("/seller/find/(id)")
    public ResponseEntity<SellerLoginDetails> getSellerById(@PathVariable("id") Long id)
    {
        SellerLoginDetails seller = sellerService.findSellerById(id);
        return new ResponseEntity<>(seller, HttpStatus.OK);
    }

    @PostMapping("/seller/add")
    public ResponseEntity<SellerLoginDetails> addBuyer(@RequestBody SellerLoginDetails sellerLoginDetails)
    {
        SellerLoginDetails newseller = sellerService.addSeller(sellerLoginDetails);
        return new ResponseEntity<>(newseller, HttpStatus.CREATED);
    }

    @PutMapping("/seller/update")
    public ResponseEntity<SellerLoginDetails> updateseller(@RequestBody SellerLoginDetails sellerLoginDetails)
    {
        SellerLoginDetails updateseller = sellerService.updateSeller(sellerLoginDetails);
        return new ResponseEntity<>(updateseller, HttpStatus.OK );
    }

    @DeleteMapping("/seller/delete/(id)")
    public ResponseEntity<?> deleteBuyer(@PathVariable("id") Long id)
    {
        sellerService.deleteSeller(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
