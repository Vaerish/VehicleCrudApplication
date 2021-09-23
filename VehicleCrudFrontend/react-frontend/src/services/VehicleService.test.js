import axios from 'axios';

import VehicleService from './VehicleService.js';

jest.mock('axios');


describe('getVehicles', () => {
	it('gets data from the getVehicles API', async () => {
		const data = [{
			data: 'test',
		}];

		axios.get.mockImplementationOnce(() => Promise.resolve(data));

		await expect(VehicleService.getVehicles()).resolves.toEqual(data);
	});

	it('fetches erroneous data from api', async() => {
		const errorMessage = 'Network Error';

		axios.get.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage)),
		);

		await expect(VehicleService.getVehicles()).rejects.toThrow(errorMessage);
	});

	it('gets data from the getVehicleById the API', async () => {
		const data = {
			data: 'test',
		};

		axios.get.mockImplementationOnce(() => Promise.resolve(data));

		await expect(VehicleService.getVehicleById(12)).resolves.toEqual(data);
	});

	it('fetches erroneous data from the getVehicleById APi', async() => {
		const errorMessage = 'Network Error';

		axios.get.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage)),
		);

		await expect(VehicleService.getVehicleById(12)).rejects.toThrow(errorMessage);
	});

	it('posts data from the createVehicle the API', async () => {
		const data = {
			data: 'test',
		};

		axios.post.mockImplementationOnce(() => Promise.resolve(data));

		await expect(VehicleService.createVehicle(data)).resolves.toEqual(data);
	});

	it('fetches erroneous data from the createVehicle APi', async() => {
		const errorMessage = 'Network Error';
		const data = {
			data: 'test',
		};

		axios.post.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage)),
		);

		await expect(VehicleService.createVehicle(data)).rejects.toThrow(errorMessage);
	});

	it('updates data from the updateVehicle the API', async () => {
		const data = {
			data: 'test',
		};

		axios.put.mockImplementationOnce(() => Promise.resolve(data));

		await expect(VehicleService.updateVehicle(data, 12)).resolves.toEqual(data);
	});

	it('fetches erroneous data from the updateVehicle APi', async() => {
		const errorMessage = 'Network Error';
		const data = {
			data: 'test',
		};

		axios.put.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage)),
		);

		await expect(VehicleService.updateVehicle(data, 12)).rejects.toThrow(errorMessage);
	});

	it('deletes data from the deleteVehicle the API', async () => {
		const data = {
			data: 'test',
		};

		axios.delete.mockImplementationOnce(() => Promise.resolve(data));

		await expect(VehicleService.deleteVehicle(12)).resolves.toEqual(data);
	});

	it('fetches erroneous data from the deleteVehicle APi', async() => {
		const errorMessage = 'Network Error';
		const data = {
			data: 'test',
		};

		axios.delete.mockImplementationOnce(() =>
			Promise.reject(new Error(errorMessage)),
		);

		await expect(VehicleService.deleteVehicle(12)).rejects.toThrow(errorMessage);
	});
});
