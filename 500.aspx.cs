using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CasperJs
{
    public partial class _500 : System.Web.UI.Page
    {
        protected void Page_Init(object sender, EventArgs e)
        {
            Response.StatusCode = (int)HttpStatusCode.InternalServerError;
        }
    }
}