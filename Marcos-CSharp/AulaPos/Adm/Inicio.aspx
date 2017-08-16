<%@ Page Title="" Language="C#" MasterPageFile="~/Adm/MasterPage.master" AutoEventWireup="true" CodeFile="Inicio.aspx.cs" Inherits="Adm_Inicio" %>
<%@ Register Src="~/Adm/BarraEdicao.ascx" TagPrefix="uc1" TagName="BarraEdicao" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>


<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <asp:Label Text="Faculdade Alfa - Notícias " runat="server" Font-Size="42px" /><br /><br />
   
    <asp:MultiView ID="MultiViewNoticia" runat="server">
        <asp:View ID="tabListagem" runat="server">
            <asp:ObjectDataSource ID="ObjectDataSource1" runat="server" OldValuesParameterFormatString="original_{0}" SelectMethod="GetData" TypeName="DataSetTableAdapters.TbNoticiaTableAdapter"></asp:ObjectDataSource>
            <asp:GridView ID="GridView2" runat="server" AutoGenerateColumns="False" DataKeyNames="not_id" DataSourceID="ObjectDataSource1" AllowSorting="true" OnSelectedIndexChanged="GridView2_SelectedIndexChanged">
                <Columns>
                    <asp:BoundField DataField="not_id" HeaderText="not_id" Visible="false" InsertVisible="False" ReadOnly="True" SortExpression="not_id" />
                    <asp:BoundField DataField="not_titulo" HeaderText="Titulo" SortExpression="not_titulo" />
                     <asp:BoundField DataField="not_texto" HeaderText="Texto" SortExpression="not_texto" />
                    <asp:BoundField DataField="not_data" HeaderText="Data" SortExpression="not_data" />
                    <asp:BoundField DataField="not_imagem" HeaderText="Url de Imagem" SortExpression="not_imagem" />
                </Columns>
            </asp:GridView>
        </asp:View>
    </asp:MultiView>

</asp:Content>

