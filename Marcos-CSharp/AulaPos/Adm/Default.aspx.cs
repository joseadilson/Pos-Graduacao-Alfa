using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Adm_Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        ControleLogin cl = new ControleLogin();
        if (cl.verUsuarioLogado(Session["usuario"] as Usuario))
            Response.Redirect("~/Adm/Inicio.aspx");
    }

    protected void btnLogin_Click(object sender, EventArgs e)
    {
        ControleLogin cl = new ControleLogin();
        int codigo = cl.buscarUsuario(txtLogin.Text, txtSenha.Text);

        if (codigo > 0)
        {
            Usuario usuario = new Usuario(codigo);
            Session["usuario"] = usuario;
            Response.Redirect("~/Adm/Inicio.aspx");
        }
    }
}