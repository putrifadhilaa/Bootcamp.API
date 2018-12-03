using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bootcamp20.API.DataAccess.Models;
using System.Data.Entity;
using Bootcamp20.DataAccess.Param;

namespace Bootcamp20.API.Common.Interface.Master
{
    public class ItemRepository : IItemRepository
    {
        MyContext context = new MyContext();
        bool status = false;
        public bool Delete(int? id)
        {
            var getitem = Get(id);
            getitem.IsDelete=true;
            context.Entry(getitem).State = EntityState.Modified;
            var result = context.SaveChanges();
            if(result > 0)
            {
                status = true;
            }
            return status;
        }

        public List<Item> Get()
        {
            try
            {
                return context.Items.ToList();
            }
            catch (Exception ex)
            {
                Console.Write(ex.InnerException);
            }
            return context.Items.ToList();
        }

        public Item Get(int? id)
        {
            if(id == null)
            {
                Console.Write("Id is null");
            }
            Item item = context.Items.SingleOrDefault(x => x.Id == id);
            if(item == null)
            {
                Console.Write("Item is null");
            }
            return item;
        }

        public bool Insert(ItemParam itemParam)
        {
            Item item = new Item(itemParam);
            item.Supplier = context.Suppliers.Find(Convert.ToInt16(itemParam.Supplier));
            context.Items.Add(item);
            var result = context.SaveChanges();
            if (result > 0)
            {
                status = true;
            }
            return status;
        }
        

        public bool Update(ItemParam itemParam)
        {
            Item getitem = Get(itemParam.Id);
            getitem.Update(itemParam);
            context.Entry(getitem).State = EntityState.Modified;
            var result = context.SaveChanges();
            if (result > 0)
            {
                status = true;
            }
            return status;
        }
        
    }
}
