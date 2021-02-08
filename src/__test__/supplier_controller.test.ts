const mockFind = jest.fn();
const mockAdd = jest.fn();
import { Request } from "express";
import httpMocks from "node-mocks-http";
import * as SupplierController from "../controllers/supplier_controller";

jest.mock("../models/supplier", () => ({
  __esModule: true,

  default: {
    find: mockFind,
  },
}));
describe("When data is valid", () => {
  const testValues = [
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
  beforeEach(async () => {
    mockFind.mockReset();
  });
  it("Should return all entries", async () => {
    mockFind.mockResolvedValueOnce(testValues);
    const expected = testValues;

    const req = ({ body: {} } as unknown) as Request;
    const res = httpMocks.createResponse();
    await SupplierController.getSupplier(req, res);
    expect(res._getData()).toEqual(expected);
  });

  it("Should return entries by id", async () => {
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
      method: "GET",
      url: "/supplier/10",
      params: {
        id: 10,
      },
    });
    const res = httpMocks.createResponse();
    await SupplierController.getSupplierById(req, res);
    expect(res._getData()).toEqual(expected);
  });

  it("Should add new supplier", async () => {
    mockAdd.mockResolvedValueOnce({
      _id: "60095baf25f5c65fa4d8f03a",
      id: 20,
      name: "test",
      __v: 0,
    });
    const expected = {
      _id: "60095baf25f5c65fa4d8f03a",
      id: 20,
      name: "test",
      __v: 0,
    };

    const req = httpMocks.createRequest({
      method: "POST",
      url: "/supplier",
      body: {
        id: 20,
        name: "test",
      },
    });

    const res = httpMocks.createResponse();
    await SupplierController.addSupplier(req, res);
    expect(res._getData()).toEqual(expected);
  });
});
