using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CasperJs
{
    public partial class Form : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if(IsPostBack)
            {
                Session["Session"] = true;
                Session["User"] = username.Text;
                Response.Redirect("~/Session.aspx", true);

            }
        }
    }
}