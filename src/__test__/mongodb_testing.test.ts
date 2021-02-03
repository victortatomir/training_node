const mockFind = jest.fn();
import * as SupplierController from "../controllers/supplier_controller";
import { Request, Response } from "express";
import httpMocks from 'node-mocks-http'


jest.mock("../models/supplier", () => ({
  __esModule: true,

  default: {
    find: mockFind
  },
}));
describe("When data is valid", () => {
    beforeEach(async () =>{
        mockFind.mockReset();
    })
  it("Should return entries", async () => {

    mockFind.mockResolvedValueOnce([
        {
          _id: "60095baf25f5c65fa4d8f03a",
          id: 10,
          name: "test",
          __v: 0,
        },
        {
          _id: "60095baf25f5c65fa4d8f03b",
          id: 11,
          name: "testare",
          __v: 0,
        },
      ]);
    const expected = [
      {
        _id: "60095baf25f5c65fa4d8f03a",
        id: 10,
        name: "test",
        __v: 0,
      },
      {
        _id: "60095baf25f5c65fa4d8f03b",
        id: 11,
        name: "testare",
        __v: 0,
      },
    ];

    const req = ({ body: {} } as unknown) as Request;
    const res = httpMocks.createResponse();
    await SupplierController.getSupplier(req, res);
    expect(res._getData()).toEqual(expected);
  });


  it("Should return entries", async () => {

    mockFind.mockResolvedValueOnce([
      {
        _id: "60095baf25f5c65fa4d8f03a",
        id: 10,
        name: "test",
        __v: 0,
      },
    ]);
    const expected = [
      {
        _id: "60095baf25f5c65fa4d8f03a",
        id: 10,
        name: "test",
        __v: 0,
      },
    ];

    const req = httpMocks.createRequest({
      method: 'GET',
      url: '/products/10',
      params: {
        id: 10
      }
  });
    const res = httpMocks.createResponse();
    await SupplierController.getSupplierById(req, res);
    expect(res._getData()).toEqual(expected);
  });
});


