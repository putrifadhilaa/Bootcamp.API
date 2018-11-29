using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Bootcamp20.Client.Controllers
{
    public class SuppliersController : Controller
    {

        // GET: Suppliers
        public ActionResult Index()
        {
            return View();
        }

        //get create
        public ActionResult Create()
        {
            return View();
        }

        //post create
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Create()
        //{
        //    return View();
        //}

        //get edit
        public ActionResult Edit(int? id)
        {
            return View();
        }

        //post edit
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit()
        {
            return View();
        }

        //
    }
}