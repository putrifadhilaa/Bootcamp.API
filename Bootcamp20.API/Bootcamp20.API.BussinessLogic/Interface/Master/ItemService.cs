using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bootcamp20.API.DataAccess.Models;
using Bootcamp20.API.DataAccess.Param;
using Bootcamp20.API.Common.Interface.Master;

namespace Bootcamp20.API.BussinessLogic.Interface.Master
{
    public class ItemService : IItemService
    {
        private readonly IItemRepository _itemRepository;
        public ItemService() { }
        public ItemService(IItemRepository itemRepository)
        {
            this._itemRepository = itemRepository;
        }
        public bool Delete(int? id)
        {
            return _itemRepository.Delete(id);
        }

        public List<Item> Get()
        {
            return _itemRepository.Get();
        }

        public Item Get(int? id)
        {
            return _itemRepository.Get(id);
        }

        public bool Insert(ItemParam itemParam)
        {
            return _itemRepository.Insert(itemParam);
        }

        public bool Update(ItemParam itemParam)
        {
            return _itemRepository.Update(itemParam);
        }
    }
}
