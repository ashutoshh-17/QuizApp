<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="jakarta.servlet.http.HttpSession" %>
<!DOCTYPE html>
<html>
<head>
<%String username = (String) session.getAttribute("username"); %>
<meta charset="UTF-8">
<title>Welcome, <%= username %>!</title>
<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            color: #333;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 30px;
            max-width: 500px;
            width: 100%;
            text-align: center;
        }
        h1 {
            color: #333;
            margin-bottom: 20px;
        }
        .info_list {
            text-align: left;
            margin-top: 20px;
        }
        .info_list h3 {
            color: #555;
            margin-bottom: 15px;
        }
        .info {
            background-color: #f0f0f0;
            border-radius: 5px;
            padding: 10px;
            margin-bottom: 10px;
            color: #555;
        }
        .buttons {
            margin-top: 30px;
            display: flex;
            justify-content: space-around;
        }
        .buttons a {
            text-decoration: none;
        }
        .buttons button {
            background-color: #007BFF;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }
        .buttons .quit {
            background-color: #dc3545;
        }
        .buttons button:hover {
            background-color: #0056b3;
        }
        .buttons .quit:hover {
            background-color: #c82333;
        }
    </style>
<%
    //Retrieve the session object
    HttpSession session1 = request.getSession(false);

    // Check if the session is not null and the username attribute is set
    if (session1 != null && session1.getAttribute("username") != null) {
    // Get the username from the session
   // String username = (String) session1.getAttribute("username");
%>
    
 <div class="container">
        <h1>Welcome, <%= username %>!👋</h1>
        <p>You have successfully logged in!</p>
        <div class="info_list">
            <h3>◼ Some Basic Rules of the Quiz</h3> 
            <div class="info">1) Please do not exit until the Quiz is finished.</div>
            <div class="info">2) Option once selected cannot be reselected.</div>
            <div class="info">3) You get +1 score for each correct answer.</div>
            <div class="info">4) Take your time to answer the questions.</div>
        </div>
        <div class="buttons">
              <a href="quiz.jsp"><button class="restart">Continue</button></a>
            
              <a href ="logout.jsp"><button class="quit">Exit Quiz</button></a>
        </div>
    </div>

        <%
        } else {
            // Redirect to the login page if the session is not valid
            response.sendRedirect("login.jsp");
        }
        %>