using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Adm_Inicio : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if ( !IsPostBack )
        {
            MultiViewNoticia.ActiveViewIndex = 0;
        }

    }
    protected void btnLista_Click(object sender, EventArgs e)
    {
        MultiViewNoticia.ActiveViewIndex = 0;
    }
    protected void GridView2_SelectedIndexChanged(object sender, EventArgs e)
    {
      
       
    }

}