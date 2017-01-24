using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Vue_MVC_Example.Models.Search
{
    public class Query
    {

        public String criteria { get; set; }

        public Query()
        {

        }

    }

    public class Result
    {
        public string layout { get; set; }
        public string name { get; set; }
        public string manaCost { get; set; }
        public int cmc { get; set; }
        public List<string> colors { get; set; }
        public string type { get; set; }
        public List<string> types { get; set; }
        public string text { get; set; }
        public string imageName { get; set; }
        public List<string> colorIdentity { get; set; }
    }
}