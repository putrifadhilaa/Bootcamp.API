using Bootcamp20.API.DataAccess.Models;
using Bootcamp20.API.DataAccess.Param;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bootcamp20.API.BussinessLogic.Interface
{
    public interface IItemService
    {
        List<Item> Get();
        Item Get(int? id);
        bool Insert(ItemParam itemParam);
        bool Update(ItemParam itemParam);
        bool Delete(int? id);
    }
}
