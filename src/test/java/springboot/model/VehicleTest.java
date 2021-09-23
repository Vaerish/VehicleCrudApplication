package springboot.model;

import static org.junit.Assert.assertEquals;

import org.junit.jupiter.api.Test;

public class VehicleTest {

	@Test
	public void buildVehicleAndGetYearTest() throws Exception {
		int year = 2020;
		String make = "make";
		String model = "model";
		Vehicle vehicle = new Vehicle(year, make, model);
		assertEquals(vehicle.getYear(), year);
	}
	
	@Test
	public void buildVehicleAndSetYearTest() throws Exception {
		int year = 2020;
		String make = "make";
		String model = "model";
		Vehicle vehicle = new Vehicle(year, make, model);
		assertEquals(vehicle.getYear(), year);
		int newYear = 2021;
		vehicle.setYear(newYear);
		assertEquals(vehicle.getYear(), newYear);
	}
	
	@Test
	public void buildVehicleAndGetMakeTest() throws Exception {
		int year = 2020;
		String make = "make";
		String model = "model";
		Vehicle vehicle = new Vehicle(year, make, model);
		assertEquals(vehicle.getMake(), make);
	}
	
	@Test
	public void buildVehicleAndSetMakeTest() throws Exception {
		int year = 2020;
		String make = "make";
		String model = "model";
		Vehicle vehicle = new Vehicle(year, make, model);
		assertEquals(vehicle.getMake(), make);
		String newMake = "newMake";
		vehicle.setMake(newMake);
		assertEquals(vehicle.getMake(), newMake);
	}
	
	@Test
	public void buildVehicleAndGetModelTest() throws Exception {
		int year = 2020;
		String make = "make";
		String model = "model";
		Vehicle vehicle = new Vehicle(year, make, model);
		assertEquals(vehicle.getModel(), model);
	}
	
	@Test
	public void buildVehicleAndSetModelTest() throws Exception {
		int year = 2020;
		String make = "make";
		String model = "model";
		Vehicle vehicle = new Vehicle(year, make, model);
		assertEquals(vehicle.getModel(), model);
		String newModel = "newModel";
		vehicle.setModel(newModel);
		assertEquals(vehicle.getModel(), newModel);
	}
	
	@Test
	public void buildVehicleAndGetId() throws Exception {
		int year = 2020;
		String make = "make";
		String model = "model";
		long id = 0;
		Vehicle vehicle = new Vehicle(year, make, model);
		assertEquals(vehicle.getId(), id);
	}
	
	@Test
	public void buildVehicleAndSetMakeId() throws Exception {
		int year = 2020;
		String make = "make";
		String model = "model";
		long id = 0;
		Vehicle vehicle = new Vehicle(year, make, model);
		assertEquals(vehicle.getId(), id);
		long newid = 1;
		vehicle.setId(newid);
		assertEquals(vehicle.getId(), newid);
	}
}
