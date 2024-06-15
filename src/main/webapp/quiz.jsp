<!DOCTYPE html>
<html>
    <head>
        <title>Quiz App</title>
        <link rel="stylesheet" href="styleQ.css">
    </head>
<body>
<%
    //Retrieve the session object
    HttpSession session1 = request.getSession(false);

    // Check if the session is not null and the username attribute is set
    if (session1 != null && session1.getAttribute("username") != null) {
    // Get the username from the session
    String username = (String) session1.getAttribute("username");
%>
<div class="app">
    <h1>JAVA Quiz</h1>
    <div class="quiz">
       <h2 id="question">Question goes here</h2>
       <div id="answer-buttons">
        <button class="btn">Answer 1</button>
        <button class="btn">Answer 2</button>
        <button class="btn">Answer 3</button>
        <button class="btn">Answer 4</button>
       </div>
       <button id="next-btn">Next</button>
    </div>   
</div>
    
    <script src="script.js"></script>
       <%
        } else {
            // Redirect to the login page if the session is not valid
            response.sendRedirect("login.jsp");
        }
        %>
</body>    
</html>