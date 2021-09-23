package springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.lang.NonNull;

@Entity
@Table(name = "vehicles")
public class Vehicle {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private long id;

@Column(name = "Year")
@NonNull
private int year;

@Column(name = "Make")
@NonNull
private String make;

@Column(name = "Model")
@NonNull
private String model;

public Vehicle() {
	
}

public Vehicle(int year, String make, String model) {
super();
this.year = year;
this.make = make;
this.model = model;
}

public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}

public int getYear() {
	return year;
}

public void setYear(int year) {
	this.year = year;
}

public String getMake() {
	return make;
}

public void setMake(String make) {
	this.make = make;
}

public String getModel() {
	return model;
}

public void setModel(String model) {
	this.model = model;
}

}

