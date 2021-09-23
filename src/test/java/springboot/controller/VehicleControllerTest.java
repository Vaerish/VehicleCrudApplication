package springboot.controller;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import springboot.model.Vehicle;
import springboot.repository.VehicleRepository;

@RunWith(SpringRunner.class)
@WebMvcTest(value = VehicleController.class)

public class VehicleControllerTest {
	
	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	private VehicleRepository vehicleRepository;
	long id = 1;
	Vehicle vehicle = new Vehicle(2021, "Honda", "Fit");
	List<Vehicle> vehicleList = new ArrayList<>();
	String exampleVehicle = "{\"year\":2021,\"make\":\"Honda\",\"model\":\"Fit\"}";

	@Test
	
	public void getAllVehiclesTest() throws Exception {
		String uri = "/api/v1/vehicles/";
		vehicleList.add(vehicle);
		vehicleList.add(vehicle);
		Mockito.when(vehicleRepository.findAll()).thenReturn(vehicleList);
		RequestBuilder requestBuilder = MockMvcRequestBuilders.get(uri).accept(MediaType.APPLICATION_JSON);
		String expected = "[{make:Honda,model:Fit, year:2021}, {make:Honda,model:Fit, year:2021}]";
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);	
	}
	
	@Test
	public void getAllVehiclesWithOneInListTest() throws Exception {
		String uri = "/api/v1/vehicles/";
		vehicleList.add(vehicle);

		Mockito.when(vehicleRepository.findAll()).thenReturn(vehicleList);
		RequestBuilder requestBuilder = MockMvcRequestBuilders.get(uri).accept(MediaType.APPLICATION_JSON);
		String expected = "[{make:Honda,model:Fit, year:2021}]";
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);	
	}
	
	@Test
	public void getAllVehiclesWithNoneInListTest() throws Exception {
		String uri = "/api/v1/vehicles/";
		Mockito.when(vehicleRepository.findAll()).thenReturn(vehicleList);
		RequestBuilder requestBuilder = MockMvcRequestBuilders.get(uri).accept(MediaType.APPLICATION_JSON);
		String expected = "[]";
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);	
	}
	
	@Test
	public void getVehicleByIdTest() throws Exception {
		String uri = "/api/v1/vehicles/";
		vehicleList.add(vehicle);
		Mockito.when(vehicleRepository.findById(id)).thenReturn(Optional.of(vehicle));
		RequestBuilder requestBuilder = MockMvcRequestBuilders.get(uri + id).accept(MediaType.APPLICATION_JSON);
		String expected = "{make:Honda,model:Fit, year:2021}";
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		JSONAssert.assertEquals(expected, result.getResponse().getContentAsString(), false);
	}
	
 @Test
	public void getVehicleByIdExceptionTest() throws Exception {
		String uri = "/api/v1/vehicles/";
		vehicleList.add(vehicle);
		long notId = 200;
		RequestBuilder requestBuilder = MockMvcRequestBuilders.get(uri + notId).accept(MediaType.APPLICATION_JSON);
		MvcResult result = mockMvc.perform(requestBuilder).andReturn();

		MockHttpServletResponse response = result.getResponse();

		assertEquals(HttpStatus.NOT_FOUND.value(), response.getStatus());
	}
	

	@Test
	public void createVehicleTest() throws Exception {

		String uri = "/api/v1/vehicles/";

		RequestBuilder requestBuilder = MockMvcRequestBuilders
				.post(uri)
				.accept(MediaType.APPLICATION_JSON).content(exampleVehicle)
				.contentType(MediaType.APPLICATION_JSON);

		MvcResult result = mockMvc.perform(requestBuilder).andReturn();

		MockHttpServletResponse response = result.getResponse();

		assertEquals(HttpStatus.OK.value(), response.getStatus());

	}
	
	@Test
	public void putVehicleTest() throws Exception {

		vehicleList.add(vehicle);	
		Mockito.when(vehicleRepository.findById(id)).thenReturn(Optional.of(vehicle));
		
		String uri = "/api/v1/vehicles/";
		String testVehicle = "{\"year\":\"2021\",\"make\":\"Test\",\"model\":\"Test\"}";

		RequestBuilder requestBuilder = MockMvcRequestBuilders
				.put(uri + id)
				.accept(MediaType.APPLICATION_JSON).content(testVehicle)
				.contentType(MediaType.APPLICATION_JSON);

		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		MockHttpServletResponse response = result.getResponse();
		assertEquals(HttpStatus.OK.value(), response.getStatus());

	}
	
	 @Test
		public void putVehicleByIdExceptionTest() throws Exception {
			String uri = "/api/v1/vehicles/";
			vehicleList.add(vehicle);
			String testVehicle = "{\"year\":\"2021\",\"make\":\"Test\",\"model\":\"Test\"}";
			long notId = 200;
			RequestBuilder requestBuilder = MockMvcRequestBuilders
					.put(uri + notId)
					.accept(MediaType.APPLICATION_JSON).content(testVehicle)
					.contentType(MediaType.APPLICATION_JSON);
			
			MvcResult result = mockMvc.perform(requestBuilder).andReturn();

			MockHttpServletResponse response = result.getResponse();

			assertEquals(HttpStatus.NOT_FOUND.value(), response.getStatus());
		}
	
	@Test
	public void deletePatientById_success() throws Exception {
		
	    Mockito.when(vehicleRepository.findById(id)).thenReturn(Optional.of(vehicle));
	    
	    String uri = "/api/v1/vehicles/";
	    
	    RequestBuilder requestBuilder = MockMvcRequestBuilders
				.delete(uri + id)
				.contentType(MediaType.APPLICATION_JSON);

		MvcResult result = mockMvc.perform(requestBuilder).andReturn();
		MockHttpServletResponse response = result.getResponse();
		assertEquals(HttpStatus.OK.value(), response.getStatus());

;
	}

	
	
}
