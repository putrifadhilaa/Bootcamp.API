using Bootcamp20.API.DataAccess.Models;
//using Bootcamp20.DataAccess.Models;
using Bootcamp20.DataAccess.Param;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bootcamp20.API.BussinessLogic.Interface
{
    public interface ISupplierService
    {
        List<Supplier> Get();
        Supplier Get(int? id);
        List<Supplier> GetName(string name);
        bool Insert(SupplierParam supplierParam);
        bool Update(SupplierParam supplierParam);
        bool Delete(int? id);
    }
}
