using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Web.Mvc;
using System.Linq;


namespace Vue_MVC_Example.Controllers
{
    public class ExamplesController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Search(String criteria)
        {
            if (!String.IsNullOrEmpty(criteria))
            {

                return View(_search(criteria));

            }

            return View(new List<Models.Search.Result>());
        }

        [HttpPost]
        public JsonResult Search(Models.Search.Query m)
        {
            if (!String.IsNullOrEmpty(m.criteria))
            {

                return Json(_search(m.criteria).ToArray());

            }

            return Json(new Object[0]);
        }

        public ActionResult jQueryWebpack()
        {
            return View();
        }

        public ActionResult jQueryClassic()
        {
            return View();
        }

        public ActionResult MVCModelBinding()
        {

            return View(
                new Models.BindingModel()
                {
                    message = "Hello from ASP.NET MVC!",
                    alert = "Server side message!",
                    guid = Guid.NewGuid()
                });
        }

        public ActionResult EventBus()
        {
            return View();
        }

        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // PRIVATE HELPER FUNCTIONS BELOW - IGNORE
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        private List<Models.Search.Result> _search(String criteria)
        {

            var results = new List<Models.Search.Result>();

            var contents = System.IO.File.ReadAllText(Server.MapPath(@"~/App_Data/sampledata.json"));

            var json = (JObject)JsonConvert.DeserializeObject(contents);

            foreach (KeyValuePair<string, JToken> creature in json)
            {

                var result = creature.Value.ToObject<Models.Search.Result>();

                if (!String.IsNullOrEmpty(result.text))
                {

                    result.text = result.text.Replace("'", "’").Replace("\n", " - ").Replace("\"", "’");

                }

                result.name = result.name.Replace("'", "’").Replace("\"", "’");

                result.imageName = result.imageName.Replace("'", "’").Replace("\"", "’");

                results.Add(result);
            }

            return results.Where(r => r.name.Contains(criteria)).ToList();

        }

    }
}