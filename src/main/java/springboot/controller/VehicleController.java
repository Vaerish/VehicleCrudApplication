package springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import springboot.exception.ResourceNotFoundException;
import springboot.model.Vehicle;
import springboot.repository.VehicleRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")

public class VehicleController {
	
	@Autowired
	private VehicleRepository vehicleRepository;

	
	/* get all vehicles */
	@GetMapping("/vehicles")
	public List < Vehicle > getAllVehicles() {
		return vehicleRepository.findAll();
	}
	
	/* create vehicle rest api */
	@PostMapping("/vehicles")
	public Vehicle createVehicle(@RequestBody Vehicle vehicle) {
		return vehicleRepository.save(vehicle);
	}
	
	/* get vehicle by id rest api */
	@GetMapping("/vehicles/{id}")
	public Vehicle getVehicleById(@PathVariable Long id) {
		Vehicle vehicle = vehicleRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Vehicle does not exist with id :" + id));
		return vehicle;	
	}
	
	/* put vehicle rest api */
	@PutMapping("vehicles/{id}")
	public Vehicle updateVehicle(@PathVariable Long id, @RequestBody Vehicle vehicleDetails){
		Vehicle vehicle = vehicleRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Vehicle does not exist with id :" + id));
		vehicle.setYear(vehicleDetails.getYear());
		vehicle.setMake(vehicleDetails.getMake());
		vehicle.setModel(vehicleDetails.getModel());
		
		return vehicleRepository.save(vehicle);			
	}
	
	/* delete vehicle rest api */
	@DeleteMapping("/vehicles/{id}")
	public ResponseEntity<Long> deleteVehicle(@PathVariable Long id) {
		vehicleRepository.deleteById(id);
		return new ResponseEntity<>(id, HttpStatus.OK);
	}
	
}
