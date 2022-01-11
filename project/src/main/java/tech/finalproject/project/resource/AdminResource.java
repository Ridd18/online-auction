package tech.finalproject.project.resource;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.finalproject.project.admin.AdminDetails;
import tech.finalproject.project.service.AdminService;

import java.util.List;

@RestController
@RequestMapping("/auction")
public class AdminResource {

    private final AdminService adminService;

    public AdminResource(AdminService adminService) {
        this.adminService = adminService;
    }

    @GetMapping("/admin/all")
    public ResponseEntity<List<AdminDetails>> getAllAdmin()
    {
        List<AdminDetails> admin = adminService.findAdmin();
        return new ResponseEntity<>(admin, HttpStatus.OK);
    }

    @PostMapping("/admin/add")
    public ResponseEntity<AdminDetails> addAdmin(@RequestBody AdminDetails adminDetails){
        AdminDetails newAdmin = adminService.addAdmin(adminDetails);
        return new ResponseEntity<>(newAdmin, HttpStatus.CREATED);
    }
}

