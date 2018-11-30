using Bootcamp20.API.BussinessLogic.Interface;
using Bootcamp20.API.DataAccess.Models;
//using Bootcamp20.DataAccess.Models;
using Bootcamp20.DataAccess.Param;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Bootcamp20.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class SuppliersController : ApiController
    {
        private readonly ISupplierService _supplierService;
        public SuppliersController() { }
        public SuppliersController(ISupplierService supplierService)
        {
            this._supplierService = supplierService;
        }


        // GET: api/Suppliers
        [HttpGet]
        public IEnumerable<Supplier> Get()
        {
            return _supplierService.Get();
        }

        // GET: api/Suppliers/5
        [HttpGet]
        public Supplier Get(int id)
        {
            return _supplierService.Get(id);
        }

        // POST: api/Suppliers
        [HttpPost]
        public void Post(SupplierParam supplierParam)
        {
            if(ModelState.IsValid)
            {
                _supplierService.Insert(supplierParam);
            }
        }

        // PUT: api/Suppliers/5
        [HttpPut]
        public void Put(int id, SupplierParam supplierparam)
        {
            if(ModelState.IsValid)
            {
                _supplierService.Update(supplierparam);
            }
        }

        // DELETE: api/Suppliers/5
        [HttpDelete]
        public void Delete(int id)
        {
            _supplierService.Delete(id);
        }
    }
}
