package tech.finalproject.project.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.finalproject.project.admin.AdminDetails;

public interface AdminRepo extends JpaRepository<AdminDetails, Long> {

}
