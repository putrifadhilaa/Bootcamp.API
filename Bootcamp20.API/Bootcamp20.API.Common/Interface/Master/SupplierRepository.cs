using Bootcamp20.Common.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bootcamp20.API.DataAccess.Models;
using Bootcamp20.API.DataAccess.Param;
using System.Data.Entity;
using Bootcamp20.DataAccess.Param;

namespace Bootcamp20.API.Common.Interface.Master
{
    public class SupplierRepository : ISupplierRepository
    {
        MyContext context = new MyContext();
        bool status = false;
        public bool Delete(int? id)
        {
            var getsupplier = Get(id);
            getsupplier.Delete();
            context.Entry(getsupplier).State = EntityState.Modified;
            var result = context.SaveChanges();
            if (result > 0)
            {
                status = true;
            }
            return status;
        }

        public List<Supplier> Get()
        {
            return context.Suppliers.Where(x => x.IsDelete == false).ToList();
        }

        public Supplier Get(int? id)
        {
            if(id == null)
            {
                Console.Write("Id is null");
            }
            Supplier supplier = context.Suppliers.SingleOrDefault(x => x.Id == id);
            if (supplier == null)
            {
                Console.Write("Supplier is null");
            }
            return supplier;
        }

        public List<Supplier> GetName(string name)
        {
            return context.Suppliers.Where(x => x.Name.Contains(name) && x.IsDelete == false).ToList();
        }

        public bool Insert(SupplierParam supplierParam)
        {
            var push = new Supplier(supplierParam);
            context.Suppliers.Add(push);
            var result = context.SaveChanges();
            if (result > 0)
            {
                status = true;
            }
            return status;
        }
        

        public bool Update(SupplierParam supplierParam)
        {
            var getsupplier = Get(supplierParam.Id);
            getsupplier.Update(supplierParam);
            context.Entry(getsupplier).State = EntityState.Modified;
            var result = context.SaveChanges();
            if (result > 0)
            {
                status = true;
            }
            return status;
        }
        
    }
}
