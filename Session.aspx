<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Session.aspx.cs" Inherits="CasperJs.Session" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Session</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <div id="username"><%= Session["User"].ToString() %></div>
    </div>
    </form>
</body>
</html>
