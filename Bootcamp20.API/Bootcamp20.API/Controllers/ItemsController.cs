using Bootcamp20.API.BussinessLogic.Interface;
using Bootcamp20.API.DataAccess.Models;
using Bootcamp20.API.DataAccess.Param;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Bootcamp20.API.Controllers
{
    public class ItemsController : ApiController
    {
        private readonly IItemService _itemService;
        public ItemsController() { }
        public ItemsController(IItemService itemService)
        {
            this._itemService = itemService;
        }


        // GET: api/Items
        [HttpGet]
        public IEnumerable<Item> Get()
        {
            return _itemService.Get();
        }

        // GET: api/Items/5
        [HttpGet]
        public Item Get(int id)
        {
            return _itemService.Get(id);
        }

        // POST: api/Items
        [HttpPost]
        public void Post(ItemParam itemParam)
        {
            if(ModelState.IsValid)
            {
                _itemService.Insert(itemParam);
            }
        }

        // PUT: api/Items/5
        [HttpPut]
        public void Put(ItemParam itemParam)
        {
            if(ModelState.IsValid)
            {
                _itemService.Update(itemParam);
            }
        }

        // DELETE: api/Items/5
        [HttpDelete]
        public void Delete(int id)
        {
            _itemService.Delete(id);
        }
    }
}
