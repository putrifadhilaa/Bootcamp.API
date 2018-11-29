using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bootcamp20.DataAccess.Param;
using Bootcamp20.Common.Interface;
using Bootcamp20.API.DataAccess.Models;

namespace Bootcamp20.API.BussinessLogic.Interface.Master
{
    public class SupplierService : ISupplierService
    {
        private readonly ISupplierRepository _supplierRepository;
        public SupplierService() { }
        public SupplierService(ISupplierRepository supplierRepository)
        {
            this._supplierRepository = supplierRepository;
        }

        public bool Delete(int? id)
        {
            return _supplierRepository.Delete(id);
        }

        public List<Supplier> Get()
        {
            return _supplierRepository.Get();
        }

        public Supplier Get(int? id)
        {
            return _supplierRepository.Get(id);
        }

        public bool Insert(SupplierParam supplierParam)
        {
            return _supplierRepository.Insert(supplierParam);
        }

        public bool Update(SupplierParam supplierParam)
        {
            return _supplierRepository.Update(supplierParam);
        }
    }
}
