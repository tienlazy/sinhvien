<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <style>

.card {
  width: 450px;
  height: 250px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
  border-radius: 6px;
  position: relative;
  margin: 1.5rem;
}

.card .additional {
  position: absolute;
  width: 150px;
  height: 100px;
  background: linear-gradient(#dE685E, #EE786E);
  transition: height 2s;
  overflow: hidden;
  z-index: 2;
}

.card:hover .additional {
  height: 200px;
  border-radius: 0 5px 5px 0;
}

  </style>
</head>
<body> <br>  <br> <br> <br> <br> <br> <br> <br> <br> 
    <div class="center">
        <div class="card">
          <div class="additional" style="bottom: 0px;">
              <h1>Jane </h1>
          </div>
          <div class="general">
            <h1>Jane Doe</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.</p>
            <span class="more">Mouse over the card for more info</span>
          </div>
        </div>
      </div>
</body>
</html>
