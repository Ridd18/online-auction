package tech.finalproject.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.finalproject.project.admin.AdminDetails;
import tech.finalproject.project.repo.AdminRepo;

import java.util.List;
import java.util.UUID;

@Service
public class AdminService {

    private final AdminRepo adminRepo;

    @Autowired
    public AdminService(AdminRepo adminRepo) {

        this.adminRepo = adminRepo;
    }

    public AdminDetails addAdmin(AdminDetails adminDetails)
    {
        return adminRepo.save(adminDetails);
    }

    public List<AdminDetails> findAdmin()
    {

        return adminRepo.findAll();
    }
}
