using Bootcamp20.API.DataAccess.Models;
using Bootcamp20.DataAccess.Param;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bootcamp20.API.Common.Interface.Master
{
    public interface IItemRepository
    {
        List<Item> Get();
        List<Item> GetName(string name);
        Item Get(int? id);
        bool Insert(ItemParam itemParam);
        bool Update(ItemParam itemParam);
        bool Delete(int? id);
    }
}
