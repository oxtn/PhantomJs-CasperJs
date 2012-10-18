using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CasperJs
{
    public partial class Session : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var session = Session["Session"] as bool?;
            if(!session.GetValueOrDefault(false))
                Response.Redirect("~/Home.aspx");
        }
    }
}