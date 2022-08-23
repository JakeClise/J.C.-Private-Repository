<html>
<body>
    <div id='background'>
        <div id='character' style='position:absolute; top:100px; left:450px; background-image: url("img/down1.png); width:59px; height:86px;'></div>
    </div>
    <script type="text/javascript">
        var leftValue = 450, topValue = 100;
        function update(){
            document.getElementById("character").style.left = leftValue+"px";
            document.getElementById("Character").style.top = topValue+"px";
        }
        document.onkeydown = function(e) {
            console.log('e:',e)
            console.log('e.keycode', e.keyCode);
            if (e.keyCode == 37){
                leftValue = leftValue - 10
            }
            else if (e.keyCode == 39){
                leftValue = leftValue + 10;
            }
            else if (e.keyCode == 40){
                topValue = topValue+10;
            }
        }
    </script>
</body>
</html>
