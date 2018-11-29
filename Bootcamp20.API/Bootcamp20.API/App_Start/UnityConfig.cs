using Bootcamp20.API.BussinessLogic.Interface;
using Bootcamp20.API.BussinessLogic.Interface.Master;
using Bootcamp20.API.Common.Interface.Master;
using Bootcamp20.Common.Interface;
using System.Web.Http;
using Unity;
using Unity.WebApi;

namespace Bootcamp20.API
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<ISupplierRepository, SupplierRepository>();
            container.RegisterType<ISupplierService, SupplierService>();
            
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}